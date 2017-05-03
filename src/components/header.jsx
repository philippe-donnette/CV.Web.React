import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top navbar-inner" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" 
                        data-target="#donola-navbar" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/" className="navbar-brand">Philippe Donnette</Link>
                </div>
                <div className="collapse navbar-collapse" id="donola-navbar">
                    <ul className="nav navbar-nav">
                        <li className="hidden-sm hidden-xs"><NavLink to="/" className="navbar-brand"><i className="fa fa-home"></i> Home</NavLink></li>
                        <li><NavLink to="/skills"><i className="glyphicon glyphicon-wrench hidden-sm"></i> Skills</NavLink></li>
                        <li><NavLink to="/qualifications"><i className="glyphicon glyphicon-education hidden-sm"></i> Qualifications</NavLink></li>
                        <li><NavLink to="/experience"><i className="fa fa-lightbulb-o hidden-sm"></i> Experience</NavLink></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-suitcase hidden-sm"></i> Projects <b className="caret"></b>
                            </a>
                            <ul className="dropdown-menu">
                                <li><NavLink to="/projects">View All</NavLink></li>
                                <li className="divider"></li>
                                {
                                    this.props.projects.map((project) => {
                                        return <li><NavLink to={{ pathname: '/projects', query: { id: project.id, name: project.name } }}>{project.name}</NavLink></li>;
                                    })
                                }
                            </ul>
                        </li>
                        <li><NavLink to="/about"><i className="fa fa-user hidden-sm"></i> About Me</NavLink></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right dn-padding-r-10">
                        <li className="dropdown">
                            <a href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-ellipsis-h"></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href={this.props.gitHubUrl} target="_blank"><i className="fa fa-github"></i> Github</a></li>
                                <li className="divider"></li>
                                <li><a href={this.props.linkedinUrl} target="_blank"><i className="fa fa-linkedin-square"></i> Linkedin</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>            
        );
    }
}

export default Header;