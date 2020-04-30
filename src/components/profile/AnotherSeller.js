import React, { useState, Fragment } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faFrown } from '@fortawesome/free-solid-svg-icons';
import Comments from './comments';
import Likes from './likes';
import Dislikes from './dislikes';

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

    const [showUpdatedata, setUpdatedata] = useState(false);
    const handleCloseUpdatedata = () => setUpdatedata(false);
    const handleShowUpdatedata = () => setUpdatedata(true);

    const { mainInfo: { commentCount, accountLink, barter, dealsCount, dayVisitors, dislikeCount, likeCount, body, followers } } = props.data;
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
                    <Card.Link onClick={handleShowComments} href="#">Comments</Card.Link>
                    <Card.Link href="#" onClick={handleShowLikes}>Likes</Card.Link>
                    <Card.Link href="#" onClick={handleShowDisLikes}>Dislikes</Card.Link>
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
        </Fragment >
    )
}


export default AnotherSeller;