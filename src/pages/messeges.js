import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import MessageSeller from '../components/messages/messageoffer';
import MessageClient from '../components/messages/messageclient';
import MessageList from '../components/messages/messagesfordeal';
import { connect } from 'react-redux';
import { getSellerListDeals, getClientListDeals } from '../redux/actions/dataActions';
import firebase from '../fireconfig';


function notEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return true;
    }
    return false;
}
class messeges extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            messageId: '0'
        }
    }
    componentDidMount() {
        let userIdForFunc = this.props.userId;
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.getSellerListDeals(userIdForFunc);
                this.props.getClientListDeals(userIdForFunc);
            } else {
                console.log("Your are not logged");
            }
        })
    }

    getMessagesWithId = (e) => {
        this.setState({ messageId: e.target.value })
    }
    render() {
        const { loadingsellerdeals } = this.props;
        const { loadingclientdeals } = this.props;

        let sellerdeals = this.props.listofsellerdeals;
        let sellervalue = false;
        if (sellerdeals != null && notEmpty(sellerdeals))
            sellervalue = true;

        let clientdeals = this.props.listofclientdeals;
        let clientvalue = false;
        if (clientdeals != null && notEmpty(clientdeals))
            clientvalue = true;

        const navbar = document.getElementById('navigation-menu-width');
        let navbarWidth;
        if (navbar !== null) {
            navbarWidth = navbar.offsetHeight;
        }
        return (
            <Container>
                <Row style={{ backgroundColor: 'white', marginTop: "4vh", marginBottom: "4vh" }}>
                    <Col xs={12} md={12} lg={4} xl={4} style={{ height: `calc(92vh - ${navbarWidth}px)`, overflow: 'auto' }}>
                        <Tabs defaultActiveKey="seller" id="uncontrolled-tab-example">
                            <Tab eventKey="seller" title="For me">
                                {loadingsellerdeals === false ? (sellervalue === true ? (<MessageSeller data={this.props.listofsellerdeals} click={this.getMessagesWithId} />) : ("No messages")) : (<Spinner animation="border" />)}
                            </Tab>
                            <Tab eventKey="client" title="From me">
                                {loadingclientdeals === false ? (clientvalue === true ? (<MessageClient data={this.props.listofclientdeals} click={this.getMessagesWithId} />) : ("No messages")) : (<Spinner animation="border" />)}
                            </Tab>
                        </Tabs>

                    </Col>
                    <Col xs={12} md={12} lg={8} xl={8}>
                        {this.state.messageId !== '0' ? (<MessageList id={this.state.messageId} nickname={this.props.nickname} />) : (<Card style={{ marginTop: '3%', marginBottom: '3%', height: `calc(80vh - ${navbarWidth}px)` }} className="d-flex align-items-center justify-content-center">
                            <Card.Text>Hello, please choose a deal to start!</Card.Text>
                        </Card>)}
                    </Col>
                </Row>
            </Container >
        )
    }
}

const setStateToProps = state => ({
    loadingsellerdeals: state.data.loadinglistofsellerdeals,
    loadingclientdeals: state.data.loadinglistofclientdeals,
    loadingmessages: state.data.loadinglistofmessages,
    listofsellerdeals: state.data.listofsellerdeals,
    listofclientdeals: state.data.listofclientdeals,
    userId: state.user.userdata.userId,
    nickname: state.user.userdata.nickname
})

export default connect(setStateToProps, { getSellerListDeals, getClientListDeals })(messeges)
