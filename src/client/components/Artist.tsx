import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
//import SingleArtist from "./SpotifyAPI";

const Artist = (props: IArtistProps) => {
    const history = useHistory();
    const [musicians, setMusicians] = useState({});
    const { musicianmid } = useParams<{ musicianmid: string }>()

    useEffect(() => {
        const fetchMusicians = async () => {
            const res = await fetch(`/api/musicians/${musicianmid}`);
            const data = await res.json();
            setMusicians(data[0]);
        };

        fetchMusicians();
    }, []);

    

    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://media.istockphoto.com/vectors/cartoon-rock-band-vector-vector-id621592618" className="d-block w-100" alt="sample band"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://previews.123rf.com/images/bowie15/bowie151303/bowie15130300131/18687759-group-of-musicians-playing-instruments.jpg" className="d-block w-100" alt="bandsample2"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.jakpost.net/c/2019/05/16/2019_05_16_72418_1558000777._large.jpg" className="d-block w-100" alt="bandinstruments"></img>
                    </div>
                    {/* <div>
                        <Link to={`/admin/${props.musician.mid}`}>
                            <button className="btn btn-sm btn-primary">Admin Options</button>
                        </Link> */}
                    {/* </div> */}
                </div>
            </div>
            )
            <div className="card m-3 d-flex justify-content-between align-items-center flex-row">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">@{musicians?.mname}</h6>
                    <h1 className="card-text">{musicians?.mband}</h1>
                    <h1 className="card-text">{musicians?.mbio}</h1>
                </div>
                <div>
                    {/* <Link to={`/admin/${musicians?.mid}`}>
                        <button className="btn btn-sm btn-primary">Admin Options</button>
                    </Link> */}
                </div>
            </div>

            <div className="card m-3 d-flex justify-content-between align-items-center flex-row">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">@{musicians?.mname}</h6>
                    <h1 className="card-text">{musicians?.mdob}</h1>
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

          
                <div>
            <iframe src={`https://open.spotify.com/embed/album/${musicians?.mspotifyid}`} width="500" height="380" frameBorder="0" allow="encrypted-media"></iframe>
                </div>

            {<><div id="social"> {'}'}
                {<><a className="btn btn-primary" style={{ backgroundColor: "#3b5998" }} href="#!" role="button"><i className="fab fa-facebook-f"></i></a><a className="btn btn-primary" style={{ backgroundColor: "#55acee" }} href="#!" role="button"><i className="fab fa-twitter"></i></a></>}
            </div><a className="btn btn-primary" style={{ backgroundColor: "#ac2bac" }} href="#!" role="button"><i className="fab fa-instagram"></i></a><a className="btn btn-primary" style={{ backgroundColor: "#ed302f" }} href="#!" role="button"><i className="fab fa-youtube"></i></a></>}
            
        </>

    )
}

interface IArtistProps {
    musician: {
        mid: string
        mname: string,
        mband: string,
        mbio: string,
        mdob: string,
        mzodiac: string,
        mspotifyid: string,
        mhometown: string,
        mage: string
    }
}

export default Artist