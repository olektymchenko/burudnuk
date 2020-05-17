import React, { Fragment } from 'react';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { connect } from 'react-redux';
import { acceptFacebookDeal, rejectFacebookDeal, acceptInstagramDeal, rejectInstagramDeal, acceptTikTokDeal, rejectTikTokDeal, acceptTelegramDeal, rejectTelegramDeal, acceptedFacebookDeals, acceptedInstagramDeals, acceptedTikTokDeals, acceptedTelegramDeals } from '../../redux/actions/dataActions';
import Spinner from 'react-bootstrap/Spinner'



const UserDeal = (props) => {


    let handlerAcceptDeal;
    let handlerRejectDeal;

    if (props.app === "Facebook") {
        handlerAcceptDeal = (dealId) => {
            props.acceptFacebookDeal(dealId);
            props.acceptedFacebookDeals();
        }
        handlerRejectDeal = (dealId) => {
            props.rejectFacebookDeal(dealId);
        }
    }
    if (props.app === "Instagram") {
        handlerAcceptDeal = (dealId) => {
            props.acceptInstagramDeal(dealId);
            props.acceptedInstagramDeals()
        }
        handlerRejectDeal = (dealId) => {
            props.rejectInstagramDeal(dealId);
        }
    }
    if (props.app === "TikTok") {
        handlerAcceptDeal = (dealId) => {
            props.acceptTikTokDeal(dealId);
            props.acceptedTikTokDeals();
        }
        handlerRejectDeal = (dealId) => {
            props.rejectTikTokDeal(dealId);
        }
    }
    if (props.app === "Telegram") {
        handlerAcceptDeal = (dealId) => {
            props.acceptTelegramDeal(dealId);
            props.acceptedTelegramDeals();
        }
        handlerRejectDeal = (dealId) => {
            props.rejectTelegramDeal(dealId);
        }
    }
    dayjs.extend(relativeTime)
    dayjs.extend(localizedFormat)
    const deal = props.deals.deals.map((deal, index) => {
        return (
            <Card key={index} style={{ marginLeft: '1%', marginTop: '3%' }}>
                <Card.Header as="h5" className="d-flex justify-content-between align-items-baseline"><div>{<Nav.Link href={`/users/${deal.dealsender}`} >{deal.dealsendernickname}</Nav.Link>}</div><div>{deal.dealdone === true ?
                    (<div className="d-flex"><p style={{ marginRight: '9%' }}>Accepted</p><FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /> </div>) :
                    (deal.dealactive === false ? (<div className="d-flex"><p style={{ marginRight: '9%' }}>Rejected</p><FontAwesomeIcon icon={faCheckCircle} style={{ color: 'red' }} /> </div>)
                        : (''))}</div></Card.Header>
                <Card.Body>
                    <Card.Title>{deal.price} USD</Card.Title>
                    <Card.Text><div><b>From : </b>{dayjs(deal.dateFrom).format('LL LT')}</div><div><b>To : </b>{dayjs(deal.dateTo).format('LL LT')}</div></Card.Text>
                    <Card.Text>{deal.message}</Card.Text>
                    <div className="d-flex justify-content-between">
                        {deal.dealdone === true || deal.dealactive === false ? ('') : (props.UI.loading === false ? (<Button variant="success" onClick={() => handlerAcceptDeal(deal.offerId)}>Accept</Button>) : (<Spinner animation="border" />))}
                        {deal.dealdone === true || deal.dealactive === false ? ('') : (props.UI.loading === false ? (<Button variant="danger" onClick={() => handlerRejectDeal(deal.offerId)}>Reject</Button>) : (<Spinner animation="border" />))}
                    </div>
                </Card.Body>
                <Card.Footer className="text-muted text-right">{dayjs(deal.createdAt).fromNow()}</Card.Footer>
            </Card>
        )

    })
    return (
        <Fragment>
            {deal}
        </Fragment>
    )

}

const mapStateToProps = state => ({
    UI: state.UI
})
export default connect(mapStateToProps, { acceptFacebookDeal, rejectFacebookDeal, acceptInstagramDeal, rejectInstagramDeal, acceptTikTokDeal, rejectTikTokDeal, acceptTelegramDeal, rejectTelegramDeal, acceptedFacebookDeals, acceptedInstagramDeals, acceptedTikTokDeals, acceptedTelegramDeals })(UserDeal)
