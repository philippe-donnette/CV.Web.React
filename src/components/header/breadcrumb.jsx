import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
    render() {

        let breadcrumbItems = this.props.items.map((item) => {
            return (
                <li key={item.title}>
                    <Link to={item.path}><i className={item.iconClass}></i> {item.title}</Link>
                </li>
            );
        });

        return (
            <ol className="breadcrumb dn-breadcrumb pull-right">
                {breadcrumbItems}
                <li className="active"><span><i className={this.props.iconClass}></i> {this.props.children}</span></li>
            </ol>
        );
    }
}

export default Breadcrumb;