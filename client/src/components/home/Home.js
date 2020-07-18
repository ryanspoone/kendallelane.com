import React, { Component } from 'react';
import { get, isEmpty, isString } from 'lodash';
import fetch from 'isomorphic-fetch';

import DribbbleShots from './Dribbble';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dribbbleShots: undefined,
            areDribbbleShotsLoading: true,
            dribbbleShotsError: undefined,
            globalError: undefined
        };
    }

    componentDidMount() {
        try {
            this.getDribbbleShots();
        } catch (err) {
            let error = get(err, 'message') || get(err, 'error', err);
            console.error('Thrown error from server:', error);
            if (isEmpty(error)) {
                error = 'An error status was returned but no error message.';
            }
            if (!isString(error)) {
                error = JSON.stringify(error);
            }
            this.setState({ globalError: error });
        }
    }

    async getDribbbleShots() {
        const response = await fetch('/api/dribbble', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });
        const dribbbleShots = await response.json();
        if (response.status !== 200) {
            const error = get(dribbbleShots, 'error', dribbbleShots);
            this.setState({
                dribbbleShotsError: error,
                dribbbleShots: undefined,
                areDribbbleShotsLoading: false
            });
        } else {
            this.setState({
                dribbbleShots,
                dribbbleShotsError: undefined,
                areDribbbleShotsLoading: false
            });
        }
    }

    render() {
        if (get(this.state, 'globalError')) {
            return (
                <div className="container">
                    <div className="alert alert-danger" role="alert">
                        <h4 className="alert-heading">Oh no!</h4>
                        <p>It seems we failed to get some content.</p>
                        <hr />
                        <p className="mb-0">{get(this.state, 'globalError')}</p>
                    </div>
                </div>
            );
        }
        return (
            <main role="main" className="">
                <div className="page intro">
                    <img className="img-fluid mx-auto d-block" alt="intro" src="/images/about-me.gif" />
                </div>
                <DribbbleShots
                    dribbbleShots={get(this.state, 'dribbbleShots')}
                    error={get(this.state, 'dribbbleShotsError')}
                    isLoading={get(this.state, 'areDribbbleShotsLoading')}
                />
            </main>
        );
    }
}
