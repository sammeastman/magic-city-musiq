import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Admin = (props: IAdminProps) => {
    const [event, setEvent] = useState<IEvent>({
        eid: null,
        mname: null,
        meid: null,
        ename: null,
        elocation: null,
        estart: null,
        eend: null,
    });
    const [ename, setEname] = useState('');
    const [meid, setMeid] = useState('');
    const [elocation, setElocation] = useState('');
    const [estart, setEstart] = useState('');
    const [eend, setEend] = useState('');
    const { eventeid } = useParams<{ eventeid: string }>();
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/events/${eventeid}`);
            const event = await res.json();
            setEvent(event);
            setEname(event.Ename);
            setElocation(event.Elocation);
            setEstart(event.Estart);
            setEend(event.Eend);
        })()
    }, []);

    const handleEventChange = (ename: string) => setEname(ename);

    const handleDeleteEvent = async (eid: string) => {
        await fetch(`/api/events/${eid}`, {
            method: "DELETE"
        });

        history.push("/");
    }

    const handleUpdateEvent = async (eventeid: string, ename: string, elocation: string, estart: string, eend: string) => {
        await fetch(`/api/events/${eventeid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ename, elocation, estart, eend })
        });

        history.push("/");
    }

    return (
        <>
            <div className="card m-3 d-flex justify-content-between align-items-center flex-row">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">@{event.ename}</h6>
                    <input type="text" value={meid} onChange={(e) => handleEventChange(e.target.value)}></input>
                    <p className="card-text">{event.ename}</p>
                    <p className="card-text">{event.elocation}</p>
                    <p className="card-text">{event.estart}</p>
                    <p className="card-text">{event.eend}</p>
                </div>
                <div>
                    <i className="Destroy Record" onClick={() => handleDeleteEvent(event.eid)}></i>
                    <button className="btn btn-sm btn-dark" onClick={() => handleUpdateEvent(event.eid, ename, elocation, estart, eend)}>Save Edit</button>
                </div>
            </div>
        </>
    )
}

interface IAdminProps { }

interface IEvent {
    eid: string | null
    ename: string | null,
    mname: string | null,
    meid: string | null,
    elocation: string | null,
    estart: string | null,
    eend: string | null,
}

export default Admin