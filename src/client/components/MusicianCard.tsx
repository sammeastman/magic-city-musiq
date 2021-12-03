import React from 'react';
import { Link } from 'react-router-dom';

const MusicianCard = (props: IMusicianCardProps) => {
    return (
        <div className="card m-3 d-flex justify-content-between align-items-center flex-row">
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">@{props.musician.name}</h6>
                <p className="card-text">{props.musician.content}</p>
                <p className="card-text">{props.musician._created}</p>
            </div>
            <div>
                <Link to={`/admin/${props.musician.id}`}>
                    <button className="btn btn-sm btn-primary">Admin Options</button>
                </Link>
            </div>
        </div>
    )
}

interface IMusicianCardProps {
    musician: {
        id: string
        name: string,
        content: string,
        _created: string
    }
}


export default MusicianCard