import React, { Component } from 'react';
import './Navbar.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStickyNote, faPlayCircle, faUser, faSignOutAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

//Redux stuff
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/userActions';


class Navigationbar extends Component {

    handleLogout = () => {
        this.props.logoutUser();
    }
    render() {
        const { authenticated } = this.props;
        return (
            <Row>
                <Col>
                    <Navbar bg="primary" collapseOnSelect expand="lg">
                        <Navbar.Brand href="/">
                            <img
                                alt="Burunduk market app"
                                src={Logo}
                                width="40"
                                height="40"
                                className="d-inline-block align-center"
                            />{' '}
                                Burunduk
                             </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                {!authenticated ? (<Nav.Item >
                                    <Nav.Link className="d-flex align-items-center" href="/register"><FontAwesomeIcon icon={faStickyNote} size='2x' />Register</Nav.Link>
                                </Nav.Item>) : (
                                        <Nav.Item >
                                            <Nav.Link className="d-flex align-items-center" href="/user"><FontAwesomeIcon icon={faUser} size='2x' />My Account</Nav.Link>
                                        </Nav.Item>
                                    )}
                                {!authenticated ? (null) : (<NavDropdown title={< FontAwesomeIcon icon={faShoppingCart} size='2x' />} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/instagram">Instagram</NavDropdown.Item>
                                    <NavDropdown.Item href="/facebook">Facebook</NavDropdown.Item>
                                    <NavDropdown.Item href="/tiktok">TikTok</NavDropdown.Item>
                                    <NavDropdown.Item href="/telegram">Telegram</NavDropdown.Item>
                                </NavDropdown>)}
                                {!authenticated ? (<Nav.Item>
                                    <Nav.Link className="d-flex align-items-center" href="/login"><FontAwesomeIcon icon={faPlayCircle} size='2x' />Login</Nav.Link>
                                </Nav.Item>) : (<Nav.Item>
                                    <Nav.Link className="d-flex align-items-center" href="/Dontknow"><FontAwesomeIcon icon={faPlayCircle} size='2x' />NewFeature</Nav.Link>
                                </Nav.Item>)}
                                {!authenticated ? (<Nav.Item>
                                    <Nav.Link className="d-flex align-items-center" href="/home"> <FontAwesomeIcon icon={faHome} size="2x" />Home</Nav.Link>
                                </Nav.Item>) : (<Nav.Item onClick={this.handleLogout}>
                                    <Nav.Link className="d-flex align-items-center" href="/"> <FontAwesomeIcon icon={faSignOutAlt} size="2x" />Logout</Nav.Link>
                                </Nav.Item>)}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row >
        )
    }
}

const mapStateToProps = state => ({
    authenticated: state.user.authenticated,
    userrdata: state.user.userdata
})
export default connect(mapStateToProps, { logoutUser })(Navigationbar)
