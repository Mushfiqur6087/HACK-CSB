
import express from 'express';

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
import { createBooking, getAllBookings, getBookings } from '../controllers/bookingController.js';

const router = express.Router();


router.post ('/', verifyUser, createBooking);
router.get ('/:id', verifyUser, getBookings);
router.get ('/', verifyAdmin, getAllBookings);


export default router;