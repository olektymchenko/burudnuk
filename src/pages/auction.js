import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux';
import { getAuctionSearchData, getAuctionOfferData, updateAuctionData } from '../redux/actions/Auctions';
import UniqueAuction from '../components/auctions/uniqueAuction';
import AuctionParticipants from '../components/auctions/auctionParticipants'
import firebase from '../fireconfig';

class auction extends Component {
    componentDidMount() {
        if (this.props.match.params.type === 'offer') {
            this.props.getAuctionOfferData(this.props.match.params.app, this.props.match.params.auctionId);
        } else if (this.props.match.params.type === 'search') {
            this.props.getAuctionSearchData(this.props.match.params.app, this.props.match.params.auctionId);
        }
    }

    componentWillReceiveProps(nextProps) {
        let collectionname;
        if (this.props.match.params.type === "search") {
            collectionname = this.props.match.params.app + "selleractions"
        } else if (this.props.match.params.type === "offer") {
            collectionname = this.props.match.params.app + "actions"
        }
        if (this.props.auctions.uniqueAuction !== null) {
            if (this.props.auctions.uniqueAuction.amountOfParticipant !== nextProps.auctions.uniqueAuction.amountOfParticipant) {
                firebase.firestore().collection(collectionname).doc(this.props.match.params.auctionId).onSnapshot(querySnapshot => {
                    this.props.updateAuctionData(querySnapshot.data())
                })
            }
        }
    }

    render() {
        const loading = this.props.auctions.loadingauctions;
        const navbar = document.getElementById('navigation-menu-width');
        let navbarWidth;
        let navbarHeight;
        if (navbar !== null) {
            navbarWidth = navbar.offsetWidth;
            navbarHeight = navbar.offsetHeight;
        }
        return (
            <Fragment>
                {loading === false && this.props.auctions.uniqueAuction !== null ? (
                    <Container>
                        <Row>
                            <Col xs={8}>
                                <UniqueAuction data={this.props.auctions.uniqueAuction} app={this.props.match.params.app} type={this.props.match.params.type} auctionId={this.props.match.params.auctionId} />
                            </Col>
                            <Col xs={4} style={{ marginTop: "2%", maxHeight: '80vh', overflow: 'auto' }}>
                                <AuctionParticipants data={this.props.auctions.uniqueAuction} app={this.props.match.params.app} type={this.props.match.params.type} auctionId={this.props.match.params.auctionId} />
                            </Col>
                        </Row>
                    </Container>
                ) : (
                        <div style={{ height: `calc(98vh - 68px)`, width: `calc(${navbarWidth}px -50px)` }} className="d-flex justify-content-center align-items-center"><Spinner animation="grow" /></div>
                    )}
            </Fragment>

        )
    }
}

const mapStateToProps = state => ({
    auctions: state.auctions,
    UI: state.UI,
    user: state.user
})
export default connect(mapStateToProps, { getAuctionSearchData, getAuctionOfferData, updateAuctionData })(auction)
