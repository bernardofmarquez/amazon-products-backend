import { app } from './app'

const PORT = process.env.PORT || '5002'

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
))

export default server
