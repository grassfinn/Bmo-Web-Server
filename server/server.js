import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req,res) => {
  res.send('Hello I am BMO! What would you like to do?')
})

app.listen(port, () => {
  console.log(`Listening to port http://localhost:${port}`);
})