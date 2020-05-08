import React, { Fragment, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import firebase from '../../fireconfig';
import Spinner from 'react-bootstrap/Spinner';


let messagesToShow = [];


const Messages = (props) => {

    const [loaded, setLoaded] = useState(false);
    const handleLoaded = () => setLoaded(true);

    let doc = firebase.firestore().collection('messages').doc(props.id);
    let listOfMessages = doc.get().then(doc => {
        doc.data().messages.map((item => {
            messagesToShow.push({
                text: item.text,
                sender: item.sender,
                createdAt: item.createdAt
            })
        }))
    }).then(() => {
        handleLoaded();
        console.log(messagesToShow)
    })

    return (
        < Fragment >
            <Card style={{ width: '100%', marginTop: '3%', marginBottom: '5%' }} border="primary">
                {loaded === true ? messagesToShow : <Spinner animation="border" />}
            </Card>
            <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: 'gainsboro', padding: '15px' }}>
                <Form.Group controlId="exampleForm.ControlTextarea1" style={{ width: '70%', margin: '0' }}>
                    <Form.Control as="textarea" placeholder="Write a message" />
                </Form.Group>
            </div>
            <div style={{ marginTop: '3%' }} className="d-flex justify-content-end">
                <Button variant="primary" size="sm">Send</Button>{' '}
            </div>

        </Fragment >
    )


}
export default Messages; 
