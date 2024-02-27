import axios from 'axios'
import * as cheerio from 'cheerio'
import { AmazonProduct } from '../../../interfaces/amazon-product'

const fetchAmazonSearchResults = async (keyword: string): Promise<AmazonProduct[]> => {
  const response = await axios.get(`https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
    },
  })

  const $ = cheerio.load(response.data)

  let count = 0

  const amazonProducts: AmazonProduct[] = []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, consistent-return
  $('.s-result-item').each((index: any, element: any) => {
    if (count < 5) {
      const title = $(element).find('.s-title-instructions-style').text().trim()
      const rating = $(element).find('.a-icon-star-small .a-icon-alt').text()
      const reviews = $(element).find('.a-link-normal .s-underline-text').text().trim()
      const url = $(element).find('h2.a-size-mini a').attr('href')
      if (title && rating && url && reviews) {
        const ratingNumber: number = parseFloat(rating.split(' ')[0])
        const amazonProduct = {
          title,
          rating: ratingNumber,
          reviewsNumber: parseInt(reviews, 10),
          imageUrl: url,
        }
        amazonProducts.push(amazonProduct)
        count++
      }
    }
  })

  return amazonProducts
}

export default fetchAmazonSearchResults
