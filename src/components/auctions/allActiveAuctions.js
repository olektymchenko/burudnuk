import React, { useState, useRef, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux'
import firebase from '../../fireconfig';

const AllActiveAuctions = (props) => {

    let [hasMoreAuctions, setHasMoreAuction] = useState(true);
    let [auctionLength, setAuctionLength] = useState(10);
    let firstSnapshot = useRef();
    let dbname; // Mathing right dbname 
    if (props.app === "facebook") { // if selected facebook
        if (props.kind === "offer") {
            dbname = "facebookactions"
        }
        else if (props.kind === 'search') {
            dbname = "facebookselleractions"
        }
    }

    if (props.app === "instagram") {
        if (props.kind === "offer") {
            dbname = "instagramactions"
        }
        else if (props.kind === 'search') {
            dbname = "instagramselleractions"
        }
    }

    if (props.app === "tiktok") {
        if (props.kind === "offer") {
            dbname = "tiktokactions"
        }
        else if (props.kind === 'search') {
            dbname = "tiktokselleractions"
        }
    }

    if (props.app === "telegram") {
        if (props.kind === "offer") {
            dbname = 'telegramactions'
        }
        else if (props.kind === 'search') {
            dbname = 'telegramselleractions'
        }
    }
    useEffect(() => { // when component load, get snaphsot of first 10 auctions
        let first = firebase.firestore().collection(dbname).where('active', '==', true).where('topic', '==', props.topic).where('country', '==', props.country).orderBy('dateStart', 'desc').limit(10).get().then((snapshot) => {
            firstSnapshot.current = snapshot;
        });
    }, [])


    const fetchMoreData = () => {
        setTimeout(() => {
            let last = firstSnapshot.current.docs[firstSnapshot.current.docs.length - 1];
            let next = firebase.firestore().collection(dbname).where('active', '==', true).where('topic', '==', props.topic).where('country', '==', props.country).orderBy('dateStart', 'desc')
                .startAfter(last.data().dateStart)
                .limit(10).get().then((snaphot => {
                    if (snaphot.docs.length < 10)
                        setHasMoreAuction(false);
                    firstSnapshot.current = snaphot;
                    snaphot.forEach(doc => {
                        foundedAuctions.push(doc.data());
                        setAuctionLength(foundedAuctions.length);
                        if (props.kind === "search") {
                            auctions = foundedAuctions.map((element, index) => {
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
                        } else {
                            auctions = foundedAuctions.map((element, index) => {
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
                        }
                    })

                }

                ))
        }, 1000);
    };

    let auctions;
    let foundedAuctions;
    let timeNow = dayjs()
    dayjs.extend(relativeTime)
    dayjs.extend(localizedFormat)
    const authenticated = props.authenticated;
    if (props.auctions.userSearchActive !== null && props.auctions.userSearchActive.length > 0) {
        foundedAuctions = props.auctions.userSearchActive;
        auctions = foundedAuctions.map((element, index) => {
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
        foundedAuctions = props.auctions.userOfferActive;
        auctions = foundedAuctions.map((element, index) => {
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
        < InfiniteScroll
            dataLength={auctionLength}
            next={fetchMoreData}
            hasMore={hasMoreAuctions}
            endMessage={
                < p style={{ textAlign: "center" }
                }>
                    <b>All auchions showed</b>
                </p >
            }
            loader={< h4 > Loading...</h4 >}
        >
            {auctions}
        </InfiniteScroll >
    )
}

const mapStateToProps = state => ({
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps, null)(AllActiveAuctions);
