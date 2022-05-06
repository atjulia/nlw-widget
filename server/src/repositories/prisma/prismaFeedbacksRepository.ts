import { prisma } from "../../prisma"
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacksRepository"


export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create ({type, comment, screnshot}: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screnshot,
      } 
    });
  }
}
