import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux';
import { getAuctionSearchData, getAuctionOfferData } from '../redux/actions/Auctions';
import UniqueAuction from '../components/auctions/uniqueAuction';

class auction extends Component {

    componentDidMount() {
        if (this.props.match.params.type === 'offer') {
            this.props.getAuctionOfferData(this.props.match.params.app, this.props.match.params.auctionId);
        } else if (this.props.match.params.type === 'search') {
            this.props.getAuctionSearchData(this.props.match.params.app, this.props.match.params.auctionId);
        }
    }


    render() {
        const loading = this.props.auctions.loadingauctions;
        return (
            <Container>
                <Row>
                    <Col xs={8}>
                        {loading === false && this.props.auctions.uniqueAuction !== null ? <UniqueAuction data={this.props.auctions.uniqueAuction} app={this.props.match.params.app} type={this.props.match.params.type} auctionId={this.props.match.params.auctionId} /> : <Spinner animation="border" />}
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    auctions: state.auctions,
    UI: state.UI
})
export default connect(mapStateToProps, { getAuctionSearchData, getAuctionOfferData })(auction)
