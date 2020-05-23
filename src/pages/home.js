import React, { Component, Fragment } from 'react';
import './styles/home.scss';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imageEarnMoney from '../images/image-earn-money.jpg';
import imageLookAds from '../images/image-look-ads.jpg'
import imageWriteMessage from '../images/image-write-message.jpg'
import imageOrganizeTime from '../images/image-organize-time.jpg'
import { connect } from 'react-redux';
import { getDataForMainPage } from '../redux/actions/Auctions'
import Spinner from 'react-bootstrap/Spinner';
import HomePageAuctions from '../components/auctions/homepageauctions'


class home extends Component {
    componentDidMount() {
        this.props.getDataForMainPage()
    }
    render() {
        const navbar = document.getElementById('navigation-menu-width');
        let navbarWidth;
        if (navbar !== null) {
            navbarWidth = navbar.offsetWidth;
        }
        return (
            <Fragment>
                {this.props.loadingauctions === false ? (
                    <Container>
                        <Row style={{ marginTop: "50px", backgroundColor: 'white' }} className="d-flex justify-content-around">
                            <Col>
                                <div className="header-images"><img src={imageEarnMoney} alt="Earn money"></img>
                                    <h5>Earn money and help others</h5></div>
                            </Col>
                            <Col>
                                <div className="header-images"><img src={imageWriteMessage} alt="Write messages"></img>
                                    <h5>Communicate with your clients</h5></div>
                            </Col>
                            <Col>
                                <div className="header-images"><img src={imageLookAds} alt="Look for ads"></img>
                                    <h5>Increase your popularity</h5></div>
                            </Col>
                            <Col>
                                <div className="header-images"><img src={imageOrganizeTime} alt="Organize time"></img>
                                    <h5>Organize your time</h5></div>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "50px", marginBottom: "50px" }}>
                            <Col>
                                <div id="second-section-text"><h2>Last created auctions</h2></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6} lg={3} xl={3} >
                                <h4 className="text-center">Facebook</h4>
                                <HomePageAuctions data={this.props.auctions.facebookactiveauctions} app="facebook" />
                            </Col>
                            <Col xs={12} md={6} lg={3} xl={3}>
                                <h4 className="text-center">Instagram</h4>
                                <HomePageAuctions data={this.props.auctions.instagramactiveauctions} app="instagram" />
                            </Col>
                            <Col xs={12} md={6} lg={3} xl={3}>
                                <h4 className="text-center">TikTok</h4>
                                <HomePageAuctions data={this.props.auctions.tiktokactiveauctions} app="tiktok" />
                            </Col>
                            <Col xs={12} md={6} lg={3} xl={3}>
                                <h4 className="text-center">Telegram</h4>
                                <HomePageAuctions data={this.props.auctions.telegramactiveauctions} app="telegram" />
                            </Col>
                        </Row>
                    </Container>) : (<div style={{ height: `calc(98vh - 68px)`, width: `calc(${navbarWidth}px -50px)` }} className="d-flex justify-content-center align-items-center"><Spinner animation="grow" /></div>)
                }
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    loadingauctions: state.auctions.loadingauctions,
    auctions: state.auctions
})

export default connect(mapStateToProps, { getDataForMainPage })(home)
