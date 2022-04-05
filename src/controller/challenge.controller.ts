import { Request, Response } from 'express';

import { createChallenge, getChallenges } from '../services/challenge.service';
import loggger from '../utils/logger';

export async function createChallengeHandler(req: Request, res: Response){
  try {
    const challenge = await createChallenge(req.body);
    return res.send(challenge);
  } catch (error: any) {
    loggger.error(error)
    return res.status(500).send(error.message)
  }
}

interface Query {
  status: string;
}

export async function getChallengesHandler(req: Request<{}, {}, {}, Query>, res: Response){
  try {
    const challenges = await getChallenges(req.user.email, req.query.status);
    return res.send(challenges);
  } catch (error: any) {
    loggger.error(error)
    return res.status(500).send(error.message)
  }
}