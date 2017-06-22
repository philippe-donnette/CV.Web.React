import React, { Component } from 'react';
import FlipCard from './flip-card';

class ProfileCards extends Component {
    render() {
        return (
            <div className="row">
                {
                    this.props.cards.map((card) => {
                        return (
                            <div key={card.id} className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <FlipCard card={card} />
                            </div>
                        );
                    })
                } 
            </div>
        );
    }
}

export default ProfileCards;