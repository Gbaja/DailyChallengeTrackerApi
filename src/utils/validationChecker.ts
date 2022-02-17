import { check } from 'express-validator/check';

export const createChallengeChecks = [
  check('title', 'title cannot be empty').not().isEmpty(),
  check('description', 'description cannot be empty').not().isEmpty(),
  check('days', 'days cannot be empty').not().isEmpty(),
  check('userEmail', 'email cannot be empty and must be a valid email address').not().isEmpty().isEmail().normalizeEmail(),
  check('startDate', 'startDate cannot be empty and must be valid ISO formatted date').not().isEmpty().isISO8601().toDate(),
]