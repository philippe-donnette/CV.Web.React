import React, { Component } from 'react';

class ErrorNotFound extends Component {
    
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default ErrorNotFound;