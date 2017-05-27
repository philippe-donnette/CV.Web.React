import React, { Component } from 'react';
import Modal from './modal';

class ErrorModal extends Component {
    
    render() {
        return (
            <Modal 
                title={this.props.title} 
                titleIconClass="glyphicon glyphicon-remove" 
                modalId={this.props.modalId} 
            >
                {this.props.children}
            </Modal>
        );
    }
}

export default ErrorModal;