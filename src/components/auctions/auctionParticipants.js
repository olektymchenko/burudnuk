import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

const AuctionParticipants = (props) => {
    let participants = "";
    if (props.data !== null) {
        let timeNow = dayjs()
        dayjs.extend(relativeTime)
        dayjs.extend(localizedFormat)
        participants = props.data.participants.slice(0).reverse().map((element, index) => {
            return <Card key={index} style={{ marginBottom: "2%" }}>
                <Card.Body>
                    <Card.Text><div className="d-flex justify-content-between">
                        <div style={{ fontSize: "20px", fontWeight: "600", color: 'blue' }}>{element.nickname}</div>
                        <div style={{ fontSize: "20px", fontWeight: "600" }}>{element.newPrice} USD</div></div></Card.Text>
                </Card.Body>
                <Card.Footer className="text-right">{timeNow.to(element.date)} ({dayjs(element.date).format('LL LT')})</Card.Footer>
            </Card>
        })
    }

    return (
        <Fragment>
            {participants}
        </Fragment>

    )
}

export default AuctionParticipants;