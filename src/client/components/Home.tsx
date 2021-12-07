import React, { useState, useEffect } from "react";
import EventCards from "./EventCards";
import artist from "../components/artist";

const Home = (props: IHomeProps) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const res = await fetch("/api/events");
    const events = await res.json();
    setEvents(events);
  };

  return (
    <div className="container">
      <h2>ARTISTS</h2>
      <div className="row">
        <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/49438960_1981305685316763_3691827692912508928_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=e3FvwZI2snsAX8_Wcx8&_nc_ht=scontent-dfw5-2.xx&oh=46c292a1ce379ff18839b24382d058c3&oe=61CEB3B2" />
        <img src="https://f4.bcbits.com/img/a1936876764_10.jpg" />
        <img src="https://greenvillejournal.com/wp-content/uploads/2021/07/GJ-July-23-St-Paul-Broken-Bones-PROVIDED.jpg" />
        <img src="https://f4.bcbits.com/img/0024996813_10.jpg" alt="" />
        <img src="https://secretstages.net/wp-content/uploads/2019/05/bouquets-organ-3-2-2000px.jpg" />
        <img
          src="http://static1.squarespace.com/static/55ed9bcde4b01232c29c6d8b/55ed9cb3e4b02f474cc929de/5905fa246b8f5b608390969a/1493712387159/sword.jpg?format=1500w"
          alt=""
        />
      </div>
      <div className="row-two">
        <img
          src="https://saturnbirmingham.com/wp-content/uploads/2021/12/ed35c00fe7534fa5ad20f6b0d3ac9a1c.imagejpeg.624725.laughgarden-700x837.jpg"
          alt=""
        />
        <img
          src="https://saturnbirmingham.com/wp-content/uploads/2021/12/5ec2c1f5abbd4e4abfd3f77fb9cbe373.imagejpeg.1092946.dujour-700x989.jpg"
          alt=""
        />
        <img
          src="https://saturnbirmingham.com/wp-content/uploads/2021/08/d497b57318c24e10ba9132d461895c7f.imagejpeg.18298061.HEHPhoto5-700x467.jpg"
          alt=""
        />
        <img
          src="https://saturnbirmingham.com/wp-content/uploads/2021/11/82b8b9abd264433fa8cd09961a9f3636.imagejpeg.4776836.phantomlimbreleaseshow-700x1082.jpg"
          alt=""
        />
        <img
          src="https://saturnbirmingham.com/wp-content/uploads/2021/08/b4cf212077bc4a65a742c3d0625c8ae2.imagejpeg.1697581.FayePressShot-700x875.jpg"
          alt=""
        />
        <img
          src="https://saturnbirmingham.com/wp-content/uploads/2021/11/aa399609a3144a72b06b3ceb9b8fdfe2.imagejpeg.230149.waxahatchee-by-christopher-good__main_artist_photo.jpg"
          alt=""
        />

        {/* {events.map(event => <EventCards key={event.id} event={event}/>) } */}
      </div>
    </div>
  );
};

interface IHomeProps {}

export default Home;
