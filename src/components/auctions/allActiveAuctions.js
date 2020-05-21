import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { connect } from 'react-redux'

const AllActiveAuctions = (props) => {
    let auctions;
    let timeNow = dayjs()
    dayjs.extend(relativeTime)
    dayjs.extend(localizedFormat)
    const authenticated = props.authenticated;
    if (props.auctions.userSearchActive !== null && props.auctions.userSearchActive.length > 0) {
        auctions = props.auctions.userSearchActive.map((element, index) => {
            return <Card style={{ marginTop: "1%", marginBottom: "1%", flexBasis: "25%" }} key={index}>
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between align-items-center"><div><Nav.Link href={`/users/${element.creatorId}`}>Created by {element.creatorNickname}</Nav.Link></div>
                        <div>{element.amountOfParticipant} participants</div></Card.Title>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text>{element.description}</Card.Text>
                    <Card.Text><div className="d-flex justify-content-between"><div>Initial price: <h5>{element.firstPrice} <span>USD</span></h5></div><div>Actual price: <h5>{element.lastPrice} <span>USD</span></h5></div></div></Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted text-left d-flex justify-content-between align-items-center"><div>
                    <div>Finish {timeNow.to(element.dateEnd)}</div>
                    <div>({dayjs(element.dateEnd).format('LL LT')})</div>
                </div>
                    {authenticated === true ? (
                        <Nav.Link href={`/auctions/${props.app}/${element.id}/search`}>Show more</Nav.Link>
                    ) : (
                            <Nav.Link href={`/login`}>Show more</Nav.Link>
                        )}
                </Card.Footer>
            </Card >

        })
    } else if (props.auctions.userOfferActive !== null && props.auctions.userOfferActive.length > 0) {
        auctions = props.auctions.userOfferActive.map((element, index) => {
            return <Card style={{ marginTop: "1%", marginBottom: "1%", flexBasis: "25%" }} key={index}>
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between align-items-center"><div><Nav.Link href={`/users/${element.creatorId}`}>Created by {element.creatorNickname}</Nav.Link></div>
                        <div>{element.amountOfParticipant} participants</div></Card.Title>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text>{element.description}</Card.Text>
                    <Card.Text><div className="d-flex justify-content-between"><div>Initial price: <h5>{element.firstPrice} <span>USD</span></h5></div><div>Actual price: <h5>{element.lastPrice} <span>USD</span></h5></div></div></Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted text-left d-flex justify-content-between align-items-center"><div>
                    <div>Finish {timeNow.to(element.dateEnd)}</div>
                    <div>({dayjs(element.dateEnd).format('LL LT')})</div>
                </div>
                    {authenticated === true ? (
                        <Nav.Link href={`/auctions/${props.app}/${element.id}/offer`}>Show more</Nav.Link>
                    ) : (
                            <Nav.Link href={`/login`}>Show more</Nav.Link>
                        )}
                </Card.Footer>
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

const mapStateToProps = state => ({
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps, null)(AllActiveAuctions);
