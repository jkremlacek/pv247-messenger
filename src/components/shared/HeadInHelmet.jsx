import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import * as routes from '../../constants/routes';

const convertRouteToTitle = (route) => {
    switch(route) {
        case routes.ROOT:
            return 'Messages';

        case routes.PROFILE:
            return 'Profile';

        case routes.LOGIN:
            return 'Login';

        default:
            return 'Unknown';
    }
};

const HeadInHelmet = ({ route }) => (
    <Helmet>
        <title>{convertRouteToTitle(route)} - Message list</title>
    </Helmet>
);

HeadInHelmet.propTypes = {
    route: PropTypes.string.isRequired,
};

export { HeadInHelmet };