'use strict';

const _ = require('lodash');
const express = require('express');
const router = express.Router();

const { getData } = require('./helpers');

router.post('/', async (req, res) => {
    const { id } = req.body;
    try {
        if (_.isEmpty(id)) {
            throw new Error('No ID passed in.');
        }
        res.status(200).json(await getData({ id }));
    } catch (error) {
        return res.status(500).send({ error: _.get(error, 'message', error) });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        if (_.isEmpty(id)) {
            throw new Error('No ID passed in.');
        }
        res.status(200).json(await getData({ id }));
    } catch (error) {
        return res.status(500).send({ error: _.get(error, 'message', error) });
    }
});

module.exports = router;
