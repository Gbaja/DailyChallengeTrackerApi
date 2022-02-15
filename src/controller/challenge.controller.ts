import { Request, Response } from 'express';
import { omit } from 'lodash';

import { createChallenge } from '../services/challenge.service';

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