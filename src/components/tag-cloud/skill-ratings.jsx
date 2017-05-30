import React, { Component } from 'react';

class SkillRatings extends Component {
    
    constructor(props) {
        super(props);
        let ratings = this.getRatings(props.rating, props.max);
        this.state = { ratings: ratings };
    }

    getRatings(rating, max) {
        let ratings = [];
        for (let i = 1; i <= max; i++) {
            if (i <= rating) {
                ratings.push({ id: i, selected: true });
            } else {
                ratings.push({ id: i, selected: false });
            }
        }
        return ratings;
    }

    componentWillReceiveProps(nextProps) {
        let ratings = this.getRatings(nextProps.rating, nextProps.max);
        this.setState({ ratings: ratings });
    }

    render() {
        let displayStars = this.state.ratings.map((item) => {
            let starClassName = item.selected ? 'fa-star' : 'fa-star-o';
            return (
                <li key={item.id}>
                    <i className={'fa fa-2x dn-star ' + starClassName}></i>
                </li>
            );
        });

        return (
            <ul className="list-inline">
                {displayStars}
            </ul>
        );
    }
}

export default SkillRatings;