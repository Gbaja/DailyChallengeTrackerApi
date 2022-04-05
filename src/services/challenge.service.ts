import { DocumentDefinition } from "mongoose";

import ChallengeModel, { ChallengeDocument} from "../models/challenge.model";

// Omitting these two properties cos they are auto grenerated by mongoose
export async function createChallenge(input: DocumentDefinition<Omit<ChallengeDocument, 'createdAt' | 'updatedAt'>>) {
  try {
    const challenge = await ChallengeModel.create(input);
    return challenge
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function getChallenges(userEmail: string, status: string) {
  try {
    const challenges = await ChallengeModel.find({ userEmail, status }, { __v: 0, createdAt: 0, updatedAt: 0, _id: 0, userEmail: 0});

    return challenges
  } catch (error: any) {
    throw new Error(error)
  }
}