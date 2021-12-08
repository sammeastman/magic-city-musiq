import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";

//import SingleArtist from "./SpotifyAPI";
const Artist = (props: IArtistProps) => {
    const history = useHistory();
    const [musicians, setMusicians] = useState({});
    const { musicianmid } = useParams<{ musicianmid: string }>();

    useEffect(() => {
        const fetchMusicians = async () => {
            const res = await fetch(`/api/musicians/${musicianmid}`);
            const data = await res.json();
            setMusicians(data[0]);
        };
        fetchMusicians();
    }, []);

    return (
        
        <div className="container bio-container">
            
            <div className="row">
                <div className="d-flex flex-column column h-100">
                
                    <img
                        src="https://i1.sndcdn.com/avatars-000244528170-lwj2hc-t500x500.jpg"
                        className="d-block w-100 mx-auto mb-3 band-img"
                        alt="sample band"
                    />

                    <div className="spotify-box">
                        <iframe
                            src={`https://open.spotify.com/embed/album/${musicians?.mspotifyid}`}
                            width="400"
                            height="500"
                            frameBorder="0"
                            allow="encrypted-media"
                        ></iframe>
                        <div className="social">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBID9Fih7-sURQoZlBYnPmjiQAvnH0JzLsw&usqp=CAU" className="m-1" alt="" />
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column column h-100">
                    <div id="card-container">
                        <div className="card m-3 d-flex justify-content-between align-items-center flex-row">
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">
                                    @{musicians?.mname}
                                </h6>
                                <h1 className="card-text">{musicians?.mband}</h1>
                                <h1 className="card-text">{musicians?.mbio}</h1>
                            </div>
                            <div>
                                {/* <Link to={`/admin/${musicians?.mid}`}>
                        <button className="btn btn-sm btn-primary">Admin Options</button>
                    </Link> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column column h-100">
                    <div id="card-container">
                        <div className="card m-3 d-flex justify-content-between align-items-center flex-row yop">
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">
                                    @{musicians?.mname}
                                </h6>
                                {musicians?.mdob ? <h1 className="card-text">{moment(musicians?.mdob).format("LL")}</h1> : null}
                                <h1 className="card-text">{musicians?.mzodiac}</h1>
                                <h1 className="card-text">{musicians?.mhometown}</h1>
                                <h1 className="card-text">{musicians?.mage}</h1>
                            </div>
                            <div>
                                {/* <Link to={`/admin/${props.musicians.mid}`}>
                        <button className="btn btn-sm btn-primary">Admin Options</button>
                    </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface IArtistProps {
    musician: {
        mid: string;
        mname: string;
        mband: string;
        mbio: string;
        mdob: string;
        mzodiac: string;
        mspotifyid: string;
        mhometown: string;
        mage: string;
    };
}

export default Artist;