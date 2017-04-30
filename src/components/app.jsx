import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';
import Header from './header';
import Home from './home';
import Skills from './skills';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="container-fluid">
                    <Header />
                    <div className="row">
                        <Route exact path="/" component={Home} />
                        <Route path="/skills" component={Skills} />
                    </div>
                </div>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);