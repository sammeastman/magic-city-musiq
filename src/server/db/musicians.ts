import { Query } from "./index";

const all = async () => Query('SELECT * FROM Musicians');


const post = () => Query("SELECT * FROM musicians JOIN events on events.meid = musicians.mid");


const one = (musicianmid: string) => Query("SELECT * FROM musicians WHERE musicians.mid = ?", [musicianmid]);

const insert = (mname: string, mbio: string, mspotifyid: string, mdob: string, mzodiac: string, mhometown: string, mage: string) => Query(`
    insert into musicians (mname, mbio, mspotifyid, mdob, mzodiac, mhometown, mage)
    values (?, ?, ?, ?, ?, ?, ?)
`, [mname, mbio, mspotifyid, mdob, mzodiac, mhometown, mage]);

export default {
    all,
  post,
    one,
    insert
}