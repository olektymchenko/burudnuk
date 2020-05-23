import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import UserProfile from '../components/profile/userProfile';
import { connect } from 'react-redux';
import { getOwnUserData } from '../redux/actions/userActions';
import PropTypes from 'prop-types';


class user extends Component {
    componentDidMount() {
        this.props.getOwnUserData();
    }
    render() {
        const navbar = document.getElementById('navigation-menu-width');
        let navbarWidth;
        if (navbar !== null) {
            navbarWidth = navbar.offsetWidth;
        }

        return (
            <Fragment>
                {this.props.loading === true ? (
                    <div style={{ height: `calc(98vh - 68px)`, width: `calc(${navbarWidth}px -50px)` }} className="d-flex justify-content-center align-items-center"><Spinner animation="grow" /></div>
                ) : (<Container>
                    <Row>
                        <Col className="d-flex justify-content-center" xs={12} md={6} lg={4} xl={4}>
                            <UserProfile userdata={this.props} />
                        </Col>
                        <Col className="d-flex justify-content-center" xs={10} md={10} lg={4} xl={4}>
                        </Col>
                    </Row>
                </Container >)
                }
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    userdata: state.user.userdata,
    loading: state.user.loading
})

user.propTypes = {
    userdata: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    getOwnUserData: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { getOwnUserData })(user);
