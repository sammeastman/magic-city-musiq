import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = (props: IEventCardProps) => {
    return (
        <div className="card m-3 d-flex justify-content-between align-items-center flex-row">
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">@{props.event.ename}</h6>
                <p className="card-text">{props.event.elocation}</p>
                <p className="card-text">{props.event.estart}</p>
                <p className="card-text">{props.event.eend}</p>
            </div>
            <div>
                <Link to={`/admin/${props.event.eid}`}>
                    <button className="btn btn-sm btn-primary">Admin Options</button>
                </Link>
            </div>
        </div>
    )
}

interface IEventCardProps {
    event: {
        eid: string
        ename: string,
        elocation: string,
        estart: string,
        eend: string,
    }
}

export default EventCard