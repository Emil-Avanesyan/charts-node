import express from 'express';
import fs from 'fs';

const app = express();
app.use(express.json())

app.get('/api/get-data', (req, res) => {
    const data = fs.readFileSync('storage/expenses-data.json')
    res.send(JSON.parse(data))

})

app.post('/api/add-expense', async (req, res) => {
    const data = fs.readFileSync('storage/expenses-data.json')
    const json = JSON.parse(data)
    json.push(req.body);
    await fs.writeFile('storage/expenses-data.json', JSON.stringify(json, undefined, 2), () => {})
    res.send(json)

})

app.listen(8000);
