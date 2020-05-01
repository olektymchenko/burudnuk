import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Spinner from 'react-bootstrap/Spinner';
import { connect } from 'react-redux';
import { getAnotherUserData, getAnotherFacebookData, getAnotherInstagramData, getAnotherTikTokData, getAnotherTelegramData } from '../redux/actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faFrown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';
import AnotherSeller from '../components/profile/AnotherSeller';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function notEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return true;
    }
    return false;
}

class anotherUser extends Component {

    componentDidMount() {
        this.props.getAnotherUserData(this.props.match.params.userId);
        this.props.getAnotherFacebookData(this.props.match.params.userId);
        this.props.getAnotherInstagramData(this.props.match.params.userId);
        this.props.getAnotherTikTokData(this.props.match.params.userId);
        this.props.getAnotherTelegramData(this.props.match.params.userId);

    }
    render() {
        const loggedUser = this.props.user.userdata.userId;
        const userId = this.props.match.params.userId;
        if (userId === loggedUser)
            window.location.href = '/user';

        const loading = this.props.user.loading;
        const anotherUser = this.props.user.anotheruser;
        let mainuserdata = false;
        if (anotherUser !== null && notEmpty(anotherUser))
            mainuserdata = true;


        const loadingfacebook = this.props.user.loadingfacebook; /* Checking if facebook data dowlnoaded */
        const anotherFacebookcheck = this.props.user.anotherfacebook;
        let facebookdata = false;
        if (anotherFacebookcheck.mainInfo !== null && notEmpty(anotherFacebookcheck))
            facebookdata = true;



        const loadinginstagram = this.props.user.loadinginstagram;
        const anotherInstagramcheck = this.props.user.anotherinstagram; /* Checking if instagram data downloaded */
        let instagramdata = false;
        if (anotherInstagramcheck.mainInfo !== null && notEmpty(anotherInstagramcheck))
            instagramdata = true;




        const loadingtiktok = this.props.user.loadingtiktok;
        const anotherTikTokcheck = this.props.user.anothertiktok; /* Checking if tiktok data downloaded */
        let tiktokdata = false;
        if (anotherTikTokcheck.mainInfo !== null && notEmpty(anotherTikTokcheck))
            tiktokdata = true;


        const loadingtelegram = this.props.user.loadingtelegram;
        const anotherTelegramcheck = this.props.user.anothertelegram;
        let telegramdata = false;
        if (anotherTelegramcheck.mainInfo !== null && notEmpty(anotherTelegramcheck))
            telegramdata = true;


        const { nickname, facebook, instagram, tiktok, telegram, createdAt, userImage, confirmed } = this.props.user.anotheruser;
        return (
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col xs={10} md={10} lg={4} xl={4} >
                        {loading === false ? (mainuserdata === true ? (
                            <Card style={{ marginTop: '21%', width: '100%', marginBottom: '50px', padding: '1%' }} bg="light" border="primary">
                                <img src={userImage} alt="Seller" style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto', marginTop: '5%' }} />
                                <Card.Body>
                                    {confirmed ? <Card.Title className="d-flex justify-content-between align-items-center">{nickname} user profile<FontAwesomeIcon icon={faCheckCircle} style={{ color: 'blue' }} /></Card.Title> : <Card.Title className="d-flex justify-content-center align-items-center">{nickname} user profile</Card.Title>}
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    {instagram ? (<ListGroupItem className="d-flex justify-content-between align-items-center">Instagram : <FontAwesomeIcon icon={faSmile} size="2x" style={{ color: 'green' }} /></ListGroupItem>) : (<ListGroupItem className="d-flex justify-content-between align-items-center">Instagram : <FontAwesomeIcon icon={faFrown} size="2x" style={{ color: 'red' }} /></ListGroupItem>)}
                                    {facebook ? (<ListGroupItem className="d-flex justify-content-between align-items-center">Facebook : <FontAwesomeIcon icon={faSmile} size="2x" style={{ color: 'green' }} /></ListGroupItem>) : (<ListGroupItem className="d-flex justify-content-between align-items-center">Facebook :<FontAwesomeIcon icon={faFrown} size="2x" style={{ color: 'red' }} /></ListGroupItem>)}
                                    {tiktok ? (<ListGroupItem className="d-flex justify-content-between align-items-center">TikTok : <FontAwesomeIcon icon={faSmile} size="2x" style={{ color: 'green' }} /></ListGroupItem>) : (<ListGroupItem className="d-flex justify-content-between align-items-center">TikTok :<FontAwesomeIcon icon={faFrown} size="2x" style={{ color: 'red' }} /></ListGroupItem>)}
                                    {telegram ? (<ListGroupItem className="d-flex justify-content-between align-items-center">Telegram :<FontAwesomeIcon icon={faSmile} size="2x" style={{ color: 'green' }} /></ListGroupItem>) : (<ListGroupItem className="d-flex justify-content-between align-items-center">Telegram :<FontAwesomeIcon icon={faFrown} size="2x" style={{ color: 'red' }} /></ListGroupItem>)}
                                </ListGroup>
                                <Card.Footer className="d-flex text-right">
                                    <small className="text-muted">Joined  {dayjs(createdAt).format('MMM YYYY')}</small>
                                </Card.Footer>
                            </Card>
                        ) : (<Spinner animation="border" />)) : <Spinner animation="border" />}
                    </Col>
                    <Col xs={12} md={12} lg={6} xl={6}>
                        <Tabs defaultActiveKey="facebook" id="uncontrolled-tab-example" style={{ marginTop: '1%' }}>
                            <Tab eventKey="facebook" title="Facebook">
                                {loadingfacebook === false ? (facebookdata === true ? < AnotherSeller data={this.props.user.anotherfacebook} seller="Facebook" /> : <div style={{ marginTop: '30px' }}><div><p className="text-center">User dont have an Facebook seller account</p></div><div><FontAwesomeIcon icon={faFrown} size="3x" style={{ color: 'blue', marginBottom: '50px' }} /></div></div>) : <Spinner animation="border" />}
                            </Tab>
                            <Tab eventKey="instagram" title="Instagram">
                                {loadinginstagram === false ? (instagramdata === true ? < AnotherSeller data={this.props.user.anotherinstagram} seller="Instagram" /> : <div style={{ marginTop: '30px' }}><div><p className="text-center">User dont have an Instagram seller account</p></div><div className="text-center"><FontAwesomeIcon icon={faFrown} size="3x" style={{ color: 'blue', marginBottom: '50px' }} /></div></div>) : <Spinner animation="border" />}
                            </Tab>
                            <Tab eventKey="tiktok" title="TikTok">
                                {loadingtiktok === false ? (tiktokdata === true ? < AnotherSeller data={this.props.user.anothertiktok} seller="TikTok" /> : <div style={{ marginTop: '30px' }}><div><p className="text-center">User dont have an Tik Tok seller account</p></div><div className="text-center"><FontAwesomeIcon icon={faFrown} size="3x" style={{ color: 'blue', marginBottom: '50px' }} /></div></div>) : <Spinner animation="border" />}
                            </Tab>
                            <Tab eventKey="telegram" title="Telegram">
                                {loadingtelegram === false ? (telegramdata === true ? < AnotherSeller data={this.props.user.anothertelegram} seller="Telegram" /> : <div style={{ marginTop: '30px' }}><div><p className="text-center">User dont have an Telegram seller account</p></div><div className="text-center"><FontAwesomeIcon icon={faFrown} size="3x" style={{ color: 'blue', marginBottom: '50px' }} /></div></div>) : <Spinner animation="border" />}
                            </Tab>

                        </Tabs>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    UI: state.UI
})

export default connect(mapStateToProps, { getAnotherUserData, getAnotherFacebookData, getAnotherInstagramData, getAnotherTikTokData, getAnotherTelegramData })(anotherUser)
