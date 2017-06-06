import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions/index';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Skills from './skills';
import Experience from './experience';
import AboutMe from './about-me';
import Qualifications from './qualifications';
import Projects from './projects';
import Project from './project';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

export class App extends Component {

    componentWillMount() {
        this.props.actions.getProjects();
        this.props.actions.getPerson();
    }

    render() {
        return (
            <Router history={history}>
                <div className="container-fluid">
                    <Header 
                        projects={this.props.projects} 
                        githubUrl={this.props.person.gitHubUrl} 
                        linkedinUrl={this.props.person.linkedinUrl} 
                        fullName={this.props.person.firstname + ' ' + this.props.person.lastname} 
                    />
                    <div className="container">
                        <Route exact path="/" component={Home} person={this.props.person} />
                        <Route path="/skills" component={Skills} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/projects/:name/:id" component={Project} />
                        <Route path="/qualifications-training" component={Qualifications} />
                        <Route path="/experience" component={Experience} />
                        <Route path="/about" component={AboutMe} />
                    </div>
                    <Footer 
                        fullName={this.props.person.firstname + ' ' + this.props.person.lastname} 
                        role={this.props.person.occupation}
                    />
                </div>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
        person: state.person,
        projects: state.projects
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);