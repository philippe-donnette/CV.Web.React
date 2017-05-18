import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <h1 className="dn-h1"><i className={this.props.iconClass}></i> {this.props.children}</h1>
        );
    }
}

export default Title;