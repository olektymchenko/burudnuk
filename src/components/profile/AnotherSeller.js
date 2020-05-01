import React, { useState, useRef, useEffect, Fragment } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faFrown, faComment, faThumbsUp, faThumbsDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Comments from './comments';
import Likes from './likes';
import Dislikes from './dislikes';
import { connect } from 'react-redux';
import {
    addFacebookSellerLike, addFacebookSellerDislike, addFacebookSellerComment,
    addInstagramSellerLike, addInstagramSellerDislike, addInstagramSellerComment,
    addTikTokSellerLike, addTikTokSellerDislike, addTikTokSellerComment,
    addTelegramSellerLike, addTelegramSellerDislike, addTelegramSellerComment,
    sentFacebookDeal, sentInstagramDeal, sentTikTokDeal, sentTelegramDeal
} from '../../redux/actions/userActions'

const AnotherSeller = (props) => {
    const [showComments, setShowComments] = useState(false);  /* State for window with comments */
    const handleCloseComments = () => setShowComments(false);
    const handleShowComments = () => setShowComments(true);

    const [showLikes, setShowLikes] = useState(false); /* State for window with likes */
    const handleCloseLikes = () => setShowLikes(false);
    const handleShowLikes = () => setShowLikes(true);

    const [showDislikes, setShowDislikes] = useState(false); /* State for window with dislikes */
    const handleCloseDislikes = () => setShowDislikes(false);
    const handleShowDisLikes = () => setShowDislikes(true);

    const [showAddComment, setAddComment] = useState(false); /* State for window for comment adding */
    const handleCloseAddComment = () => setAddComment(false);
    const handleShowAddComment = () => setAddComment(true);

    const [showAddDeal, setAddDeal] = useState(false); /* State for window for deal sending */
    const handleCloseAddDeal = () => setAddDeal(false);
    const handleShowAddDeal = () => setAddDeal(true);

    /* State for comment body */
    const [bodyData, setBody] = useState('');
    const handleUpdateBody = (event) => setBody(event.target.value)

    /* State for deal */
    const [priceData, setPrice] = useState('');
    const handleUpdatePrice = (event) => setPrice(event.target.value)

    const [messageData, setMessage] = useState('');
    const handleUpdateMessage = (event) => setMessage(event.target.value)

    let handleAddLike;
    let handleAddDislike;
    let handleAddComment;
    let handleAddDeal;
    if (props.seller === 'Facebook') {
        handleAddLike = () => {
            props.addFacebookSellerLike(props.data.mainInfo.userId);
        }

        handleAddDislike = () => {
            props.addFacebookSellerDislike(props.data.mainInfo.userId);
        }

        handleAddComment = () => {
            let newComment = {
                body: bodyData
            }
            props.addFacebookSellerComment(props.data.mainInfo.userId, newComment);
        }

        handleAddDeal = () => {
            let newDeal = {
                price: priceData,
                message: messageData
            }
            props.sentFacebookDeal(props.data.mainInfo.userId, newDeal);
        }
    }
    if (props.seller === 'Instagram') {
        handleAddLike = () => {
            props.addInstagramSellerLike(props.data.mainInfo.userId);
        }

        handleAddDislike = () => {
            props.addInstagramSellerDislike(props.data.mainInfo.userId);
        }

        handleAddComment = () => {
            let newComment = {
                body: bodyData
            }
            props.addInstagramSellerComment(props.data.mainInfo.userId, newComment);
        }

        handleAddDeal = () => {
            let newDeal = {
                price: priceData,
                message: messageData
            }
            props.sentInstagramDeal(props.data.mainInfo.userId, newDeal);
        }
    }
    if (props.seller === 'TikTok') {
        handleAddLike = () => {
            props.addTikTokSellerLike(props.data.mainInfo.userId);
        }

        handleAddDislike = () => {
            props.addTikTokSellerDislike(props.data.mainInfo.userId);
        }

        handleAddComment = () => {
            let newComment = {
                body: bodyData
            }
            props.addTikTokSellerComment(props.data.mainInfo.userId, newComment);
        }
        handleAddDeal = () => {
            let newDeal = {
                price: priceData,
                message: messageData
            }
            props.sentTikTokDeal(props.data.mainInfo.userId, newDeal);
        }
    }
    if (props.seller === 'Telegram') {
        handleAddLike = () => {
            props.addTelegramSellerLike(props.data.mainInfo.userId);
        }

        handleAddDislike = () => {
            props.addTelegramSellerDislike(props.data.mainInfo.userId);
        }

        handleAddComment = () => {
            let newComment = {
                body: bodyData
            }
            props.addTelegramSellerComment(props.data.mainInfo.userId, newComment);
        }
        handleAddDeal = () => {
            let newDeal = {
                price: priceData,
                message: messageData
            }
            props.sentTelegramDeal(props.data.mainInfo.userId, newDeal);

        }
    }

    const { mainInfo: { commentCount, accountLink, barter, dealsCount, dayVisitors, dislikeCount, likeCount, body, followers } } = props.data;
    const errors = useRef(false);
    const generals = useRef(false);
    useEffect(() => {
        const error = props.UI.errors;
        errors.current = error
        const general = props.UI.general;
        generals.current = general;
    })
    return (
        < Fragment >
            <Card style={{ margin: '5%', width: '100%', padding: '1%' }} bg="light" border="primary">
                <Card.Body>
                    <Card.Title>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>{props.seller} seller account</div>
                            <div style={{ paddingRight: '5%' }}><Nav.Link href="#" onClick={handleShowAddDeal}><FontAwesomeIcon icon={faPaperPlane} /></Nav.Link></div>
                        </div>
                    </Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><Nav.Link target="_blank" href={accountLink}>{accountLink}</Nav.Link></ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center"><div>Followers:</div><div><h6>{followers}</h6></div></ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center"><div>Visitors per day:</div><div><h6>{dayVisitors}</h6></div></ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center"><div>Deals Done:</div><div><h6>{dealsCount}</h6></div></ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center"><div>Comments:</div><div><h6>{commentCount}</h6></div></ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center"><div>Likes:</div><div><h6>{likeCount}</h6></div></ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center"><div>Dislikes:</div><div><h6>{dislikeCount}</h6></div></ListGroupItem>
                    {barter === true ? (<ListGroupItem className="d-flex justify-content-between align-items-center">Barter: <FontAwesomeIcon icon={faExchangeAlt} size="2x" style={{ color: 'green' }} /></ListGroupItem>) : (<ListGroupItem className="d-flex justify-content-between align-items-center">Barter: <FontAwesomeIcon icon={faFrown} size="2x" style={{ color: 'red' }} /></ListGroupItem>)}
                </ListGroup>
                <Card.Body>
                    <div className="d-flex justify-content-between" style={{ flexWrap: "wrap" }}>
                        <div>
                            <Card.Link onClick={handleShowComments} href="#">Comments</Card.Link>
                            <Card.Link href="#" onClick={handleShowLikes}>Likes</Card.Link>
                            <Card.Link href="#" onClick={handleShowDisLikes}>Dislikes</Card.Link>
                        </div>
                        <div>
                            <Card.Link href="#" onClick={handleShowAddComment}><FontAwesomeIcon icon={faComment} /></Card.Link>
                            <Card.Link href="#" onClick={handleAddLike}><FontAwesomeIcon icon={faThumbsUp} /></Card.Link>
                            <Card.Link href="#" onClick={handleAddDislike}><FontAwesomeIcon icon={faThumbsDown} /></Card.Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            {/* Show comments dialog */}
            <Modal show={showComments} onHide={handleCloseComments}>
                <Modal.Header closeButton>
                    <Modal.Title>Comments</Modal.Title>
                </Modal.Header>
                <Comments comments={props.data} />
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseComments}>
                        Close
              </Button>
                </Modal.Footer>
            </Modal>
            {/* Show likes dialog */}
            <Modal show={showLikes} onHide={handleCloseLikes}>
                <Modal.Header closeButton>
                    <Modal.Title>Likes</Modal.Title>
                </Modal.Header>
                <Likes likes={props.data} />
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseLikes}>
                        Close
              </Button>
                </Modal.Footer>
            </Modal>
            {/* Show dislikes dialog */}
            <Modal show={showDislikes} onHide={handleCloseDislikes}>
                <Modal.Header closeButton>
                    <Modal.Title>Dislikes</Modal.Title>
                </Modal.Header>
                <Dislikes dislikes={props.data} />
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDislikes}>
                        Close
              </Button>
                </Modal.Footer>
            </Modal>

            {/* Add comment dialog */}
            <Modal show={showAddComment} onHide={handleCloseAddComment}>
                <Modal.Header closeButton>
                    <Modal.Title>Comment</Modal.Title>
                </Modal.Header>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1" style={{ padding: '2%' }}>
                        <Form.Control as="textarea" rows="3" name="body" value={bodyData} onChange={handleUpdateBody} placeholder="Let another users know more about this seller" />
                        {errors.current !== null ? (<Form.Text className="text-muted">{errors.current.body}</Form.Text>) : ""}
                    </Form.Group>
                </Form>
                <Modal.Footer>
                    {props.UI.loading === false ? <Button variant="secondary" onClick={handleCloseAddComment}>Close</Button> : null}
                    {props.UI.loading === false ? <Button variant="primary" onClick={handleAddComment}>Save</Button> : <Spinner animation="border" />}
                </Modal.Footer>
            </Modal>

            {/* Sent deal dialog */}

            <Modal show={showAddDeal} onHide={handleCloseAddDeal}>
                <Modal.Header closeButton>
                    <Modal.Title>Sent deal</Modal.Title>
                </Modal.Header>
                <Form>
                    <Form.Group controlId="formUserFollowers" style={{ padding: '2%' }}>
                        <Form.Label>Price:</Form.Label>
                        <Form.Control type="text" name="price" value={priceData} onChange={handleUpdatePrice} placeholder=" Enter your price" />
                        {errors.current !== null ? (<Form.Text className="text-muted">{errors.current.price}</Form.Text>) : ""}
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1" style={{ padding: '2%' }}>
                        <Form.Label>Message:</Form.Label>
                        <Form.Control as="textarea" rows="3" name="message" value={messageData} onChange={handleUpdateMessage} placeholder="Your message..." />
                        {errors.current !== null ? (<Form.Text className="text-muted">{errors.current.message}</Form.Text>) : ""}
                    </Form.Group>
                    {generals.current !== null ? (<Form.Text className="text-muted">{generals.current.general}</Form.Text>) : ""}
                </Form>
                <Modal.Footer>
                    {props.UI.loading === false ? <Button variant="secondary" onClick={handleCloseAddDeal}>Close</Button> : null}
                    {props.UI.loading === false ? <Button variant="primary" onClick={handleAddDeal}>Sent</Button> : <Spinner animation="border" />}
                </Modal.Footer>
            </Modal>
        </Fragment >
    )
}

const mapStateToProps = state => ({
    UI: state.UI
})

export default connect(mapStateToProps, {
    addFacebookSellerLike, addFacebookSellerDislike, addFacebookSellerComment,
    addInstagramSellerLike, addInstagramSellerDislike, addInstagramSellerComment,
    addTikTokSellerLike, addTikTokSellerDislike, addTikTokSellerComment,
    addTelegramSellerLike, addTelegramSellerDislike, addTelegramSellerComment,
    sentFacebookDeal, sentInstagramDeal, sentTikTokDeal, sentTelegramDeal
})(AnotherSeller);