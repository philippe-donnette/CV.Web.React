import React, { Component } from 'react';

class TagCloud extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        let cloudItems = this.props.items.map((item) => {
            return (
                <li key={item.id} onClick={this.props.onTagClicked.bind(this, item)} className="dn-tag">
                    <i className={`dn-tag-icon-${item.weight} ${item.iconClass}`}></i>&nbsp;
                    <span className={`dn-tag-${item.weight}`}>{item.name}</span>
                </li>
            );
        });

        let ulClass = 'list-inline';
        if (this.props.isInContainer) {
            ulClass += ' well dn-tag-well';
        }

        return (
            <ul className={ulClass}>
                {cloudItems}
            </ul>
        );
    }
}

export default TagCloud;