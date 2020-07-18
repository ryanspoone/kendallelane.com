import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import { get } from 'lodash';

import TopBar from './TopBar';
import Footer from './Footer';
import Info from './info/Info';
import Home from './home/Home';

class NoMatch extends Component {
    static propTypes = {
        location: PropTypes.shape({
            pathname: PropTypes.string
        })
    };

    render() {
        return (
            <div className="ui inverted red raised very padded text container segment">
                <strong>Error!</strong> No page found matching:
                <div className="ui inverted black segment">
                    <code>{get(this.props, 'location.pathname')}</code>
                </div>
            </div>
        );
    }
}

const App = () => (
    <div className="app">
        <TopBar />

        <Switch>
            <Route path="/info" component={Info} />
            <Route path="/home" component={Home} />

            <Route exact path="/" render={() => <Redirect to="/home" component={Home} />} />

            <Route component={NoMatch} />
        </Switch>

        <Footer />
    </div>
);

export default App;
