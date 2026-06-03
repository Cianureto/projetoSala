const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'src/public')));

app.get('/api', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/public', 'index.html'));
});

if (process.env.NODE_ENV === 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} else {
    app.listen(PORT, 'localhost', () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app;