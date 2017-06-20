import React, { Component } from 'react';
import ErrorModal from '../modal/error-modal';
import Modal from '../modal/modal';

class ImageModal extends Component {
    render() {
        if (typeof this.props.image !== 'undefined' && this.props.image !== null) {
            return (
                <Modal 
                    modalId={this.props.modalId} 
                    title={this.props.image.title} 
                    titleIconClass={''}
                >    
                    <img src={`./assets/${this.props.image.imageUrl}`} alt={this.props.image.title} className="img-responsive dn-img-center" />
                </Modal>
            );
        } else {
            return (
                <ErrorModal modalId={this.props.modalId} title="Error">Image not found</ErrorModal>
            );
        }
    }
}

export default ImageModal;