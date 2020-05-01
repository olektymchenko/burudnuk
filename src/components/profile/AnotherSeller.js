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
import { faExchangeAlt, faFrown, faComment, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import Comments from './comments';
import Likes from './likes';
import Dislikes from './dislikes';
import { connect } from 'react-redux';
import {
    addFacebookSellerLike, addFacebookSellerDislike, addFacebookSellerComment,
    addInstagramSellerLike, addInstagramSellerDislike, addInstagramSellerComment,
    addTikTokSellerLike, addTikTokSellerDislike, addTikTokSellerComment,
    addTelegramSellerLike, addTelegramSellerDislike, addTelegramSellerComment,
} from '../../redux/actions/userActions'

const AnotherSeller = (props) => {
    const [showComments, setShowComments] = useState(false);
    const handleCloseComments = () => setShowComments(false);
    const handleShowComments = () => setShowComments(true);

    const [showLikes, setShowLikes] = useState(false);
    const handleCloseLikes = () => setShowLikes(false);
    const handleShowLikes = () => setShowLikes(true);

    const [showDislikes, setShowDislikes] = useState(false);
    const handleCloseDislikes = () => setShowDislikes(false);
    const handleShowDisLikes = () => setShowDislikes(true);

    const [showAddComment, setAddComment] = useState(false);
    const handleCloseAddComment = () => setAddComment(false);
    const handleShowAddComment = () => setAddComment(true);

    /* State for comment body */
    const [bodyData, setBody] = useState('');
    const handleUpdateBody = (event) => setBody(event.target.value)

    let handleAddLike;
    let handleAddDislike;
    let handleAddComment;
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
    }

    const { mainInfo: { commentCount, accountLink, barter, dealsCount, dayVisitors, dislikeCount, likeCount, body, followers } } = props.data;
    const errors = useRef(false);
    useEffect(() => {
        const error = props.UI.errors;
        errors.current = error
    })
    return (
        < Fragment >
            <Card style={{ margin: '5%' }} bg="light" border="primary">
                <Card.Body>
                    <Card.Title>{props.seller} seller account</Card.Title>
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
    addTelegramSellerLike, addTelegramSellerDislike, addTelegramSellerComment
})(AnotherSeller);