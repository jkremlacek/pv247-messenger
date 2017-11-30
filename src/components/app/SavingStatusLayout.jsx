import * as React from 'react';
import { SavingStatus } from '../../containers-redux/message-list/SavingStatus.jsx';

//TODO: Saving status for channels (implementation handles only messages)

const SavingStatusLayout = () => (
    <div className="col-xs-2 col-md-3">
        <SavingStatus />
    </div>
);

export { SavingStatusLayout };