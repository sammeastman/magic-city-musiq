import * as express from 'express';
import eventsRouter from "./events";
import musiciansRouter from "./musicians";

const router = express.Router();

router.use("/events", eventsRouter);
router.use("/musicians", musiciansRouter);

export default router;