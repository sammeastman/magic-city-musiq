import * as express from "express";
import db from "../db";

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		res.json(await db.musicians.all());
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
});

router.get('/:musicianid', async (req, res, next) => {
    try {
        const musicianid = req.params.musicianid;

        const dbRes = await db.musicians.one(musicianid);

        res.json(dbRes);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const mname = req.body.mname;
        const mbio = req.body.mbio;
        

        const dbRes = await db.musicians.insert(mname, mbio);

        res.send(dbRes);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

export default router;