import React, { Fragment } from 'react';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const comments = (props) => {
    dayjs.extend(relativeTime)
    const comments = props.comments.sellerdata.comments.map((comment, index) => {
        return <Modal.Body key={index}>
            <div className="d-flex justify-content-around align-items-center" style={{ marginBottom: '3%' }} >
                <div> <h2>{<Nav.Link href={`/${comment.commentSenderNickname}`} >{comment.commentSenderNickname}</Nav.Link>}</h2></div>
                <div><img src={comment.userImage} alt="userPhoto" style={{ height: '60px', widht: '60px', borderRadius: '50%' }} /></div>
            </div>
            <div><h6 style={{ overflowWrap: 'break-word' }}>{comment.body}</h6></div>
            <p>{dayjs(comment.createdAt).fromNow()}</p>
            <hr />
        </Modal.Body>
    })
    return (
        <Fragment>
            {comments}
        </Fragment>
    )

}
export default comments