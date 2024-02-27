import { Request, Response } from 'express'
import fetchAmazonSearchResults from './utils/fetch-amazon-search-results'

const scrape = async (req: Request, res: Response): Promise<Response> => {
  try {
    const keyword = req.query.keyword as string

    if (!keyword) {
      return res.status(400).json({ error: 'Keyword parameter is required' })
    }

    const extractedData = await fetchAmazonSearchResults(keyword)
    return res.json({ data: extractedData })
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred during scraping' })
  }
}

const amazonProductsController = {
  scrape,
}

export default amazonProductsController
