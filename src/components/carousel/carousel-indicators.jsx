import React, { Component } from 'react';

class CarouselIndicators extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        let selected = this.props.selected === null ? this.props.items[0].id : this.props.selected;

        return (
            <ol className="dn-experience-indicators">
                {
                    this.props.items.map((item) => {
                        let isActive = selected === item.id;
                        return (
                            <li key={item.id} className={isActive ? 'active' : ''} onClick={this.props.onChange.bind(this, item.id)}>
                                <span className="sr-only">{item.id}</span>
                            </li>
                        );
                    })
                }
            </ol>
        );
    }
}

export default CarouselIndicators;