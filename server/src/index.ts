import { PORT, allowedOrigins } from './config/guardEnv.js'
import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'

import './utils/syncDatabase.js'

import { logger } from './middlewares/logger.js'
import { notFound } from './middlewares/notFound.js'
import { checkErrors } from './middlewares/checkErrors.js'
import { rateLimit } from 'express-rate-limit'

import { userRouter } from './routes/user.js'
import { transactionsRouter } from './routes/transactions.js'
import { categoriesRouter } from './routes/categories.js'

const origins = allowedOrigins.split(', ')

const app = express()

// Middlewares
app.use(cookieParser())
app.use(express.json())
app.use(logger)
app.use(rateLimit())

app.use(cors({ origin: function (origin, callback) {
  if (!origin) return callback(null, true)
  if (origins.includes(origin)) return callback(null, true)

  return callback(new Error("Not allowed by CORS"))
}, credentials: true }))

// Routes
app.use('/api/user', userRouter)
app.use('/api/categories', categoriesRouter)
app.use('/api/transactions', transactionsRouter)

// Middlewares
app.use(notFound)
app.use(checkErrors)

app.listen(PORT, () => console.log(`Server Listen in PORT ${PORT}`))
