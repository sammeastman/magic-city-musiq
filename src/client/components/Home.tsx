import React, { useState, useEffect } from 'react';
import EventCard from './EventCards';
import MusicianCard from "./MusicianCards";
import bio from './artist';
import Compose from './Compose';

const Home = (props: IHomeProps) => {
    const [events, setEvents] = useState([]);
    const [musicians, setMusicians] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);
    useEffect(() => {
        fetchMusicians();
    }, []);

    const fetchEvents = async () => {
        const res = await fetch("/api/events");
        const events = await res.json();
        setEvents(events);
    }
    const fetchMusicians = async () => {
        const res = await fetch("/api/musicians");
        const events = await res.json();
        setMusicians(musicians);
    }

    return (
        <div className="container">
            <div className="row">
                <Compose />
            </div>
            <div className="row">
                {events.map(event => <EventCard key={event.eid} event={event}/>) }
            </div>
            <div className="row">
                {musicians.map(musician => <MusicianCard key={musician.mid} musician={musician}/>) }
            </div>
        </div>
    )
}

interface IHomeProps { }

export default Home