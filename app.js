const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send(`
		<h1>Lazy Pratim's club working on it</h1>
		`)
})

const port = process.env.port || 3000
app.listen(port, () => {
	console.log(`the process is running on port ${port}`)
})
