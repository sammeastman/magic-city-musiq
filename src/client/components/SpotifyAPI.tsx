import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleArtist = (props: ISingleArtistProps) => {
     const [musicians, setMusicians] = useState([]);
     const { id } = useParams<{ id: string }>()

     useEffect(() => {
          fetchMusicians();
     }, []);

     const fetchMusicians = async () => {
          const res = await fetch(`/api/musicians/${id}`);
          const musicians = await res.json();
          setMusicians(musicians);
     }

     return (
          <div className="container">
               <div className="row">
                    {musicians.map(musician => (
                         <div>
                              <iframe src={`https://open.spotify.com/embed/album/${musician.mspotifyid}`} width="300" height="380" frameBorder="0" allowTransparency={true} allow="encrypted-media"></iframe>
                         </div>
                    ))}
               </div>
          </div>
     )
}

interface ISingleArtistProps { }

export default SingleArtist