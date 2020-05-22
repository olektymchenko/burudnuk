import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { CountryDropdown, CountryRegionData } from 'react-country-region-selector';
import AllActiveAuctions from '../components/auctions/allActiveAuctions'
import { connect } from 'react-redux';
import { loadUserActiveSearch, loadUserActiveOffer } from '../redux/actions/Auctions';


class AllAuctions extends Component {
    constructor() {
        super();
        this.state = {
            app: 'facebook',
            kind: 'offer',
            country: 'Afganistan',
            topic: 'travel'
        }
    }

    handleApp = (event) => {
        this.setState({ app: event.target.value });
    }
    handleKind = (event) => {
        this.setState({ kind: event.target.value });
    }
    handleTopic = (event) => {
        this.setState({ topic: event.target.value });
    }
    selectCountry(value) {
        this.setState({ country: value });
    }

    handleCheckData = () => {
        const data = {
            topic: this.state.topic,
            country: this.state.country
        }
        if (this.state.app === "facebook") { // if selected facebook
            if (this.state.kind === "offer") {
                this.props.loadUserActiveOffer('facebook', data);
            }
            else if (this.state.kind === 'search') {
                this.props.loadUserActiveSearch('facebook', data);
            }
        }

        if (this.state.app === "instagram") {
            if (this.state.kind === "offer") {
                this.props.loadUserActiveOffer('instagram', data);
            }
            else if (this.state.kind === 'search') {
                this.props.loadUserActiveSearch('instagram', data);
            }
        }

        if (this.state.app === "tiktok") {
            if (this.state.kind === "offer") {
                this.props.loadUserActiveOffer('tiktok', data);
            }
            else if (this.state.kind === 'search') {
                this.props.loadUserActiveSearch('tiktok', data);
            }
        }

        if (this.state.app === "telegram") {
            if (this.state.kind === "offer") {
                this.props.loadUserActiveOffer('telegram', data);
            }
            else if (this.state.kind === 'search') {
                this.props.loadUserActiveSearch('telegram', data);
            }
        }
    }


    render() {
        const { country } = this.state;
        const { loadingauctions } = this.props.auctions

        return (
            <Container>
                <Row className="d-flex align-items-center justify-content-between" style={{ marginTop: "1%" }}>
                    <Col xs={6} md={4} lg={2} xl={2} className="d-flex justify-content-center text-center">
                        <Form.Group controlId="exampleForm.ControlSelect1" style={{ width: "80%" }}>
                            <Form.Label>Marketplace:</Form.Label>
                            <Form.Control as="select" onChange={this.handleApp}>
                                <option value="facebook">Facebook</option>
                                <option value="instagram">Instagram</option>
                                <option value="tiktok">TikTok</option>
                                <option value="telegram">Telegram</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs={6} md={4} lg={2} xl={2} className="d-flex justify-content-center text-center">
                        <Form.Group controlId="exampleForm.ControlSelect2" style={{ width: "80%" }}>
                            <Form.Label>Kind:</Form.Label>
                            <Form.Control as="select" onChange={this.handleKind}>
                                <option value="offer">Offer</option>
                                <option value="search">Search</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs={6} md={4} lg={2} xl={2} className="d-flex justify-content-center text-center">
                        <Form.Group controlId="exampleForm.ControlSelect2" style={{ width: "80%" }}>
                            <Form.Label>Topic:</Form.Label>
                            <Form.Control as="select" onChange={this.handleTopic}>
                                <option value="fashion">Fashion</option>
                                <option value="food">Food</option>
                                <option value="design">Design</option>
                                <option value="travel">Travel</option>
                                <option value="fitness">Fitness</option>
                                <option value="nature">Nature</option>
                                <option value="inspirations">Inspiration</option>
                                <option value="health">Health</option>
                                <option value="party">Party</option>
                                <option value="art">Art</option>
                            </Form.Control>
                        </Form.Group></Col>
                    <Col xs={6} md={4} lg={2} xl={2} className="d-flex justify-content-center text-center">
                        <Form.Group controlId="exampleForm.ControlSelect2" style={{ width: "80%" }}>
                            <Form.Label>Country:</Form.Label>
                            <CountryDropdown
                                value={country}
                                onChange={(value) => this.selectCountry(value)}
                                style={{ width: "100%" }}
                                className="form-control"
                                defaultOptionLabel="Afganistan"
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={4} lg={2} xl={2} className="d-flex justify-content-center text-center"> {loadingauctions === false ? (<Button variant="primary" style={{ height: "50%" }} onClick={this.handleCheckData}>Search</Button>) : (<Spinner animation="border" />)}</Col>
                </Row>
                <Row>
                    <Col>
                        <AllActiveAuctions auctions={this.props.auctions} app={this.state.app} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    UI: state.UI,
    auctions: state.auctions
})

export default connect(mapStateToProps, { loadUserActiveSearch, loadUserActiveOffer })(AllAuctions)
