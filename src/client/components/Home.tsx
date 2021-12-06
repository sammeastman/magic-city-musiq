import React, { useState, useEffect } from 'react';
import EventCard from './EventCards';
import MusicianCard from "./MusicianCards";
​import { Link } from 'react-router-dom';
​
const Home = (props: IHomeProps) => {
    const [events, setEvents] = useState([]);
    const [musicians, setMusicians] = useState([]);
​
    useEffect(() => {
        fetchEvents();
    }, []);
​
    useEffect(() => {
        fetchMusicians();
    }, []);
​
    const fetchEvents = async () => {
        const res = await fetch("/api/events");
        const events = await res.json();
        setEvents(events);
    }
​
    const fetchMusicians = async () => {
        const res = await fetch("/api/musicians");
        const musicians = await res.json();
        setMusicians(musicians);
    }
​
    return (
        <div className="container">
            
            
            
            
            <div className="row">
            </div>
            
                <Link to="/artist/2">
                <img src="https://f4.bcbits.com/img/a1936876764_10.jpg" />
                </Link>
                <Link to="artist/4">
                <img src="https://greenvillejournal.com/wp-content/uploads/2021/07/GJ-July-23-St-Paul-Broken-Bones-PROVIDED.jpg" />
                </Link>
                <Link to="artist/5">
                <img src="https://f4.bcbits.com/img/0024996813_10.jpg" alt="" />
                </Link>
                <Link to="artist/3">
                <img src="https://secretstages.net/wp-content/uploads/2019/05/bouquets-organ-3-2-2000px.jpg" />
                </Link>
                <Link to="artist/5">
                <img src="http://static1.squarespace.com/static/55ed9bcde4b01232c29c6d8b/55ed9cb3e4b02f474cc929de/5905fa246b8f5b608390969a/1493712387159/sword.jpg?format=1500w" alt="" />
                </Link>
                <div className="row">
                {events.map(event => <EventCard key={event.eid} event={event}/>) }
            </div>
            <div className="row">
                {musicians.map(musician => <MusicianCard key={musician.mid} musician={musician}/>) }
           
           
           
            </div>

        </div>
        
    )
}
​
interface IHomeProps { }
​
export default Home