import { Express } from 'express';
import { createChallengeHandler } from './controller/challenge.controller'
import { validateRequest } from './middlewares/validation';
import { createChallengeChecks } from './utils/validationChecker';

function routes(app: Express){
  app.post('/challenge', createChallengeChecks, validateRequest, createChallengeHandler)
}

export default routes;