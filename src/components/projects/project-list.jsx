import React, { Component } from 'react';
import ProjectThumbnail from './project-thumbnail';

class ProjectList extends Component {
    render() {

        return (
            <ul className="dn-projects list-inline">
                {
                    this.props.projects.map((project) => {
                        return (<ProjectThumbnail key={project.id} project={project} />);
                    })
                }
            </ul>    
        );
    }
}

export default ProjectList;