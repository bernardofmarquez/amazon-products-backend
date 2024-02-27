import express from 'express'
import amazonProductsRouter from './routes'

const app = express()

app.use(express.json())

app.use(amazonProductsRouter)

export { app }
