const express = require('express');
const { body } = require('express-validator');
const { addStudent, loginStudent } = require('../controllers/studentController');

const router = express.Router();

// Student Registration
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('A valid email address is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('phone').notEmpty().withMessage('Phone number is required'),
    body('score').isNumeric().withMessage('Score must be a number'),
    body('category').isIn(['general', 'obc', 'sc', 'st']).withMessage('Invalid category'),
    body('preferredBranch').notEmpty().withMessage('Preferred branch is required'),
    body('state').notEmpty().withMessage('State is required')
  ],
  addStudent
);

// Student Login
router.post('/login', loginStudent);

module.exports = router;
