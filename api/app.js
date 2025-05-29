const express = require('express')
const cors = require('cors')
const crypto = require('crypto')

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  const books = [
    { id: crypto.randomUUID(), title: 'The Great Gatsby' },
    { id: crypto.randomUUID(), title: '1984' },
    { id: crypto.randomUUID(), title: 'To Kill a Mockingbird' },
  ]

  return res.json(books)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
