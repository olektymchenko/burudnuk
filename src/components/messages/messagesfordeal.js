import React, { Fragment, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import firebase from '../../fireconfig';
import Spinner from 'react-bootstrap/Spinner';


let messagesToShow = [];
let messages;

const Messages = React.memo(function MyComponent(props) {

    const [messages, setMessages] = useState([]);
    const handleAddMessages = (messages) => setMessages(messages);

    if (props.id === '0') {
        return (
            <Card border="primary" style={{ marginTop: '5%', height: '50vh' }} className="d-flex align-items-center justify-content-center">
                <Card.Text>Hello, please choose a deal to start!</Card.Text>
            </Card>
        )
    } else {
        let doc = firebase.firestore().collection('messages').doc(props.id);
        let listOfMessages = doc.get().then(doc => {
            doc.data().messages.map((item) => {
                messagesToShow.push({
                    text: item.text,
                    createdAt: item.createdAt,
                    messageSender: item.messageSender
                })
            })
        })

    }

    return (
        <Fragment>
            {console.log(messagesToShow)}
            <Card style={{ width: '100%', marginTop: '3%', marginBottom: '5%' }} border="primary">
                {messagesToShow}
            </Card>
            <div className="d-flex align-items-center justify-content-around" style={{ backgroundColor: 'gainsboro', padding: '15px' }}>
                <Form.Group controlId="exampleForm.ControlTextarea1" style={{ width: '70%', margin: '0' }}>
                    <Form.Control as="textarea" placeholder="Write a message" />
                </Form.Group>
                <Button variant="primary">Send</Button>{' '}
            </div>
        </Fragment>
    )

})


export default React.memo(Messages); 
