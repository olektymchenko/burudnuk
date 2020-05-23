import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faFrown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { updateProfile } from '../../redux/actions/userActions'

import imageCompression from 'browser-image-compression'; // We comporess images before sending to server


const userProfile = (props) => {
    const submitImage = (event) => {
        const image = event.target.files[0];
        var options = {
            maxSizeMB: 0.5,
            maxWidthOrHeight: 1920,
            useWebWorker: true
        }
        imageCompression(image, options)
            .then(function (compressedFile) {
                const formData = new FormData();
                formData.append('image', compressedFile, compressedFile.name);

                return props.updateProfile(formData);
            })
            .catch(function (error) {
                console.log(error.message);
            });

    }

    const handleEditPicture = () => {
        const fileInput = document.getElementById('imageInput');
        fileInput.click();
    }
    const { userdata: { nickname, facebook, instagram, tiktok, telegram, createdAt, userImage, confirmed } } = props.userdata;


    return (
        <Card style={{ marginTop: '5%' }}>
            <Card.Header>Welcome to Burunduk, see your profile</Card.Header>
            <img src={userImage} alt="Seller" style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto', marginTop: '5%' }} />
            <Card.Body>
                {confirmed ? <Card.Title className="d-flex justify-content-between align-items-center">Hello, {nickname} <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'blue' }} /></Card.Title> : <Card.Title className="d-flex justify-content-center align-items-center">Hello, {nickname}</Card.Title>}
            </Card.Body>
            <ListGroup className="list-group-flush">
                {instagram ? (<ListGroupItem className="d-flex justify-content-between align-items-center">Instagram : <FontAwesomeIcon icon={faSmile} size="2x" style={{ color: 'green' }} /></ListGroupItem>) : (<ListGroupItem className="d-flex justify-content-between align-items-center">Instagram : <FontAwesomeIcon icon={faFrown} size="2x" style={{ color: 'red' }} /></ListGroupItem>)}
                {facebook ? (<ListGroupItem className="d-flex justify-content-between align-items-center">Facebook : <FontAwesomeIcon icon={faSmile} size="2x" style={{ color: 'green' }} /></ListGroupItem>) : (<ListGroupItem className="d-flex justify-content-between align-items-center">Facebook :<FontAwesomeIcon icon={faFrown} size="2x" style={{ color: 'red' }} /></ListGroupItem>)}
                {tiktok ? (<ListGroupItem className="d-flex justify-content-between align-items-center">TikTok : <FontAwesomeIcon icon={faSmile} size="2x" style={{ color: 'green' }} /></ListGroupItem>) : (<ListGroupItem className="d-flex justify-content-between align-items-center">TikTok :<FontAwesomeIcon icon={faFrown} size="2x" style={{ color: 'red' }} /></ListGroupItem>)}
                {telegram ? (<ListGroupItem className="d-flex justify-content-between align-items-center">Telegram :<FontAwesomeIcon icon={faSmile} size="2x" style={{ color: 'green' }} /></ListGroupItem>) : (<ListGroupItem className="d-flex justify-content-between align-items-center">Telegram :<FontAwesomeIcon icon={faFrown} size="2x" style={{ color: 'red' }} /></ListGroupItem>)}
            </ListGroup>
            <Card.Footer className="d-flex justify-content-between">
                <small className="text-muted"> <Card.Link onClick={handleEditPicture} href="#">Update profile image</Card.Link></small>
                <input type='file' id='imageInput' hidden='hidden' onChange={submitImage} />
                <small className="text-muted">Joined  {dayjs(createdAt).format('MMM YYYY')}</small>
            </Card.Footer>
        </Card>
    )

}

const mapStateToProps = state => ({
    loading: state.user
})
export default connect(mapStateToProps, { updateProfile })(userProfile);
