import * as express from "express";
import db from "../db";

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const dbRes = await db.events.all();

        res.json(dbRes.reverse());
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.get("/:eventid", async (req, res, next) => {
    try {
        const eventid = req.params.eventid;
        

        const dbRes = await db.events.one(eventid);

        res.json(dbRes[0]);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.delete("/:eventid", async (req, res, next) => {
    try {
        const eventid = req.params.eventid;

        const dbRes = await db.events.deleteOne(eventid);

        res.send(dbRes);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const eid = req.body.eid;
        const meid = req.body.meid;
        const ename = req.body.ename;
        const elocation = req.body.elocation;
        const eStart = req.body.eStart;
        const eEnd = req.body.eEnd;

        const dbRes = await db.events.insert(meid, ename, elocation, eStart, eEnd);

        res.send(dbRes);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.put("/:eventeid", async (req, res, next) => {
    try {
        const eventeid = req.params.eventeid;
        const ename = req.body.ename;
        const elocation = req.body.elocation;
        const eStart = req.body.eStart;
        const eEnd = req.body.eEnd;

        const dbRes = await db.events.edit(ename, elocation, eStart, eEnd, eventeid);

        res.send(dbRes);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

export default router;