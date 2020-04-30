import React, { Component } from 'react'
import './styles/register.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../images/logo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

//Redux stuff

import { connect } from 'react-redux';
import { registerUser } from '../redux/actions/userActions';
class register extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            nickname: '',
            password: '',
            confirmPassword: '',
            errors: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({ errors: nextProps.UI.errors });
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const newUser = {
            email: this.state.email,
            nickname: this.state.nickname,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }
        this.props.registerUser(newUser, this.props.history);
    }
    render() {
        const { loading } = this.props.user;
        const { errors } = this.state;

        return (
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center" xs={8} md={6} lg={4} xl={4}>
                        <img src={Logo} alt="App logo" />
                        <h1>Registration</h1>
                        <form noValidate onSubmit={this.handleSubmit}>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
                                    {errors.email && <Form.Text className="text-muted">
                                        {errors.email}
                                    </Form.Text>}
                                </Form.Group>
                                <Form.Group controlId="formBasicNickname">
                                    <Form.Label>Nickname</Form.Label>
                                    <Form.Control type="text" placeholder="Enter nickname" name="nickname" value={this.state.nickname} onChange={this.handleChange} />
                                    {errors.nickname && <Form.Text className="text-muted">
                                        {errors.nickname}
                                    </Form.Text>}
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                                    {errors.password && <Form.Text className="text-muted">
                                        {errors.password}
                                    </Form.Text>}
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Confirm password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
                                    {errors.password && <Form.Text className="text-muted">
                                        {errors.password}
                                    </Form.Text>}
                                    {errors.confirmPassword && <Form.Text className="text-muted">
                                        {errors.confirmPassword}
                                    </Form.Text>}
                                </Form.Group>
                                {errors.general && <p>{errors.general}</p>}
                                {!loading && <Button variant="primary" type="submit" style={{ marginBottom: '50px' }}>
                                    Submit</Button>}
                                {loading && <Spinner animation="border" variant="primary" />}

                            </Form>
                        </form>
                    </Col>
                </Row>

            </Container>
        )
    }
}

register.propTypes = {
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    registerUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    user: state.user,
    UI: state.UI
})

export default connect(mapStateToProps, { registerUser })(register);
