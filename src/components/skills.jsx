import React, { Component } from 'react';
import Title from './header/title';

class Skills extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-6 col-md-4 col-sm-5 hidden-xs">
                    <Title iconClass="glyphicon glyphicon-wrench">Skills</Title>
                </div> 
                <div className="col-lg-6 col-md-8 col-sm-7 col-xs-12">
                    {
                        // Breadcrumb goes here
                    }
                </div>
            </div>            
        );
    }
}

export default Skills;