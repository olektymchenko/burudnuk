import React, { Fragment, useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import dayjs from 'dayjs';
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { connect } from 'react-redux';
import { addNewOfferPrice, addNewSearchPrice } from '../../redux/actions/Auctions';
import firebase from '../../fireconfig';


const UniqueAuction = (props) => {
    let timeNow = dayjs()
    dayjs.extend(relativeTime)
    dayjs.extend(localizedFormat)

    const [price, setPrice] = useState(props.data.lastPrice);
    const SetPrice = (price) => setPrice(price);

    const userAddPrice = (userprice) => {
        let prevvalue = parseInt(price, 10);
        let newValue = prevvalue + parseInt(userprice, 10);
        let intValue = parseInt(newValue, 10);
        SetPrice(intValue);
    }

    const userMinusPrice = (userprice) => {
        let prevvalue = parseInt(price, 10);
        let newValue = prevvalue - parseInt(userprice, 10);
        let intValue = parseInt(newValue, 10);
        SetPrice(intValue);
    }

    const [initPtice, setInitPrice] = useState(props.data.lastPrice);

    const handlePrice = (event) => {
        SetPrice(event.target.value)
    }

    const handleAuction = () => {
        if (props.type === 'offer') {
            let newPrice = {
                newPrice: price
            }
            props.addNewOfferPrice(newPrice, props.auctionId, props.app)
        } else if (props.type === 'search') {
            let newPrice = {
                newPrice: price
            }
            props.addNewSearchPrice(newPrice, props.auctionId, props.app)
        }

    }

    let title = props.data.title;
    let description = props.data.description;
    let dateEnd = props.data.dateEnd;
    let lastPrice = props.data.lastPrice;
    let amountOfParticipant = props.data.amountOfParticipant;
    return (
        <Card style={{ marginTop: '3%' }}>
            <Card.Title style={{ padding: "1%" }}>{title}</Card.Title>
            <Card.Text style={{ padding: "1%" }}>{description}</Card.Text>
            <Card.Text style={{ padding: "1%" }}><div className="d-flex justify-content-between">
                <div>
                    <div>Finish {timeNow.to(dateEnd)}</div>
                    <div>({dayjs(dateEnd).format('LL LT')})</div></div>
                <div>
                    <h2 style={{ color: "blue" }}>{lastPrice} USD</h2>
                    <div>{amountOfParticipant} participants</div>
                </div>
            </div></Card.Text>
            <Card.Text className="d-flex justify-content-around">
                <div className="d-flex justify-content-around align-items-center" style={{ width: '40%' }}>
                    <h4>Your offer:</h4>
                    {props.type === "offer" ? (
                        <Fragment>
                            <div><Button variant="info" size="md" onClick={() => userAddPrice(1)}>+1</Button></div>
                            <div><Button variant="info" size="md" onClick={() => userAddPrice(5)}>+5</Button></div>
                            <div><Button variant="info" size="md" onClick={() => userAddPrice(10)}>+10</Button></div>
                        </Fragment>
                    ) : (<Fragment>
                        <div><Button variant="info" size="md" onClick={() => userMinusPrice(1)}>-1</Button></div>
                        <div><Button variant="info" size="md" onClick={() => userMinusPrice(5)}>-5</Button></div>
                        <div><Button variant="info" size="md" onClick={() => userMinusPrice(10)}>-10</Button></div>
                    </Fragment>
                        )}

                </div>
                {props.type === "offer" ? ( // If offer type = offer (user offer ads, price up, min price = init price)
                    <InputGroup className="mb-3" style={{ maxWidth: "30%" }}>
                        <FormControl
                            value={price}
                            type="number"
                            min={initPtice}
                            aria-label="User Price"
                            aria-describedby="basic-addon2"
                            style={{ textAlign: "center", fontSize: "30px", fontWeight: 600 }}
                            onChange={handlePrice}
                        />
                        <InputGroup.Append>
                            <InputGroup.Text id="basic-addon2">USD</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                ) : (
                        <InputGroup className="mb-3" style={{ maxWidth: "30%" }}>
                            <FormControl
                                value={price}
                                type="number"
                                max={initPtice}
                                aria-label="User Price"
                                aria-describedby="basic-addon2"
                                style={{ textAlign: "center", fontSize: "30px", fontWeight: 600 }}
                                onChange={handlePrice}
                            />
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2">USD</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    )}

            </Card.Text>
            <Card.Footer className="d-flex justify-content-center">
                {props.auctions.loadingnewprice === false ? (<Button variant="info" size="lg" onClick={handleAuction}>Add {price} USD</Button>) : (
                    <Spinner animation="border" />
                )}
            </Card.Footer>
        </Card>
    )
}

const mapStateToProps = state => ({
    auctions: state.auctions,
    UI: state.UI
})

export default connect(mapStateToProps, { addNewOfferPrice, addNewSearchPrice })(UniqueAuction)