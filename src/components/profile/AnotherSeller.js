import React, { useState, useRef, useEffect, Fragment } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
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
    const handleCloseAddDeal = () => {
        setAddDeal(false);
        generals.current = null;
        setPrice('');
        setMessage('');
    }
    const handleShowAddDeal = () => setAddDeal(true);

    /* State for comment body */
    const [bodyData, setBody] = useState('');
    const handleUpdateBody = (event) => setBody(event.target.value)

    /* State for deal */
    const [priceData, setPrice] = useState('');
    const handleUpdatePrice = (event) => setPrice(event.target.value)

    const [messageData, setMessage] = useState('');
    const handleUpdateMessage = (event) => setMessage(event.target.value)

    /* State for date */

    const [dateFrom, setDateFrom] = useState(null);

    const [dateTo, setDateTo] = useState(null);


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
                message: messageData,
                dateFrom: dateFrom,
                dateTo: dateTo
            }
            props.sentFacebookDeal(props.data.mainInfo.userId, newDeal);
            setPrice('');
            setMessage('');
            setDateFrom('');
            setDateTo('');
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
                message: messageData,
                dateFrom: dateFrom,
                dateTo: dateTo
            }
            props.sentInstagramDeal(props.data.mainInfo.userId, newDeal);
            setPrice('');
            setMessage('');
            setDateFrom('');
            setDateTo('');
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
                message: messageData,
                dateFrom: dateFrom,
                dateTo: dateTo
            }
            props.sentTikTokDeal(props.data.mainInfo.userId, newDeal);
            setPrice('');
            setMessage('');
            setDateFrom('');
            setDateTo('');
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
                message: messageData,
                dateFrom: dateFrom,
                dateTo: dateTo
            }
            props.sentTelegramDeal(props.data.mainInfo.userId, newDeal);
            setPrice('');
            setMessage('');
            setDateFrom(null);
            setDateTo(null);

        }
    }

    const { mainInfo: { commentCount, accountLink, barter, dealsCount, dayVisitors, dislikeCount, likeCount, body, followers } } = props.data;
    const authenticated = props.user.authenticated;
    const errors = useRef(false);
    const generals = useRef(false);
    useEffect(() => {
        const error = props.UI.errors;
        errors.current = error
        const general = props.UI.general;
        generals.current = general;
    }, [props])
    if (Object.keys(props.data).length === 1) {
        return (
            <Fragment>
                <div style={{ marginTop: '30px' }}><div><p className="text-center">User dont have a seller account</p></div><div className="text-center"><FontAwesomeIcon icon={faFrown} size="3x" style={{ color: 'blue', marginBottom: '50px' }} /></div></div>
            </Fragment>
        )
    } else {
        return (< Fragment >
            <Card style={{ marginTop: '3%', marginBottom: '5%', width: '100%' }}>
                <Card.Body>
                    <Card.Title>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>{props.seller} seller account</div>
                            {authenticated ? <div style={{ paddingRight: '5%' }}><Nav.Link href="#" onClick={handleShowAddDeal}><FontAwesomeIcon icon={faPaperPlane} /></Nav.Link></div> : ''}
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
                        {authenticated ? <div>
                            <Card.Link href="#" onClick={handleShowAddComment}><FontAwesomeIcon icon={faComment} /></Card.Link>
                            <Card.Link href="#" onClick={handleAddLike}><FontAwesomeIcon icon={faThumbsUp} /></Card.Link>
                            <Card.Link href="#" onClick={handleAddDislike}><FontAwesomeIcon icon={faThumbsDown} /></Card.Link>
                        </div> : ''}
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
                    {generals.current !== null ? (<Form.Text className="text-muted">{generals.current.general}</Form.Text>) : ""}
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
                    <InputGroup className="mb-3" style={{ padding: '2%' }}>
                        <FormControl
                            placeholder="Enter your price in dollars..."
                            aria-label="price"
                            aria-describedby="basic-addon2"
                            name="price"
                            value={priceData}
                            onChange={handleUpdatePrice}

                        />
                        <InputGroup.Append>
                            <InputGroup.Text id="basic-addon2" >$</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                    <Form.Group controlId="exampleForm.ControlTextarea1" style={{ padding: '2%' }}>
                        <Form.Control as="textarea" rows="3" name="message" value={messageData} onChange={handleUpdateMessage} placeholder="Enter your message..." />
                        {errors.current !== null ? (<Form.Text className="text-muted">{errors.current.message}</Form.Text>) : ""}
                        <div className="d-flex justify-content-around" style={{ marginTop: '3%' }}><div><p>From:</p><DatePicker selected={dateFrom} placeholderText="Select start date" selectsStart startDate={dateFrom} endDate={dateTo} onChange={date => setDateFrom(date)} showTimeSelect timeFormat="HH:mm" timeIntervals={60} timeCaption="time" dateFormat="MMMM d, yyyy h:mm aa" /></div>
                            <div><p>To:</p><DatePicker selectsEnd startDate={dateFrom} endDate={dateTo} minDate={new Date()} selected={dateTo} placeholderText="Select end date" onChange={date => setDateTo(date)} showTimeSelect timeFormat="HH:mm" timeIntervals={60} timeCaption="time" dateFormat="MMMM d, yyyy h:mm aa" /></div></div>
                    </Form.Group>
                    {generals.current !== null ? (<Form.Text className="text-muted">{generals.current.general}</Form.Text>) : ""}
                </Form>
                <Modal.Footer>
                    {props.UI.loading === false ? <Button variant="secondary" onClick={handleCloseAddDeal}>Close</Button> : null}
                    {props.UI.loading === false ? <Button variant="primary" onClick={handleAddDeal}>Sent</Button> : <Spinner animation="border" />}
                </Modal.Footer>
            </Modal>
        </Fragment >)
    }

}

const mapStateToProps = state => ({
    UI: state.UI,
    user: state.user
})

export default connect(mapStateToProps, {
    addFacebookSellerLike, addFacebookSellerDislike, addFacebookSellerComment,
    addInstagramSellerLike, addInstagramSellerDislike, addInstagramSellerComment,
    addTikTokSellerLike, addTikTokSellerDislike, addTikTokSellerComment,
    addTelegramSellerLike, addTelegramSellerDislike, addTelegramSellerComment,
    sentFacebookDeal, sentInstagramDeal, sentTikTokDeal, sentTelegramDeal
})(AnotherSeller);