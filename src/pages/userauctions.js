import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import ShowUserAuctions from '../components/auctions/showUserAuctions';
import { loadUserAllSearch, loadUserActiveSearch, loadUserAllOffer, loadUserActiveOffer } from '../redux/actions/Auctions'

class userauctions extends Component {
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
                this.props.loadUserAllOffer('facebook');
            }
            else if (this.state.kind === 'search') {
                this.props.loadUserAllSearch('facebook');
            }
        }

        if (this.state.app === "instagram") {
            if (this.state.kind === "offer") {
                this.props.loadUserAllOffer('instagram');
            }
            else if (this.state.kind === 'search') {
                this.props.loadUserAllSearch('instagram');
            }
        }

        if (this.state.app === "tiktok") {
            if (this.state.kind === "offer") {
                this.props.loadUserAllOffer('tiktok');
            }
            else if (this.state.kind === 'search') {
                this.props.loadUserAllSearch('tiktok');
            }
        }

        if (this.state.app === "telegram") {
            if (this.state.kind === "offer") {
                this.props.loadUserAllOffer('telegram');
            }
            else if (this.state.kind === 'search') {
                this.props.loadUserAllSearch('telegram');
            }
        }
    }

    render() {
        const { loadingauctions } = this.props.auctions
        return (
            <Row className="justify-content-center">
                <Col xs={8} md={6} lg={4} xl={4}>
                    <div className='text-center'><h3>Check your auctions</h3></div>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Marketplace:</Form.Label>
                            <Form.Control as="select" onChange={this.handleApp}>
                                <option value="facebook">Facebook</option>
                                <option value="instagram">Instagram</option>
                                <option value="tiktok">TikTok</option>
                                <option value="telegram">Telegram</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Kind of auction:</Form.Label>
                            <Form.Control as="select" onChange={this.handleKind}>
                                <option value="offer">Offer</option>
                                <option value="search">Search</option>
                            </Form.Control>
                        </Form.Group>
                        <div className="d-flex justify-content-center">{loadingauctions === false ? (<Button variant="primary" onClick={this.handleCheckData} style={{ marginBottom: '50px' }}>Check</Button>) : (<Spinner animation="border" />)}</div>
                    </Form>
                </Col>
                <Col xs={8} md={6} lg={4} xl={4}>
                    <ShowUserAuctions auctions={this.props.auctions} app={this.state.app} />
                </Col>
            </Row >
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    UI: state.UI,
    auctions: state.auctions
})

export default connect(mapStateToProps, { loadUserAllSearch, loadUserActiveSearch, loadUserAllOffer, loadUserActiveOffer })(userauctions)
