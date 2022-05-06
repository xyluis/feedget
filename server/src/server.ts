import express from 'express'
import cors from 'cors'

import { NodemailerMailAdapter } from './adapters/nodemailter/nodemailer-mail-adapter'
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case'

const app = express()

app.use(cors())
app.use(express.json())

app.post('/feedbacks', async (request, response) => {
  const { type, comment, screenshot } = request.body

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  )

  await submitFeedbackUseCase.execute({
    type, 
    comment, 
    screenshot
  })

  return response.sendStatus(201)
})

app.listen(3333, () => console.log('HTTP Server started'))