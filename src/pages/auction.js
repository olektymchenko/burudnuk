import React, { Component } from 'react';
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
        if (this.props.auctions.uniqueAuction !== null && nextProps.auctions.uniqueAuction !== null && this.props.auctions.uniqueAuction.lastPrice !== nextProps.auctions.uniqueAuction.lastPrice)
            firebase.firestore().collection(collectionname).doc(this.props.match.params.auctionId).onSnapshot(querySnapshot => {
                this.props.updateAuctionData(querySnapshot.data())
            })

    }

    render() {
        const loading = this.props.auctions.loadingauctions;
        return (
            <Container>
                <Row>
                    <Col xs={8}>
                        {loading === false && this.props.auctions.uniqueAuction !== null ? <UniqueAuction data={this.props.auctions.uniqueAuction} app={this.props.match.params.app} type={this.props.match.params.type} auctionId={this.props.match.params.auctionId} /> : <Spinner animation="border" />}
                    </Col>
                    <Col xs={4} style={{ marginTop: "2%", maxHeight: '80vh', overflow: 'auto' }}>
                        {loading === false && this.props.auctions.uniqueAuction !== null ? <AuctionParticipants data={this.props.auctions.uniqueAuction} app={this.props.match.params.app} type={this.props.match.params.type} auctionId={this.props.match.params.auctionId} /> : <Spinner animation="border" />}
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    auctions: state.auctions,
    UI: state.UI,
    user: state.user
})
export default connect(mapStateToProps, { getAuctionSearchData, getAuctionOfferData, updateAuctionData })(auction)
