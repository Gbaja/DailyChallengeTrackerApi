import { Express } from 'express';
import { createChallengeHandler, getChallengesHandler } from './controller/challenge.controller'
import { validateRequest } from './middlewares/validation';
import { createChallengeChecks } from './utils/validationChecker';

declare global {
  namespace Express {
      export interface Request {
          user: {email: string}
      }
  }
}

function routes(app: Express){
  app.post('/challenge', createChallengeChecks, validateRequest, createChallengeHandler)
  app.get('/challenges', getChallengesHandler)
}

export default routes;