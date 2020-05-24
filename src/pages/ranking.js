import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { CountryDropdown } from 'react-country-region-selector';
import { connect } from 'react-redux';
import { getUsersRanking } from '../redux/actions/Auctions';
import Ranking from '../components/auctions/usersranking';


class ranking extends Component {
    constructor() {
        super();
        this.state = {
            app: 'facebook',
            country: 'Afganistan',
            topic: 'Fashion'
        }
    }

    handleApp = (event) => {
        this.setState({ app: event.target.value });
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

        this.props.getUsersRanking(this.state.app, data);
    }

    render() {
        const loadingauctions = this.props.loading
        const { country } = this.state;
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
                            <Form.Label>Topic:</Form.Label>
                            <Form.Control as="select" onChange={this.handleTopic}>
                                <option value="Fashion">Fashion</option>
                                <option value="Food">Food</option>
                                <option value="Design">Design</option>
                                <option value="Travel">Travel</option>
                                <option value="Fitness">Fitness</option>
                                <option value="Nature">Nature</option>
                                <option value="Inspirations">Inspiration</option>
                                <option value="Health">Health</option>
                                <option value="Party">Party</option>
                                <option value="Art">Art</option>
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
                        <Ranking users={this.props.ranking} app={this.state.app} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.auctions.userrankingloading,
    ranking: state.auctions.userranking
})
export default connect(mapStateToProps, { getUsersRanking })(ranking)
