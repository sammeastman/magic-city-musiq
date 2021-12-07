import React from 'react';
import { Link } from 'react-router-dom';

const BioCard = (props: IBioCardProps) => {
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
                <div>
                <Link to={`/admin/${props.musician.mid}`}>
                    <button className="btn btn-sm btn-primary">Admin Options</button>
                </Link>
                </div>
            </div>
        </div>

    )
        <div className="card m-3 d-flex justify-content-between align-items-center flex-row">
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">@{props.musician.mname}</h6>
                <p className="card-text">{props.musician.mband}</p>
                <p className="card-text">{props.musician.mbio}</p>
            </div>
            <div>
                <Link to={`/admin/${props.musician.mid}`}>
                    <button className="btn btn-sm btn-primary">Admin Options</button>
                </Link>
            </div>
        </div>

<div className="card m-3 d-flex justify-content-between align-items-center flex-row">
<div className="card-body">
    <h6 className="card-subtitle mb-2 text-muted">@{props.musician.mname}</h6>
    <p className="card-text">{props.musician.mdob}</p>
    <p className="card-text">{props.musician.mzodiac}</p>
    <p className="card-text">{props.musician.mhometown}</p>
    <p className="card-text">{props.musician.mage}</p>
</div>
<div>
    <Link to={`/admin/${props.musician.mid}`}>
        <button className="btn btn-sm btn-primary">Admin Options</button>
    </Link>
</div>
</div>
<div id="social">
<a className="btn btn-primary" style={{backgroundColor: "#3b5998"}} href="#!" role="button"
  ><i className="fab fa-facebook-f"></i
></a>
<a className="btn btn-primary" style={{backgroundColor: "#55acee"}} href="#!" role="button"
  ><i className="fab fa-twitter"></i
></a>
</div>
<a className="btn btn-primary" style={{backgroundColor: "#ac2bac"}} href="#!" role="button"
  ><i className="fab fa-instagram"></i
></a>
<a className="btn btn-primary" style={{backgroundColor: "#ed302f"}} href="#!" role="button"
  ><i className="fab fa-youtube"></i
></a>
</>
    )
}

interface IBioCardProps {
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

export default BioCard