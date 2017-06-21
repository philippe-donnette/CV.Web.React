import React, { Component } from 'react';
import FlipCard from './flip-card';

class ProfileCards extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    {
                        this.props.cards.map((card) => {
                            return (<FlipCard key={card.id} card={card} />);
                        })
                    } 
                </div>
            </div>
        );
    }
}

export default ProfileCards;