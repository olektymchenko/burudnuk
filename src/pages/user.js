import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserProfile from '../components/profile/userProfile';
import CreateNewDeal from '../components/deals/createNew';
import { connect } from 'react-redux';
import { getOwnUserData } from '../redux/actions/userActions';
import PropTypes from 'prop-types';


class user extends Component {
    componentDidMount() {
        this.props.getOwnUserData();
    }
    render() {

        return (
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center" xs={12} md={6} lg={4} xl={4}>
                        <UserProfile userdata={this.props} />
                    </Col>
                    <Col className="d-flex justify-content-center" xs={10} md={10} lg={8} xl={8}>
                        <CreateNewDeal data={this.props} />
                    </Col>
                </Row>
            </Container >
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
