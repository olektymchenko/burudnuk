import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import Nav from 'react-bootstrap/Nav'


const HomePageAuctions = (props) => {
    let timeNow = dayjs();
    dayjs.extend(relativeTime);
    dayjs.extend(localizedFormat);

    const handleClick = () => {
        console.log("Click")
    }


    let auctions = '';
    if (props.data !== null) {
        auctions = props.data.map((element, index) => {
            return <Card key={index} style={{ marginTop: '2%', marginLeft: "1%", marginRight: "1%", textAlign: "left" }} onClick={handleClick}>
                <Card.Body>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text>{element.description}</Card.Text>
                    <Card.Text><div className="d-flex justify-content-between align-items-center">
                        <div>{element.amountOfParticipant} participants</div>
                        <div style={{ fontSize: "20px", fontWeight: "bold" }}>{element.lastPrice} USD</div>
                    </div></Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted text-right">
                    <div className="d-flex justify-content-between align-items-center">
                        <div><Nav.Link href={`/auctions/${props.app}/${element.id}/offer`}>More</Nav.Link></div>
                        <div>
                            <div>Finish {timeNow.to(element.dateEnd)}</div>
                        </div>
                    </div>
                </Card.Footer>
            </Card >
        })
    }

    return (
        <Fragment>
            {auctions}
        </Fragment>
    )
}

export default HomePageAuctions