import mongoose from 'mongoose';

export interface ChallengeDocument extends mongoose.Document {
  _id: string,
  userEmail: string,
  title: string,
  description: string,
  days: number,
  startDate: Date
  createdAt: Date,
  updatedAt: Date
};

const challengeSchema = new mongoose.Schema(
  {
    userEmail: { 
      type: String,
      required: true,
    },
    title: { 
      type: String,
      required: true
    },
    description: { 
      type: String,
      required: true
    },
    days: { 
      type: String,
      required: true
    },
    startDate: { 
      type: Date,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);
  
const ChallengeModel = mongoose.model("Challenge", challengeSchema);

export default ChallengeModel;