import React, { Component } from 'react';
import Title from './title';
import Breadcrumb from './breadcrumb';

class PageHeader extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-6 col-md-4 col-sm-5 hidden-xs">
                    <Title iconClass={this.props.iconClass}>{this.props.children}</Title>
                </div> 
                <div className="col-lg-6 col-md-8 col-sm-7 col-xs-12">
                    <Breadcrumb iconClass={this.props.iconClass} items={this.props.breadcrumbItems}>{this.props.children}</Breadcrumb>
                </div>
            </div>            
        );
    }
}

export default PageHeader;