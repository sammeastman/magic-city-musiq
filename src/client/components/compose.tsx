import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Compose: React.FC = () => {
    const history = useHistory();
    const [mname, setMname] = useState('');
    const [mbio, setMbio] = useState('');
    const [mspotifyid, setMspotifyid] = useState('');
    const [mdob, setMdob] = useState('');
    const [mzodiac, setMzodiac] = useState('');
    const [mhometown, setMhometown] = useState('');
    const [mage, setMage] = useState('');
    const [ename, setEname] = useState('');

    const handlePostEvent =  async () => {
        const res = await fetch('/api/musicians', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mname, mbio, mspotifyid, mdob, mzodiac, mhometown, mage })
        });

        const musicianInsert = await res.json();

        await fetch('/api/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ename, meid: musicianInsert.insertId })
        })
    }

    return (
        <div> 
            <div className="form-group">
                <label htmlFor="name-input">Musicianname</label>
                <input
                    type="text"
                    className="form-control"
                    id="name-input"
                    aria-describedby="nameHelp"
                    placeholder="Enter Musician Name"
                    value={mname}
                    onChange={(e) => setMname(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="spotify-input">Spotify Id</label>
                <input
                    type="text"
                    className="form-control"
                    id="spotify-input"
                    aria-describedby="spotifyHelp"
                    placeholder="Enter Spotify Id"
                    value={mspotifyid}
                    onChange={(e) => setMspotifyid(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="dob-input">Musician DOB</label>
                <input
                    type="Date"
                    className="form-control"
                    id="DOB-input"
                    placeholder="DOB"
                    value={mdob}
                    onChange={(e) => setMdob(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="zodiac-input">Musician Zodiac</label>
                <input
                    type="text"
                    className="form-control"
                    id="zodiac-input"
                    aria-describedby="zodiacHelp"
                    placeholder="Enter Musician Zodiac Sign"
                    value={mzodiac}
                    onChange={(e) => setMzodiac(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="home-input">Musician Hometown</label>
                <input
                    type="text"
                    className="form-control"
                    id="home-input"
                    aria-describedby="homeHelp"
                    placeholder="Enter Musician Hometown"
                    value={mhometown}
                    onChange={(e) => setMhometown(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="age-input">Musician Age</label>
                <input
                    type="Int"
                    className="form-control"
                    id="age-input"
                    aria-describedby="ageHelp"
                    placeholder="Enter Musician Age"
                    value={mage}
                    onChange={(e) => setMage(e.target.value)}
                />
            </div>
            <textarea
                name="bio-input"
                id="bio-input"
                cols={30}
                rows={10}
                defaultValue={mbio}
                onChange={(e) => setMbio(e.target.value)}
            ></textarea>
            <button type="submit" className="btn btn-primary" onClick={() => handlePostEvent()}>Submit</button>
        </div>
    )
}

export default Compose