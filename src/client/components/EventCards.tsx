import React from 'react';
import { Link } from 'react-router-dom';
​
const EventCard = (props: IEventCardProps) => {
    return (
        
     <Link to={`/${props.event.URL}`}>
            <div className="card m-3 d-flex justify-content-between align-items-center flex-row">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">@{props.event.ename}</h6>
                    <h1 className="card-text">{props.event.elocation}</h1>
                     <h1 className="card-text">{props.event.estart}</h1>
                    <h1 className="card-text">{props.event.eend}</h1>
                 </div>
            </div>
         </Link>
    )
}
​
interface IEventCardProps {
    event: {
        eid: string
        ename: string,
        elocation: string,
        estart: string,
        eend: string,
        URL: string
    }
}
​
export default EventCard 