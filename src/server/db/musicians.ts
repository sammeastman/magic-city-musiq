import { Query } from "./index";

const one = (musicianmid: string) => Query("SELECT * FROM musicians WHERE musicians.mid = ?", [musicianmid]);

const insert = (mname: string, mbio: string) => Query(`
    insert into musicians (mname, mbio)
    values (?, ?)
`, [mname, mbio]);

export default {
    one,
    insert
}