import React, { Fragment, useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import firebase from '../../fireconfig';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { connect } from 'react-redux';
import { sendMessage } from '../../redux/actions/dataActions';
import ScrollToBottom, { useScrollToBottom, useSticky } from 'react-scroll-to-bottom';
import { css } from 'glamor';






const Messages = (props) => {
    dayjs.extend(relativeTime)
    const scrollToBottom = useScrollToBottom();
    const [sticky] = useSticky();

    let doc = firebase.firestore().collection('messages').doc(props.id);
    const [messages, setMessages] = useState();
    const handleAddMessages = (messages) => setMessages(messages);

    const [doingdata, setDoingData] = useState(false);
    const handleDoingDataFalse = () => setDoingData(false);
    const handleDoingDataTrue = () => setDoingData(true);

    const [messageData, setMessage] = useState('');
    const handleUpdateMessage = (event) => setMessage(event.target.value)

    const handleSendDialog = () => {
        let newOne = {
            text: messageData
        }
        props.sendMessage(props.id, newOne);
        setMessage('');
    }



    useEffect(() => {
        handleDoingDataFalse();
        let listOfMessages = doc.get().then(doc => {
            let messagesToShow = doc.data().messages.map((item, index) => {
                if (item.sender === props.nickname) {
                    return <Card style={{ width: '51%', marginTop: '3%', marginBottom: '1%', marginRight: '1%', float: 'right' }} bg="primary" text="white" key={index}><Card.Body><div><div style={{ fontWeight: '700' }}>{item.text}</div><div className="text-right">By <span style={{ fontWeight: '500' }}>{item.sender} </span>{dayjs(item.createdAt).fromNow()}</div></div></Card.Body></Card>
                }
                else {
                    return <Card style={{ width: '51%', marginTop: '3%', marginBottom: '1%', marginLeft: '1%', float: 'left' }} bg="primary" text="white" key={index}><Card.Body><div><div style={{ fontWeight: '700' }}>{item.text}</div><div>By <span style={{ fontWeight: '500' }}>{item.sender} </span>{dayjs(item.createdAt).fromNow()}</div></div></Card.Body></Card>
                }

            })
            handleAddMessages(messagesToShow);
            handleDoingDataTrue()
        }).catch(err => {
            console.log(err);
        })
    }, [props.id])

    useEffect(() => {
        let observer = firebase.firestore().collection('messages').doc(props.id).onSnapshot(querySnapshot => {
            let lastElement = querySnapshot.data().messages.map((item, index) => {
                if (item.sender === props.nickname) {
                    return <Card style={{ width: '51%', marginTop: '3%', marginBottom: '1%', marginRight: '1%', float: 'right' }} bg="primary" text="white" key={index}><Card.Body><div><div style={{ fontWeight: '700' }}>{item.text}</div><div className="text-right">By <span style={{ fontWeight: '500' }}>{item.sender} </span>{dayjs(item.createdAt).fromNow()}</div></div></Card.Body></Card>
                }
                else {
                    return <Card style={{ width: '51%', marginTop: '3%', marginBottom: '1%', marginLeft: '1%', float: 'left' }} bg="primary" text="white" key={index}><Card.Body><div><div style={{ fontWeight: '700' }}>{item.text}</div><div>By <span style={{ fontWeight: '500' }}>{item.sender} </span>{dayjs(item.createdAt).fromNow()}</div></div></Card.Body></Card>
                }

            })
            handleAddMessages(lastElement);
        }, (error) => console.log(error))
    }, [])

    const ROOT_CSS = css({
        maxHeight: '70vh', overflow: 'auto'
    });
    return (

        <Fragment>
            <ScrollToBottom className={ROOT_CSS}>
                {doingdata === true ? messages : ''}
                {!sticky && <button onClick={scrollToBottom}>Click me to scroll to bottom</button>}
            </ScrollToBottom>

            <div className="d-flex align-items-center justify-content-around" style={{ backgroundColor: 'gainsboro', padding: '15px' }}>

                <Form.Group controlId="exampleForm.ControlTextarea1" style={{ width: '70%', margin: '0' }}>
                    <Form.Control as="textarea" placeholder="Write a message" onChange={handleUpdateMessage} value={messageData} />
                </Form.Group>

                <Button variant="primary" onClick={handleSendDialog}>Send</Button>{' '}
            </div>
        </Fragment>
    )

}

const mapStateToProps = state => ({
    loading: state.data.loadinglistofmessages
})
export default connect(mapStateToProps, { sendMessage })(Messages) 
