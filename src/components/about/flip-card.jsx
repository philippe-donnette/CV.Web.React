import React, { Component } from 'react';

class FlipCard extends Component {
    render() {
        
        let textFront = null;
        if (this.props.card.textFront !== null) {
            const htmlTextFront = { __html: this.props.card.textFront };
            textFront = <p dangerouslySetInnerHTML={htmlTextFront}></p>;
        }

        let imageFront = null;
        if (this.props.card.imageFrontUrl !== null) {
            imageFront = <img src={`./assets/${this.props.card.imageFrontUrl}`} className="img-responsive" />;
        }

        let imageBack = null;
        if (this.props.card.imageBackUrl !== null) {
            imageBack = <img src={`./assets/${this.props.card.imageBackUrl }`} className="img-responsive" />;
        }

        let textBack = null;
        if (this.props.card.textBack !== null) {
            const htmlTextBack = { __html: this.props.card.textBack };
            textBack = <p dangerouslySetInnerHTML={htmlTextBack}></p>;
        }

        return (
            <div className={`dn-flipcard-container dn-flipcard-container-rotate-${this.props.card.rotate}`}>
                <div className={`dn-flipcard-card dn-flipcard-shadow dn-flipcard-card-rotate-${this.props.card.rotate}`}>
                    <div className="dn-flipcard-face dn-flipcard-front">
                        {imageFront}
                        {textFront}
                        <div className="dn-flipcard-caption">
                            <i className={this.props.card.captionIconClass}></i> {this.props.card.caption}
                        </div>                
                    </div>
                    <div className="dn-flipcard-face dn-flipcard-back center">
                        {imageBack}
                        {textBack}
                    </div>
                </div>
            </div>
        );
    }
}

export default FlipCard;