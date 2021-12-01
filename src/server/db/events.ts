import { Query } from "./index";

const all = () => Query("SELECT events.eid, events.ename, events.elocation, events.estart, events.eend, musicians.mname FROM events JOIN musicians on events.meid = musicians.mid");

const one = (eventeid: string) => Query("SELECT events.eid, events.ename, events.elocation, events.eStart, events.eEnd, musicians.mname FROM events JOIN musicians on events.meid = musicians.mid WHERE events.eid = ?", [eventeid, ]);

const deleteOne = (eventeid: string) => Query("DELETE FROM events WHERE eid = ?", [eventeid]);

const insert = (meid: string, ename: string, elocation: string, eStart: string, eEnd: string) => Query("INSERT INTO events (meid, ename, elocation, eStart, eEnd) VALUes (1, 'Annual Christmas Festival', 'Alabama Theater', '2021-12-24 16:00:00', '19:00:00')");

const edit = (ename: string, elocation: string, eStart: string, eEnd: string, eventeid: string) => Query("UPDATE events SET (ename, elocation, eStart, eEnd, eid) = (?, ?, ?, ?, ?) WHERE events.eid = ?", [ename, elocation, eStart, eEnd, eventeid])

export default {
    all,
    one,
    deleteOne,
    insert,
    edit
}