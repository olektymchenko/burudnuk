import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'


const MessageOffer = (props) => {
    let listOfSellers;
    if (props.data.length > 0) {
        dayjs.extend(localizedFormat)
        listOfSellers = props.data.map((element, index) => {
            return (
                <Card style={{ width: '100%', marginTop: '3%', marginBottom: '3%' }} key={index}>
                    <Card.Body>
                        <Card.Title> <Nav.Link href={`/users/${element.dealsender}`}>{element.dealsendernickname}</Nav.Link></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><div>From: {dayjs(element.dateFrom).format('LL LT')}</div></Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><div>To: {dayjs(element.dateTo).format('LL LT')}</div></Card.Subtitle>
                        <Card.Text>{element.message}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-end"> <Button variant="primary" value={element.messageId} onClick={(e) => props.click(e, "value")}>Start chat</Button></Card.Footer>
                </Card>
            )
        })
    }

    else {
        return (
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>No messages yet</Card.Title>
                </Card.Body>
            </Card>
        )

    }

    return (
        <Fragment>
            {listOfSellers}
        </Fragment>
    )
}

export default MessageOffer;
