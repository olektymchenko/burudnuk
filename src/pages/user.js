import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import jwtDecode from 'jwt-decode';
import dayjs from 'dayjs';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faFrown } from '@fortawesome/free-solid-svg-icons';

//Redux staff
import { connect } from 'react-redux';
import { getOwnUserData, logoutUser } from '../redux/actions/userActions';

const token = localStorage.FBIdToken;
let decodedToken;
let userId;
if (token) {
    decodedToken = jwtDecode(token);
    userId = decodedToken.user_id;
    if (decodedToken.exp * 1000 < Date.now()) {
        this.props.logoutUser();
        window.location.href = '/login';
    }
}



class user extends Component {

    componentWillMount() {
        this.props.getOwnUserData(userId);
    }
    render() {
        const { userdata: { nickname, facebook, instagram, tiktok, telegram, createdAt, userImage }, loading } = this.props
        return (
            <Container>
                <Row>
                    <Col>

                    </Col>
                    <Col>
                    </Col>
                    <Col>
                        {loading ? <Spinner animation="border" /> : (<Card style={{ width: '18rem', marginTop: '5%' }} bg="light" border="primary">
                            <Card.Header>Welcome to Burunduk, see your profile</Card.Header>
                            <Card.Img variant="top" src={userImage} />
                            <Card.Body>
                                <Card.Title className="text-center">Hello, {nickname}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                {instagram ? (<ListGroupItem className="d-flex justify-content-between align-items-center">Instagram : <FontAwesomeIcon icon={faSmile} size="2x" style={{ color: 'green' }} /></ListGroupItem>) : (<ListGroupItem className="d-flex justify-content-between align-items-center">Instagram : <FontAwesomeIcon icon={faFrown} size="2x" style={{ color: 'red' }} /></ListGroupItem>)}
                                {facebook ? (<ListGroupItem className="d-flex justify-content-between align-items-center">Facebook : <FontAwesomeIcon icon={faSmile} size="2x" style={{ color: 'green' }} /></ListGroupItem>) : (<ListGroupItem className="d-flex justify-content-between align-items-center">Facebook :<FontAwesomeIcon icon={faFrown} size="2x" style={{ color: 'red' }} /></ListGroupItem>)}
                                {tiktok ? (<ListGroupItem className="d-flex justify-content-between align-items-center">TikTok : <FontAwesomeIcon icon={faSmile} size="2x" style={{ color: 'green' }} /></ListGroupItem>) : (<ListGroupItem className="d-flex justify-content-between align-items-center">TikTok :<FontAwesomeIcon icon={faFrown} size="2x" style={{ color: 'red' }} /></ListGroupItem>)}
                                {telegram ? (<ListGroupItem className="d-flex justify-content-between align-items-center">Telegram :<FontAwesomeIcon icon={faSmile} size="2x" style={{ color: 'green' }} /></ListGroupItem>) : (<ListGroupItem className="d-flex justify-content-between align-items-center">Telegram :<FontAwesomeIcon icon={faFrown} size="2x" style={{ color: 'red' }} /></ListGroupItem>)}
                            </ListGroup>
                            <Card.Footer className="text-right">
                                <small className="text-muted">Joined  {dayjs(createdAt).format('MMM YYYY')}</small>
                            </Card.Footer>
                        </Card>)}

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
export default connect(mapStateToProps, { getOwnUserData, logoutUser })(user);
