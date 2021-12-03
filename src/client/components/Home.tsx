import React, { useState, useEffect } from 'react';
import EventCards from './EventCards';
import artist from '../components/artist';

const Home = (props: IHomeProps) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const res = await fetch("/api/events");
        const events = await res.json();
        setEvents(events);
    }

    return (
        <div className="container">
            <div className="row" >
                <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/49438960_1981305685316763_3691827692912508928_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=e3FvwZI2snsAX8_Wcx8&_nc_ht=scontent-dfw5-2.xx&oh=46c292a1ce379ff18839b24382d058c3&oe=61CEB3B2" />
                <img src="https://f4.bcbits.com/img/a1936876764_10.jpg" />
                <img src="https://greenvillejournal.com/wp-content/uploads/2021/07/GJ-July-23-St-Paul-Broken-Bones-PROVIDED.jpg" />
                <img src="https://f4.bcbits.com/img/0024996813_10.jpg" alt="" />
                <img src="https://secretstages.net/wp-content/uploads/2019/05/bouquets-organ-3-2-2000px.jpg" />
                <img src="http://static1.squarespace.com/static/55ed9bcde4b01232c29c6d8b/55ed9cb3e4b02f474cc929de/5905fa246b8f5b608390969a/1493712387159/sword.jpg?format=1500w" alt="" />
            </div>
            <div className="row">
                {/* {events.map(event => <EventCards key={event.id} event={event}/>) } */}
            </div>
        </div>
    )
}

interface IHomeProps { }

export default Home
