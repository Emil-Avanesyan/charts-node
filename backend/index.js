import express from 'express';

const data = [
    {date: 1, name: 'Jack', type: 'Shopping', amount: 5500, color: 'red'},
    {date: 2, name: 'Joe', type: 'Eating', amount: 3500, color: 'yellow'},
    {date: 4, name: 'Arthur', type: 'Car rent', amount: 3000, color: 'blue'},
    {date: 8, name: 'Gael', type: 'House rent', amount: 4550, color: 'black'},
    {date: 9, name: 'Bob', type: 'Apartment', amount: 16000, color: 'pink'}
]

const app = express();
app.use(express.json())

app.get('/api/get-data', (req, res) => {

    res.send(data)

})

app.listen(8000);
