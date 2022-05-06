import express from 'express'
import nodemailer from 'nodemailer'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailerMailAdapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prismaFeedbacksRepository';
import { SubmitFeedbackUseCase } from './use-cases/submitFeedbacksUseCases';

export const routes = express.Router()

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2b0455c2e7e619",
    pass: "62d346ec33ed1d"
  }
});

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screnshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screnshot
  })

   return res.status(201).send()
})