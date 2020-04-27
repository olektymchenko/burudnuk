import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import { getFacebookData, becomeFacebokSeller } from '../redux/actions/userActions';
import FacebookProfile from '../components/profile/sellerProfile';

let userId;
let sellerArray = [];
class facebook extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        userId = this.props.userdata.userId;
        if (this.props.userdata.facebook === true)
            this.props.getFacebookData(userId);

    }

    handleClick = () => {
        this.props.becomeFacebokSeller(userId);
    }

    render() {
        const loadingdata = this.props.userloading.loading;
        const sellerdata = this.props.sellerdata.mainInfo;
        const facebookvalue = this.props.userdata.facebook;
        sellerArray.push(sellerdata);


        return (
            <Container>
                <Row>
                    <Col>
                        {facebookvalue === false ? (<Card>
                            <Card.Header>Facebook</Card.Header>
                            <Card.Body>
                                <Card.Title>Do you want to start selling your facebook advertisment?</Card.Title>
                                <Card.Text>
                                    Click the button below and start increase your popularity!
                                     </Card.Text>
                                {loadingdata === true ? <Spinner animation="border" /> : <Button variant="primary" onClick={this.handleClick}>Start</Button>}
                            </Card.Body>
                        </Card>) : (loadingdata === false ? (sellerArray.length > 1 ? <FacebookProfile data={this.props} seller="Facebook" /> : <Spinner animation="border" />) : <Spinner animation="border" />)}
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}


const mapStateToProps = state => ({
    userloading: state.user,
    userdata: state.user.userdata,
    sellerdata: state.user.sellerdata,
    UI: state.UI
})
export default connect(mapStateToProps, { getFacebookData, becomeFacebokSeller })(facebook)
