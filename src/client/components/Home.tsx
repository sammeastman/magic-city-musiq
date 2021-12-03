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
            </div>
            <div className="row">
                {/* {events.map(event => <EventCards key={event.id} event={event}/>) } */}
            </div>
        </div>
    )
}

interface IHomeProps { }

export default Home
