import React, { Component } from 'react';
import ErrorNotFound from '../error/error-not-found';

class ImageGallery extends Component {
    render() {
        if (typeof this.props.images !== 'undefined' && this.props.images !== null) {
            return (
                <div className="masonry-layout">
                    {
                        this.props.images.map((image) => {
                            return (
                                <div key={image.id} className="masonry-item">
                                    <div className="masonry-item-content">
                                        <img src={`./assets/${image.imageUrl}`} alt={image.title} 
                                            className="img-responsive dn-lk-image img-thumbnail dn-img-gallery" 
                                            onClick={this.props.onImageClick.bind(this, image)} />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            );
        } else {
            return (<ErrorNotFound>Images not found</ErrorNotFound>);
        }
    }
}

export default ImageGallery;