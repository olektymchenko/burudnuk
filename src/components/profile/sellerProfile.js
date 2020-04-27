import React, { useState, Fragment } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faFrown } from '@fortawesome/free-solid-svg-icons';
import Comments from './comments';




const FacebookProfile = (props) => {

    const [showComments, setShowComments] = useState(false);
    const handleCloseComments = () => setShowComments(false);
    const handleShowComments = () => setShowComments(true);

    const [showLikes, setShowLikes] = useState(false);
    const handleCloseLikes = () => setShowLikes(false);
    const handleShowLikes = () => setShowLikes(true);

    const [showDislikes, setShowDislikes] = useState(false);
    const handleCloseDislikes = () => setShowDislikes(false);
    const handleShowDisLikes = () => setShowDislikes(true);

    const { mainInfo: { commentCount, accountLink, barter, dealsCount, dayVisitors, dislikeCount, likeCount, body, followers } } = props.data.sellerdata;
    return (
        <Fragment>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Your {props.seller} seller account</Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Page link:{accountLink}</ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center"><div>Followers:</div><div>{followers}</div></ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center"><div>DayVisitors:</div><div> {dayVisitors}</div></ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center"><div>DealsDone:</div><div>{dealsCount}</div></ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center"><div>CommentCount:</div><div> {commentCount}</div></ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center"><div>LikeCountCount:</div><div>{likeCount}</div></ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between align-items-center"><div>DisLikeCountCount:</div><div>{dislikeCount}</div></ListGroupItem>
                    {barter === true ? (<ListGroupItem className="d-flex justify-content-between align-items-center">Barter: <FontAwesomeIcon icon={faExchangeAlt} size="2x" style={{ color: 'green' }} /></ListGroupItem>) : (<ListGroupItem className="d-flex justify-content-between align-items-center">Barter: <FontAwesomeIcon icon={faFrown} size="2x" style={{ color: 'red' }} /></ListGroupItem>)}
                </ListGroup>
                <Card.Body>
                    <Card.Link onClick={handleShowComments} href="#">Comments</Card.Link>
                    <Card.Link href="#" onClick={handleShowLikes}>Likes</Card.Link>
                    <Card.Link href="#" onClick={handleShowDisLikes}>Dislikes</Card.Link>
                </Card.Body>
            </Card>
            {/* Showing modal dialog */}
            <Modal show={showComments} onHide={handleCloseComments}>
                <Modal.Header closeButton>
                    <Modal.Title>Comments</Modal.Title>
                </Modal.Header>
                <Comments comments={props.data} />
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseComments}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleCloseComments}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showLikes} onHide={handleCloseLikes}>
                <Modal.Header closeButton>
                    <Modal.Title>Heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Likes</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseLikes}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleCloseLikes}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showDislikes} onHide={handleCloseDislikes}>
                <Modal.Header closeButton>
                    <Modal.Title>Heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Dislikes</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDislikes}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleCloseDislikes}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default FacebookProfile;