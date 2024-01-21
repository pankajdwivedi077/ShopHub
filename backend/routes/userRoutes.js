import express from "express";
import { createUser, loginUser, logoutCurrentUser, getAllUsers, getCurrentUserProfile, updateCurrentUserProfile } from '../controllers/userController.js'
import { authenticate, authorizedAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route('/').post(createUser).get(authenticate, authorizedAdmin, getAllUsers);
router.post('/auth', loginUser)
router.post('/logout', logoutCurrentUser)

router.route('/profile').get(authenticate, getCurrentUserProfile).put(authenticate, updateCurrentUserProfile);

// router.post('/', createUser)

export default router;