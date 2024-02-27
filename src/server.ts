import { app } from './app'
import fetchAmazonSearchResults from './modules/amazon-products/utils/fetch-amazon-search-results'

const PORT = process.env.PORT || '5002'

fetchAmazonSearchResults('laptop')

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
))

export default server
