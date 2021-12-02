import React from 'react';
import { Link } from 'react-router-dom';

const BandCarousel = (props: IBandCarouselProps) => {
    return (
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
                <Link to={`/admin/${props.events.id}`}>
                    <button className="btn btn-sm btn-primary">Admin Options</button>
                </Link>
                </div>
            </div>
        </div>

    )
}

interface IBandCarouselProps {
    events: any;
    musician: {
        mid: string
        mname: string,
        meid: string,
        mbio: string,
        mdob: Date,
        mcity: string,
        msign: string,
        mspotify: string,
        mfb: URL,
        minsta: URL;
        myt: URL,
        mtwit: URL,

    }
}

export default BandCarousel