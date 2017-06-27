import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import ProjectNavLink from './navbar/project-navlink';

export class Header extends Component {
    render() {

        let projectClassName = this.props.location.pathname.startsWith('/projects') ? ' active' : null;

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
                    <Link to="/" className="navbar-brand">{this.props.fullName}</Link>
                </div>
                <div className="collapse navbar-collapse" id="donola-navbar">
                    <ul className="nav navbar-nav">
                        <li className="hidden-sm hidden-xs navlink-wrapper"><NavLink exact to="/"><i className="fa fa-home"></i> Home</NavLink></li>
                        <li className="navlink-wrapper"><NavLink to="/skills"><i className="glyphicon glyphicon-wrench hidden-sm"></i> Skills</NavLink></li>
                        <li className="navlink-wrapper"><NavLink to="/qualifications-training"><i className="glyphicon glyphicon-education hidden-sm"></i> Qualifications</NavLink></li>
                        <li className="navlink-wrapper"><NavLink to="/experience"><i className="fa fa-lightbulb-o hidden-sm"></i> Experience</NavLink></li>
                        <li className="dropdown navlink-wrapper">
                            <a href="#" className={`dropdown-toggle${projectClassName}`} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-suitcase hidden-sm"></i> Projects <b className="caret"></b>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="navlink-wrapper"><NavLink exact to="/projects">View All</NavLink></li>
                                <li className="divider"></li>
                                {
                                    this.props.projects.map((project) => {
                                        return <ProjectNavLink key={project.id} project={project}>{project.name}</ProjectNavLink>;
                                    })
                                }
                            </ul>
                        </li>
                        <li className="navlink-wrapper"><NavLink to="/about"><i className="fa fa-user hidden-sm"></i> About Me</NavLink></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right dn-padding-r-10">
                        <li className="dropdown">
                            <a href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-ellipsis-h"></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href={this.props.githubUrl} target="_blank"><i className="fa fa-github"></i> Github</a></li>
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

export default withRouter(Header);