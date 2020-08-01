'use strict';

const _ = require('lodash');
const fetch = require('isomorphic-fetch');
const the = require('await-the');
const momentUTC = require('moment').utc;

const MAX_PAGES = 25; // Avoid possible infinite loops
let cachedShots = []; // Store shots in-memory to speed up render time
let lastSyncDate = momentUTC(-1).toISOString(); // -1 is epoch

const getCachedShots = async () => {
    // cache shots for 1 day
    const hasCachedExpired = momentUTC(lastSyncDate)
        .add(1, 'day')
        .isSameOrBefore(momentUTC());
    if (hasCachedExpired || _.isEmpty(cachedShots)) {
        const shots = await getAllShots();
        cachedShots = simplifyShots(shots);
        lastSyncDate = momentUTC().toISOString();
    }
    return cachedShots;
};

const getAllShots = async () => {
    const accessToken = process.env.ACCESS_TOKEN;
    if (!accessToken) {
        console.log(JSON.stringify(process.env, null, 4));
        throw new Error('Could not find an access token to connect to Dribbble.');
    }

    let allShots = [];
    let done = false;
    let count = 1;
    await the.whileMax(
        () => !done,
        MAX_PAGES,
        async () => {
            const response = await fetch(`https://api.dribbble.com/v2/user/shots?page=${count}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    Accept: 'application/json'
                }
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error(
                    `Failed to get shots from Dribbble - ${response.status}: ${response.statusText}: ${_.get(
                        result,
                        'message',
                        JSON.stringify(result)
                    )}`
                );
            }

            count++;
            allShots = [...allShots, ...result];

            done = _.isEmpty(result);
        }
    );
    return allShots;
};

const simplifyShots = shots => {
    return _.map(shots, shot => {
        const { title, description, tags } = shot;
        const image = _.get(shot, 'images.normal');
        const video = _.get(shot, 'video.url');
        let { attachments } = shot;

        attachments = _.map(attachments, attachment => _.get(attachment, 'url'));

        return { title, description, image, video, attachments, tags };
    });
};

module.exports = async () => {
    return await getCachedShots();
};
