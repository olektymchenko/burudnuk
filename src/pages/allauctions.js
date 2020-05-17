import React, { Component, Fragment } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import AllActiveAuctions from '../components/auctions/allActiveAuctions'
import { connect } from 'react-redux';
import { loadUserActiveSearch, loadUserActiveOffer } from '../redux/actions/Auctions';


class AllAuctions extends Component {
    constructor() {
        super();
        this.state = {
            app: 'facebook',
            kind: 'offer',
        }
    }

    handleApp = (event) => {
        this.setState({ app: event.target.value })
    }
    handleKind = (event) => {
        this.setState({ kind: event.target.value })
    }

    handleCheckData = () => {
        if (this.state.app === "facebook") { // if selected facebook
            if (this.state.kind === "offer") {
                this.props.loadUserActiveOffer('facebook');
            }
            else if (this.state.kind === 'search') {
                this.props.loadUserActiveSearch('facebook');
            }
        }

        if (this.state.app === "instagram") {
            if (this.state.kind === "offer") {
                this.props.loadUserActiveOffer('instagram');
            }
            else if (this.state.kind === 'search') {
                this.props.loadUserActiveSearch('instagram');
            }
        }

        if (this.state.app === "tiktok") {
            if (this.state.kind === "offer") {
                this.props.loadUserActiveOffer('tiktok');
            }
            else if (this.state.kind === 'search') {
                this.props.loadUserActiveSearch('tiktok');
            }
        }

        if (this.state.app === "telegram") {
            if (this.state.kind === "offer") {
                this.props.loadUserActiveOffer('telegram');
            }
            else if (this.state.kind === 'search') {
                this.props.loadUserActiveSearch('telegram');
            }
        }
    }


    render() {
        const { loadingauctions } = this.props.auctions
        return (
            <Fragment>
                <Row>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Form.Group controlId="exampleForm.ControlSelect1" style={{ marginLeft: "5%", marginRight: "5%", width: "15%" }}>
                            <Form.Label>Choose marketplace:</Form.Label>
                            <Form.Control as="select" onChange={this.handleApp}>
                                <option value="facebook">Facebook</option>
                                <option value="instagram">Instagram</option>
                                <option value="tiktok">TikTok</option>
                                <option value="telegram">Telegram</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2" style={{ marginRight: "5%", width: "15%" }}>
                            <Form.Label>Choose kind of auctions:</Form.Label>
                            <Form.Control as="select" onChange={this.handleKind}>
                                <option value="offer">Offer</option>
                                <option value="search">Search</option>
                            </Form.Control>
                        </Form.Group>
                        {loadingauctions === false ? (<Button variant="primary" style={{ height: "50%" }} onClick={this.handleCheckData}>Search</Button>) : (<Spinner animation="border" />)}
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-around">
                        <AllActiveAuctions auctions={this.props.auctions} app={this.state.app} />
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    UI: state.UI,
    auctions: state.auctions
})

export default connect(mapStateToProps, { loadUserActiveSearch, loadUserActiveOffer })(AllAuctions)
