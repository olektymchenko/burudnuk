***REMOVED***
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UserRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
        {...rest}
        render={(props) => authenticated === false ? <Redirect to='/user' /> : <Component {...props} />}
    />
)

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
})

UserRoute.propTypes = {
    user: PropTypes.object
}

export default connect(mapStateToProps)(UserRoute) 