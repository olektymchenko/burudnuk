import React, { Component } from 'react';
import './Navbar.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStickyNote, faEnvelope, faPlayCircle, faUser, faSignOutAlt, faShoppingCart, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

//Redux stuff
import { connect } from 'react-redux';
import { logoutUser, markNotificationRead } from '../../redux/actions/userActions';

toast.configure();
class Navigationbar extends Component {
    constructor() {
        super();
        this.state = {
            sended: false
        }
    }

    handleLogout = () => {
        this.props.logoutUser();
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.usernotifications) {
            let notifyarray = [];
            var markarray = [];
            nextProps.usernotifications.forEach(element => {
                let CustomToast = () => {
                    dayjs.extend(relativeTime)
                    return (
                        <div>
                            <div className="d-flex justify-content-between align-items-center"><div><h5>Offer from {element.dealsendernickname}</h5></div><div style={{ marginRight: '5%' }}><h5>{element.price} USD</h5></div></div>
                            <p>In {element.app}</p>
                            <div className="d-flex justify-content-end"><small>{dayjs(element.createdAt).fromNow()}</small></div>
                        </div>
                    )
                }
                markarray.push(element.offerId)
                notifyarray.push(toast.info(CustomToast, { autoClose: false }))
            });
            this.notify = () => {
                this.apply(null, notifyarray);
            }
            if (markarray.length > 0 && this.state.sended === false) {
                this.props.markNotificationRead(markarray);
                this.setState({ sended: true })
            }

        }
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
                                {!authenticated ? ("") : (<Nav.Item>
                                    <Nav.Link className="d-flex align-items-center" href="/allauctions"><FontAwesomeIcon icon={faBalanceScale} size='2x' />Auctions</Nav.Link>
                                </Nav.Item>)}
                                {!authenticated ? (<Nav.Item >
                                    <Nav.Link className="d-flex align-items-center" href="/register"><FontAwesomeIcon icon={faStickyNote} size='2x' />Register</Nav.Link>
                                </Nav.Item>) : (
                                        <NavDropdown title={<div className="d-flex align-items-center">< FontAwesomeIcon icon={faUser} size='2x' />Profile</div>} id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/user">My Profile</NavDropdown.Item>
                                            <NavDropdown.Item href="/createoffer">Create auction</NavDropdown.Item>
                                            <NavDropdown.Item href="/createsearch">Create search auction</NavDropdown.Item>
                                            <NavDropdown.Item href="/myauctions">My Auctions</NavDropdown.Item>
                                        </NavDropdown>)}
                                {!authenticated ? (null) : (<NavDropdown title={<div className="d-flex align-items-center">< FontAwesomeIcon icon={faShoppingCart} size='2x' />Market</div>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/instagram">Instagram</NavDropdown.Item>
                                    <NavDropdown.Item href="/facebook">Facebook</NavDropdown.Item>
                                    <NavDropdown.Item href="/tiktok">TikTok</NavDropdown.Item>
                                    <NavDropdown.Item href="/telegram">Telegram</NavDropdown.Item>
                                </NavDropdown>)}
                                {!authenticated ? (<Nav.Item>
                                    <Nav.Link className="d-flex align-items-center" href="/login"><FontAwesomeIcon icon={faPlayCircle} size='2x' />Login</Nav.Link>
                                </Nav.Item>) : (<Nav.Item>
                                    <Nav.Link className="d-flex align-items-center" href="/messages"><FontAwesomeIcon icon={faEnvelope} size='2x' />Messages</Nav.Link>
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
    userrdata: state.user.userdata,
    usernotifications: state.data.notifications
})
export default connect(mapStateToProps, { logoutUser, markNotificationRead })(Navigationbar)
