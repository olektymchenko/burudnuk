import React, { Component } from 'react'
import './styles/login.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../images/logo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

//Redux staff
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

class login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
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
            password: this.state.password
        }
        this.props.loginUser(newUser, this.props.history);
    }
    render() {
        const { loading } = this.props.user;
        const { errors } = this.state;
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center" xs={8} md={6} lg={4} xl={4} >
                        <img src={Logo} alt="App logo" />
                        <h1>Login</h1>
                        <Form noValidate onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
                                {errors.email && <Form.Text className="text-muted">
                                    {errors.email}
                                </Form.Text>}
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                                {errors.password && <Form.Text className="text-muted">
                                    {errors.password}
                                </Form.Text>}
                            </Form.Group>
                            {errors.general && <p>{errors.general}</p>}
                            {!loading && <Button variant="primary" type="submit" style={{ marginBottom: '50px' }}>
                                Submit</Button>}
                            {loading && <Spinner animation="border" variant="primary" />}
                        </Form>
                    </Col>
                </Row>

            </Container>
        )
    }
}

login.propTypes = {
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    user: state.user,
    UI: state.UI
})

export default connect(mapStateToProps, { loginUser })(login);
