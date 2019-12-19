const express = require('express');

const router = express.Router();
const asyncWrap = require('../middlewares/asyncWrap');
const auth = require('../middlewares/auth');
const authAdmin = require('../middlewares/authAdmin');
const {
  signup,
  login,
  logout,
  logoutAllDevice,
  getInfoUser,
  updateInfoUser,
  uploadAvatar,
  getAllUser,
} = require('../controllers/user.controller');

router.post('/signup', asyncWrap(signup));
router.post('/login', asyncWrap(login));
router.post('/logout', auth, asyncWrap(logout));
router.post('/logout-all', auth, asyncWrap(logoutAllDevice));
router.get('/', auth, asyncWrap(getInfoUser));
router.patch('/', auth, asyncWrap(updateInfoUser));
router.patch('/upload-avatar', auth, asyncWrap(uploadAvatar));
router.get('/get-list', authAdmin, asyncWrap(getAllUser));

module.exports = router;
