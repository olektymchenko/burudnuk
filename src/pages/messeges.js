import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Spinner from 'react-bootstrap/Spinner'
import MessageSeller from '../components/messages/messageoffer';
import MessageClient from '../components/messages/messageclient';
import MessageList from '../components/messages/messagesfordeal';
import { connect } from 'react-redux';
import { getSellerListDeals, getClientListDeals } from '../redux/actions/dataActions';


function notEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return true;
    }
    return false;
}
class messeges extends Component {
    componentDidMount() {
        this.props.getSellerListDeals();
        this.props.getClientListDeals();
    }
    render() {
        const { loadingsellerdeals } = this.props;
        const { loadingclientdeals } = this.props;
        const { loadingmessages } = this.props;
        console.log(loadingsellerdeals);
        console.log(loadingclientdeals);

        let sellerdeals = this.props.listofsellerdeals;
        let sellervalue = false;
        if (sellerdeals != null && notEmpty(sellerdeals))
            sellervalue = true;

        let clientdeals = this.props.listofclientdeals;
        let clientvalue = false;
        if (clientdeals != null && notEmpty(clientdeals))
            clientvalue = true;

        return (
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={4} xl={4}>
                        <Tabs defaultActiveKey="seller" id="uncontrolled-tab-example">
                            <Tab eventKey="seller" title="For me">
                                {loadingsellerdeals === false ? (sellervalue === true ? (<MessageSeller />) : ("No messages")) : (<Spinner animation="border" />)}
                            </Tab>
                            <Tab eventKey="client" title="From me">
                                {loadingclientdeals === false ? (clientvalue === true ? (<MessageClient />) : ("No messages")) : (<Spinner animation="border" />)}
                            </Tab>
                        </Tabs>

                    </Col>
                    <Col xs={12} md={12} lg={8} xl={8}>
                        <MessageList />
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
    listofclientdeals: state.data.listofclientdeals
})

export default connect(setStateToProps, { getSellerListDeals, getClientListDeals })(messeges)
