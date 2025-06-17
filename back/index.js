const express = require('express');
const cors = require('cors');

const { Rover, Position, Grid } = require('./rover');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const grid = new Grid(5, 5);
const rover = new Rover(new Position(0, 0), 'N', grid);

app.get('/', (req, res) => {
  res.send('🛰️ API Mars Rover active !');
});

app.post('/rover/command', (req, res) => {
    const { command } = req.body;

    if (!command || typeof command !== 'string') {
        return res.status(400).json({ error: 'Invalid command' });
    }

    for (let c of command.toUpperCase()) {
        if (c === 'M') rover.move();
        else if (c === 'B') rover.moveBackward();
        else if (c === 'L') rover.turnLeft();
        else if (c === 'R') rover.turnRight();
        else {
            return res.status(400).json({ error: `Invalid command character: ${c}` });
        }

        try {
            res.json({ x: rover.position.x, y: rover.position.y, direction: rover.direction });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});