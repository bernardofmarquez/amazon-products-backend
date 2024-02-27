import { Router } from 'express'
import amazonProductsController from './modules/amazon-products/amazon-products-controller'

const amazonProductsRouter = Router()

amazonProductsRouter.get('/api/scrape', amazonProductsController.scrape)

export default amazonProductsRouter
