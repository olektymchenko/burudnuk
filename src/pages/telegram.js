import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { connect } from 'react-redux';
import { getTelegramData, becomeTelegramSeller } from '../redux/actions/userActions';
import { loadingTelegramDeals, acceptedTelegramDeals } from '../redux/actions/dataActions';
import TelegramProfile from '../components/profile/sellerProfile';
import Deals from '../components/deals/userDeals'
import Calendar from '../components/deals/calendar'

let userId;
function notEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return true;
    }
    return false;
}

class telegram extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        userId = this.props.userdata.userId;
        if (this.props.userdata.telegram === true)
            this.props.getTelegramData(userId);
        this.props.loadingTelegramDeals(userId);
        this.props.acceptedTelegramDeals();
    }

    handleClick = () => {
        this.props.becomeTelegramSeller(userId);
    }

    render() {
        const loadingdata = this.props.userloading.loading;
        const sellerdata = this.props.sellerdata.mainInfo;
        const telegramactive = this.props.userdata.telegram;
        let telegramvalue = false;
        if (sellerdata !== null && notEmpty(sellerdata)) // Checking if data for user has been loaded
            telegramvalue = true;

        let deals = this.props.data.deals;
        let dealsvalue = false;

        if (deals !== null && notEmpty(deals)) // Checking if data for deals has been loaded
            dealsvalue = true;

        let calendardeals = this.props.data.acceptedDeals; // Checking if data for Calendar has benn loaded
        let calendarValue = false;

        if (calendardeals !== null && notEmpty(calendardeals))
            calendarValue = true;



        return (
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col xs={12} md={10} lg={4} xl={4}>
                        {telegramactive === false ? (<Card>
                            <Card.Header>Telegram</Card.Header>
                            <Card.Body>
                                <Card.Title>Do you want to start selling your Telegram advertisment?</Card.Title>
                                <Card.Text>
                                    Click the button below and start increase your popularity!
                                     </Card.Text>
                                {loadingdata === true ? <Spinner animation="border" /> : <Button variant="primary" onClick={this.handleClick}>Start</Button>}
                            </Card.Body>
                        </Card>) : (loadingdata === false ? (telegramvalue === true ? <TelegramProfile data={this.props} seller="Telegram" /> : <Spinner animation="border" />) : <Spinner animation="border" />)}
                    </Col>
                    <Col xs={12} md={10} lg={8} xl={8}>
                        <Tabs defaultActiveKey="calendar" id="uncontrolled-tab-example">
                            <Tab eventKey="calendar" title="Calendar">
                                {telegramvalue === false ? <p>You need to start your selling accoung</p> : (calendarValue === true ? <Calendar deals={this.props.data.acceptedDeals} /> : <h4>You calendar is empty</h4>)}
                            </Tab>
                            <Tab eventKey="deals" title="Offers">
                                {telegramvalue === false ? <p>You need to start your selling accoung</p> : (dealsvalue === true ? <Deals deals={this.props.data} app="Telegram" /> : <Spinner animation="border" />)}
                            </Tab>
                        </Tabs>

                    </Col>
                </Row>
            </Container>
        )
    }
}


const mapStateToProps = state => ({
    userloading: state.user,
    userdata: state.user.userdata,
    sellerdata: state.user.sellerdata,
    UI: state.UI,
    data: state.data
})
export default connect(mapStateToProps, { getTelegramData, becomeTelegramSeller, loadingTelegramDeals, acceptedTelegramDeals })(telegram)
