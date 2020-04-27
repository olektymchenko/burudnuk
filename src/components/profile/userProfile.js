import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import dayjs from 'dayjs';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faFrown } from '@fortawesome/free-solid-svg-icons';



const userProfile = (props) => {
    const { userdata: { nickname, facebook, instagram, tiktok, telegram, createdAt, userImage }, loading } = props.userdata;
    return (
        <Fragment>
            {loading ? <Spinner animation="border" /> : (<Card style={{ width: '18rem', marginTop: '5%' }} bg="light" border="primary">
                <Card.Header>Welcome to Burunduk, see your profile</Card.Header>
                <Card.Img variant="top" src={userImage} style={{ objectFit: "cover" }} />
                <Card.Body>
                    <Card.Title className="text-center">Hello, {nickname}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {instagram ? (<ListGroupItem className="d-flex justify-content-between align-items-center">Instagram : <FontAwesomeIcon icon={faSmile} size="2x" style={{ color: 'green' }} /></ListGroupItem>) : (<ListGroupItem className="d-flex justify-content-between align-items-center">Instagram : <FontAwesomeIcon icon={faFrown} size="2x" style={{ color: 'red' }} /></ListGroupItem>)}
                    {facebook ? (<ListGroupItem className="d-flex justify-content-between align-items-center">Facebook : <FontAwesomeIcon icon={faSmile} size="2x" style={{ color: 'green' }} /></ListGroupItem>) : (<ListGroupItem className="d-flex justify-content-between align-items-center">Facebook :<FontAwesomeIcon icon={faFrown} size="2x" style={{ color: 'red' }} /></ListGroupItem>)}
                    {tiktok ? (<ListGroupItem className="d-flex justify-content-between align-items-center">TikTok : <FontAwesomeIcon icon={faSmile} size="2x" style={{ color: 'green' }} /></ListGroupItem>) : (<ListGroupItem className="d-flex justify-content-between align-items-center">TikTok :<FontAwesomeIcon icon={faFrown} size="2x" style={{ color: 'red' }} /></ListGroupItem>)}
                    {telegram ? (<ListGroupItem className="d-flex justify-content-between align-items-center">Telegram :<FontAwesomeIcon icon={faSmile} size="2x" style={{ color: 'green' }} /></ListGroupItem>) : (<ListGroupItem className="d-flex justify-content-between align-items-center">Telegram :<FontAwesomeIcon icon={faFrown} size="2x" style={{ color: 'red' }} /></ListGroupItem>)}
                </ListGroup>
                <Card.Footer className="text-right">
                    <small className="text-muted">Joined  {dayjs(createdAt).format('MMM YYYY')}</small>
                </Card.Footer>
            </Card>)}
        </Fragment>
    )

}


export default userProfile;
