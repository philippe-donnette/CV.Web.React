import React, { Component } from 'react';
import SkillModal from './skill-modal';

class TagCloud extends Component {
    
    constructor(props) {
        super(props);
        this.state = { skill: null };
    }

    openTag(tag) {
        this.setState(
            { skill: tag }, 
            () => $('#skill-modal-id').modal()
        );
    }
    
    render() {
        let cloudItems = this.props.items.map((item) => {
            return (
                <li key={item.id} onClick={this.openTag.bind(this, item)} className="dn-tag">
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
                <SkillModal skill={this.state.skill} />
            </ul>
        );
    }
}

export default TagCloud;