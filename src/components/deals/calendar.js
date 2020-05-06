import React, { Fragment } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';


const localizer = momentLocalizer(moment);

const UserCalendar = (props) => {
    let myEventsList = [];
    let dealsList = props.deals.forEach(element => {
        myEventsList.push({
            title: "Ads from " + element.dealsendernickname,
            start: moment(element.dateFrom).toDate(),
            end: moment(element.dateTo).toDate()
        });
    });
    return (
        <Fragment>
            <Calendar
                style={{ marginTop: '3%', marginBottom: '5%', minHeight: '600px', width: '100%' }}
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                defaultView='month'
            />
        </Fragment>
    )
}

export default UserCalendar