import PropTypes from 'prop-types';
import React from 'react';
import { StatusPane } from './SavingStatus.styles.js';
import { SavingSpinner } from '../shared/SavingSpinner.jsx';

export class SavingStatus extends React.PureComponent {

    static propTypes = {
        watchedEntity: PropTypes.object.isRequired,
        isSaving: PropTypes.number.isRequired,
        save: PropTypes.func.isRequired,
    };

    componentWillUpdate(nextProps) {
        if (this.props.watchedEntity !== nextProps.watchedEntity) {
            this.props.save();
        }
    }

    render() {
        const text = this.props.isSaving > 0 ? 'Saving' : 'Saved';
        const icon = this.props.isSaving > 0
            ? <SavingSpinner />
            : <i className="glyphicon glyphicon-check" alt="Saved"/>;

        return (
            <StatusPane className="navbar-right">
                {icon}{'\u00A0'}{text}
            </StatusPane>
        );
    }
}
