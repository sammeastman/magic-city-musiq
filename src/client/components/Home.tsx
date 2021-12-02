import React, { useState, useEffect } from 'react';
import EventCards from './EventCards';
import Compose from './Compose';

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
            <div className="row">
                <Compose />
            </div>
            <div className="row">
                {events.map(event => <EventCards key={event.id} event={event}/>) }
            </div>
        </div>
    )
}

interface IHomeProps { }

export default Home