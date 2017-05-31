import React, { Component } from 'react';

class SkillVersions extends Component {
    
    constructor(props) {
        super(props);
        this.state = { versions: props.versions };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ versions: nextProps.versions });
    }

    render() {
        let count = 0;
        let displayVersions = this.state.versions.map((item) => {
            return (
                <li key={count++}>
                    {item}
                </li>
            );
        });

        return (
            <ul className="list-inline dn-versions">
                {displayVersions}
            </ul>
        );
    }
}

export default SkillVersions;