import { omit } from "lodash";
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