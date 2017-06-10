import React, { Component } from 'react';

class CarouselIndicators extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        let indicators = [], i = 0;

        for (i = 0; i < this.props.items.length; i++) {
            let isActive = this.props.selected === i;
            indicators.push(
                <li key={this.props.items[i].id} className={isActive ? 'active' : ''} onClick={this.props.onChange.bind(this, i)}>
                    <span className="sr-only">{this.props.items[i].id}</span>
                </li>
            );
        }

        return (
            <ol className="dn-experience-indicators">
                {indicators}
            </ol>
        );
    }
}

export default CarouselIndicators;