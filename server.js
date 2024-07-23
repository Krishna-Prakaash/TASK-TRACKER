const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express(); 
const port = 3000; 
app.use(bodyParser.json()); 
const taskRoutes = require('./routes/taskRoutes'); 
app.use('/api/tasks', taskRoutes); 
// Default route for the root URL 
app.get('/', (req, res) => { 
res.send('Welcome to the Task Tracker API'); 
}); 
app.listen(port, () => { 
console.log(`Server is running on http://localhost:${port}`); 
});