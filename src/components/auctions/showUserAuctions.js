import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

const ShowUserAuctions = (props) => {
    let auctions;
    let timeNow = dayjs()
    dayjs.extend(relativeTime)
    dayjs.extend(localizedFormat)
    if (props.auctions.userSearchAll !== null && props.auctions.userSearchAll.length > 0) {
        auctions = props.auctions.userSearchAll.map((element, index) => {
            return <Card>
                <Card.Title className="d-flex justify-content-between"><div>{element.title}</div><div>{element.amountOfParticipant} <span>participants</span></div></Card.Title>
                <Card.Text>{element.description}</Card.Text>
                <Card.Text><div className="d-flex justify-content-between"><div>Initial price: <h5>{element.firstPrice} <span>USD</span></h5></div><div>Actual price: <h5>{element.lastPrice} <span>USD</span></h5></div></div></Card.Text>
                <Card.Footer className="text-muted text-left d-flex justify-content-between align-items-center"><div><span>Finish </span>{timeNow.to(element.dateEnd)} <span>({dayjs(element.dateEnd).format('LL LT')})</span></div>
                    <div><Nav.Link href={`/auctions/${props.app}/${element.id}`}>Show more</Nav.Link></div></Card.Footer>
            </Card>
        })
    } else if (props.auctions.userOfferAll !== null && props.auctions.userOfferAll.length > 0) {
        auctions = props.auctions.userOfferAll.map((element, index) => {
            return <Card style={{ marginTop: "1%", marginBottom: "1%" }}>
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between"><div>{element.title}</div><div>{element.amountOfParticipant} <span>participants</span></div></Card.Title>
                    <Card.Text>{element.description}</Card.Text>
                    <Card.Text><div className="d-flex justify-content-between"><div>Initial price: <h5>{element.firstPrice} <span>USD</span></h5></div><div>Actual price: <h5>{element.lastPrice} <span>USD</span></h5></div></div></Card.Text>
                    <Card.Footer className="text-muted text-left d-flex justify-content-between align-items-center"><div><span>Finish </span>{timeNow.to(element.dateEnd)} <span>({dayjs(element.dateEnd).format('LL LT')})</span></div>
                        <div><Nav.Link href={`/auctions/${props.app}/${element.id}`}>Show more</Nav.Link></div></Card.Footer>
                </Card.Body>
            </Card >
        })

    } else {
        return <div className="text-center"><h4>Click 'Check' to start!</h4></div>
    }


    return (
        <Fragment>
            {auctions}
        </Fragment>

    )
}

export default ShowUserAuctions