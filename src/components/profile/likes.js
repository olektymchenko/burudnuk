import React, { Fragment } from 'react';
import Modal from 'react-bootstrap/Modal';
import dayjs from 'dayjs';
import Nav from 'react-bootstrap/Nav'
import relativeTime from 'dayjs/plugin/relativeTime';
import './comments.scss';

const likes = (props) => {
    dayjs.extend(relativeTime)
    let LikesArray;
    if (props.likes.likes.length === 0)
        return (<Modal.Body> No Likes yet</Modal.Body>)
    else
        (
            LikesArray = props.likes.likes.map((like, index) => {
                return <Modal.Body key={index}>
                    <div className="d-flex justify-content-between align-items-center">
                        <h6>{<Nav.Link href={`/users/${like.likeSender}`} >{like.likeSenderNickname}</Nav.Link>}</h6>
                        <p>{dayjs(like.createdAt).fromNow()}</p>
                    </div>
                    <hr />
                </Modal.Body>
            })
        )

    return (
        <Fragment>
            {LikesArray}
        </Fragment>
    )

}
export default likes