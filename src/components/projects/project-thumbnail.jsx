import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectThumbnail extends Component {
    render() {

        return (
            <li>
                <div className="panel dn-panel">
                    <div className="panel-heading dn-panel-heading">
                        {this.props.project.name}
                    </div>
                    <div className="panel-body dn-panel-body">
                        <img src={`./assets/${this.props.project.primaryImage}`} 
                            className="img-responsive dn-img-icon-project"
                            alt={this.props.project.name} title={this.props.project.name} />
                    </div>
                    <div className="panel-footer dn-panel-footer">
                        <Link to={`/projects/${this.props.project.name}/${this.props.project.id}`} className="btn dn-bt-primary btn-default" role="button"><i className="glyphicon glyphicon-arrow-right"></i> More</Link>
                    </div>
                </div>
            </li>    
        );
    }
}

export default ProjectThumbnail;