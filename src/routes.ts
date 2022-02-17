import { Express, Request, Response } from 'express';
import { createChallengeHandler } from './controller/challenge.controller'

function routes(app: Express){
  app.post('/challenge', createChallengeHandler)
}

export default routes;