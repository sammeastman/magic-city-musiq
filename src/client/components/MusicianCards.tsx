import React from 'react';
import { Link } from 'react-router-dom';
​
const MusicianCard = (props: IMusicianCardProps) => {
    return (
        <div className="card m-3 d-flex justify-content-between align-items-center flex-row">
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">@{props.musician.mname}</h6>
                <p className="card-text">{props.musician.mbio}</p>
                <p className="card-text">{props.musician.mspotifyid}</p>
                <p className="card-text">{props.musician.mdob}</p>
                <p className="card-text">{props.musician.mzodiac}</p>
                <p className="card-text">{props.musician.mhometown}</p>
                <p className="card-text">{props.musician.mage}</p>
​
            </div>
            <div>
            <Link to = {`/artist/${props.musician.mid}`}></Link>
            </div>
        </div>
    )
}
​
interface IMusicianCardProps {
    musician: {
        mid: string
        mname: string,
        mbio: string,
        mspotifyid: string,
        mdob: string,
        mzodiac: string,
        mhometown: string,
        mage: string,
    }
}
​
export default MusicianCard