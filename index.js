const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([{
	name: 'Bob',
	email: 'bob@gmail.com'
	},{
	name: 'John',
	email: 'john@gamil.com'
	}	
	])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
