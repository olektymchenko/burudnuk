import React, { useState, useRef, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { connect } from 'react-redux';
import { startOfferingFacebookAuction, startOfferingInstagramAuction, startOfferingTikTokAuction, startOfferingTelegramAuction } from '../../redux/actions/Auctions';


const OfferForm = (props) => {
    const dateFrom = new Date();

    const [dateTo, setDateTo] = useState(new Date());


    const [titleData, setTitle] = useState('');
    const handleUpdateTitle = (event) => setTitle(event.target.value)

    const [descrData, setDescr] = useState('');
    const handleUpdateDescr = (event) => setDescr(event.target.value)

    const handleSendOfferAuction = () => {
        const data = {
            title: titleData,
            description: descrData,
            dateEnd: dateTo
        }
        if (props.app === "Facebook") {
            props.startOfferingFacebookAuction(data);
            setTitle('');
            setDescr('');
            setDateTo(new Date());
        }

        if (props.app === "Instagram") {
            props.startOfferingInstagramAuction(data);
            setTitle('');
            setDescr('');
            setDateTo(new Date());
        }

        if (props.app === "TikTok") {
            props.startOfferingTikTokAuction(data);
            setTitle('');
            setDescr('');
            setDateTo(new Date());
        }

        if (props.app === "Telegram") {
            props.startOfferingTelegramAuction(data);
            setTitle('');
            setDescr('');
            setDateTo(new Date());
        }

    }

    let generals = useRef(false);
    let errors = useRef(false);
    useEffect(() => {
        const error = props.UI.errors;
        errors.current = error
        const general = props.UI.general;
        generals.current = general;
    }, [props])

    return (
        <Form>
            <Form.Group style={{ marginTop: '3%' }}>
                <Form.Control type="text" placeholder="Enter title" name="title" value={titleData} onChange={handleUpdateTitle} />
                {errors.current !== null ? (<Form.Text className="text-muted">{errors.current.title}</Form.Text>) : ""}
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Enter description" name="description" value={descrData} onChange={handleUpdateDescr} />
                {errors.current !== null ? (<Form.Text className="text-muted">{errors.current.description}</Form.Text>) : ""}
            </Form.Group>
            <div className="d-flex justify-content-between"><span style={{ fontWeight: 'bold' }}>End date:</span><DatePicker selectsEnd startDate={dateFrom} endDate={dateTo} minDate={dateFrom} selected={dateTo} onChange={date => setDateTo(date)}
                showTimeSelect timeFormat="HH:mm" timeIntervals={60} timeCaption="time" dateFormat="MMMM d, yyyy h:mm aa" /></div>
            {generals.current !== null ? (<Form.Text className="text-muted">{generals.current.general}</Form.Text>) : ""}
            {props.UI.loadingauction === true ? (<Spinner animation="border" />) : (<div className="d-flex justify-content-end" style={{ marginTop: '3%' }}><Button variant="primary" onClick={handleSendOfferAuction}>Start!</Button>{' '}</div>)}
        </Form>

    )
}

const mapStateToProps = state => ({
    UI: state.UI,
    user: state.user
})

export default connect(mapStateToProps, { startOfferingFacebookAuction, startOfferingInstagramAuction, startOfferingTikTokAuction, startOfferingTelegramAuction })(OfferForm)