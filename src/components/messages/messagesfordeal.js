import React, { Fragment, useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import firebase from '../../fireconfig';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import { sendMessage, sendImage } from '../../redux/actions/dataActions';
import ModalImage from "react-modal-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import imageCompression from 'browser-image-compression'; // We comporess images before sending to server


function scrollToBottom() {
    var element = document.getElementById('lastMessage');
    element.scrollIntoView({ block: 'end' });
}

const Messages = (props) => {
    dayjs.extend(relativeTime);

    const [messages, setMessages] = useState();
    const handleAddMessages = (messages) => setMessages(messages);

    const [doingdata, setDoingData] = useState(false); // Colntrol dialogs
    const handleDoingDataFalse = () => setDoingData(false); // false when server start asking server for data
    const handleDoingDataTrue = () => setDoingData(true); // true when server response

    const [messageData, setMessage] = useState(''); // Collectiong data for messages
    const handleUpdateMessage = (event) => setMessage(event.target.value)

    const handleSendDialog = () => { // Send text massage
        let newOne = {
            text: messageData
        }
        props.sendMessage(props.id, newOne);
        setMessage('');
    }

    const handleAddImage = () => {    // Send image message
        const fileInput = document.getElementById('imageInput');
        fileInput.click();
    }
    const submitImage = (event) => { // Preparing image to send
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

                return props.sendImage(props.id, formData); // write your own logic
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }



    useEffect(() => { // Here i'm get all mesages and listen for new
        handleDoingDataFalse();
        let observer = firebase.firestore().collection('messages').doc(props.id).onSnapshot(querySnapshot => {
            let lastElement = querySnapshot.data().messages.map((item, index) => {
                ///////////////////////////////////////////////////////////////////////////////// LAST ADD ID FOR LAST
                if (index === querySnapshot.data().messages.length - 1) { // cheking for the last element
                    if (item.text.startsWith('https')) { // checking if image
                        if (item.sender === props.nickname) {
                            return <Card style={{ width: '51%', marginTop: '3%', marginBottom: '1%', marginRight: '1%', float: 'right' }} id='lastMessage' key={index}><Card.Body><div><div style={{ fontWeight: '700' }} className="d-flex justify-content-center"><div style={{ maxWidth: '90%' }}><ModalImage small={item.text} large={item.text} alt="UserImage"></ModalImage></div></div><div className='text-center'>By <span style={{ fontWeight: '500' }}>{item.sender} </span>{dayjs(item.createdAt).fromNow()}</div></div></Card.Body></Card>
                        }
                        else {
                            return <Card style={{ width: '51%', marginTop: '3%', marginBottom: '1%', marginLeft: '1%', float: 'left' }} id='lastMessage' key={index}><Card.Body><div><div style={{ fontWeight: '700' }} className="d-flex justify-content-center"><div style={{ maxWidth: '90%' }}><ModalImage small={item.text} large={item.text} alt="UserImage"></ModalImage></div></div><div className='text-center'>By <span style={{ fontWeight: '500' }}>{item.sender} </span>{dayjs(item.createdAt).fromNow()}</div></div></Card.Body></Card>
                        }
                    }
                    if (item.sender === props.nickname) { // if no, render text
                        return <Card style={{ width: '51%', marginTop: '3%', marginBottom: '1%', marginRight: '1%', float: 'right' }} id='lastMessage' bg="primary" text="white" key={index}><Card.Body><div><div style={{ fontWeight: '700' }}>{item.text}</div><div className="text-right">By <span style={{ fontWeight: '500' }}>{item.sender} </span>{dayjs(item.createdAt).fromNow()}</div></div></Card.Body></Card>
                    }
                    else {
                        return <Card style={{ width: '51%', marginTop: '3%', marginBottom: '1%', marginLeft: '1%', float: 'left' }} id='lastMessage' bg="primary" text="white" key={index}><Card.Body><div><div style={{ fontWeight: '700' }}>{item.text}</div><div>By <span style={{ fontWeight: '500' }}>{item.sender} </span>{dayjs(item.createdAt).fromNow()}</div></div></Card.Body></Card>
                    }
                }
                ////// NORMAL MAPING
                if (item.text.startsWith('https')) {
                    if (item.sender === props.nickname) {
                        return <Card style={{ width: '51%', marginTop: '3%', marginBottom: '1%', marginRight: '1%', float: 'right' }} key={index}><Card.Body><div><div style={{ fontWeight: '700' }} className="d-flex justify-content-center"><div style={{ maxWidth: '90%' }}><ModalImage small={item.text} large={item.text} alt="UserImage"></ModalImage></div></div><div className='text-center'>By <span style={{ fontWeight: '500' }}>{item.sender} </span>{dayjs(item.createdAt).fromNow()}</div></div></Card.Body></Card>
                    }
                    else {
                        return <Card style={{ width: '51%', marginTop: '3%', marginBottom: '1%', marginLeft: '1%', float: 'left' }} key={index}><Card.Body><div><div style={{ fontWeight: '700' }} className="d-flex justify-content-center"><div style={{ maxWidth: '90%' }}><ModalImage small={item.text} large={item.text} alt="UserImage"></ModalImage></div></div><div className='text-center'>By <span style={{ fontWeight: '500' }}>{item.sender} </span>{dayjs(item.createdAt).fromNow()}</div></div></Card.Body></Card>
                    }
                }
                if (item.sender === props.nickname) {
                    return <Card style={{ width: '51%', marginTop: '3%', marginBottom: '1%', marginRight: '1%', float: 'right' }} bg="primary" text="white" key={index}><Card.Body><div><div style={{ fontWeight: '700' }}>{item.text}</div><div className="text-right">By <span style={{ fontWeight: '500' }}>{item.sender} </span>{dayjs(item.createdAt).fromNow()}</div></div></Card.Body></Card>
                }
                else {
                    return <Card style={{ width: '51%', marginTop: '3%', marginBottom: '1%', marginLeft: '1%', float: 'left' }} bg="primary" text="white" key={index}><Card.Body><div><div style={{ fontWeight: '700' }}>{item.text}</div><div>By <span style={{ fontWeight: '500' }}>{item.sender} </span>{dayjs(item.createdAt).fromNow()}</div></div></Card.Body></Card>
                }

            })
            handleDoingDataTrue()
            handleAddMessages(lastElement);
            const timer = setTimeout(() => { // wait 1sek, for new messages
                scrollToBottom();
            }, 500);
            return () => clearTimeout(timer);
        })
    }, [props])


    return (
        < Fragment >
            <div style={{ maxHeight: '70vh', overflow: 'auto' }} >
                {doingdata === true ? messages : ''}
            </div>
            <div className="d-flex align-items-center justify-content-around" style={{ backgroundColor: 'gainsboro', padding: '15px' }}>
                {props.loading === false ? (<Nav.Item >
                    <Nav.Link href="#" onClick={handleAddImage}><FontAwesomeIcon icon={faImage} size='2x' /></Nav.Link>
                </Nav.Item>) : ''}
                <Form.Group controlId="exampleForm.ControlTextarea1" style={{ width: '70%', margin: '0' }}>
                    <Form.Control as="textarea" placeholder="Write a message" onChange={handleUpdateMessage} value={messageData} />
                </Form.Group>

                {props.loading === false ? <Button variant="primary" onClick={handleSendDialog}>Send</Button> : "Sending"}
            </div>

            <input type='file' id='imageInput' hidden='hidden' onChange={submitImage} />

        </Fragment >
    )

}

const mapStateToProps = state => ({
    loading: state.data.loadinglistofmessages
})
export default connect(mapStateToProps, { sendMessage, sendImage })(Messages) 
