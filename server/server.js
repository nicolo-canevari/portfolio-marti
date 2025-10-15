// per avviare server: npm run server
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

// Middleware
app.use(cors())
app.use(express.json())

// Rotta di test
app.get('/', (req, res) => {
    res.send('✅ Backend Express attivo e funzionante!')
})

// Avvio del server
app.listen(PORT, () => {
    console.log(`🚀 Server backend in esecuzione su http://localhost:${PORT}`)
})
