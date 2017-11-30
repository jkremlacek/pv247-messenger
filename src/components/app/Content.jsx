import * as React from 'react';
import { Route } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { MessageListRedux } from '../../containers-redux/message-list/MessageList.jsx';
//import { ChannelListRedux } from '../../containers-redux/channel-list/ChannelList.jsx';
import { Profile } from '../../containers-redux/profile/Profile.jsx';

const Content = () => [
    <Route exact path={routes.ROOT} component={()=>(
        <div className="row">
            <div className="col-sm-4"><MessageListRedux/></div>
            <div className="col-sm-8"><MessageListRedux/></div>
        </div>
    )} key="default" />,
    <Route path={routes.PROFILE} component={Profile} key="profile" />,
];

export { Content };