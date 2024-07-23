const tasks = require('../tasks'); 
let currentId = tasks.length + 1; 
exports.createTask = (req, res) => { 
const { name } = req.body; 
const task = { id: currentId++, name, completed: false }; 
tasks.push(task); 
res.status(201).json(task); 
}; 
exports.getAllTasks = (req, res) => { 
res.status(200).json(tasks); 
}; 
exports.getTaskById = (req, res) => { 
  const { id } = req.params; 
  const task = tasks.find(task => task.id === parseInt(id)); 
  if (!task) { 
    return res.status(404).json({ message: 'Task not found' }); 
  } 
  res.status(200).json(task); 
}; 
 
exports.updateTask = (req, res) => { 
  const { id } = req.params; 
  const { name, completed } = req.body; 
  const task = tasks.find(task => task.id === parseInt(id)); 
  if (!task) { 
    return res.status(404).json({ message: 'Task not found' }); 
  } 
  if (name) task.name = name; 
  if (completed !== undefined) task.completed = completed; 
  res.status(200).json(task); 
}; 
 
exports.deleteTask = (req, res) => { 
  const { id } = req.params; 
  const taskIndex = tasks.findIndex(task => task.id === parseInt(id)); 
  if (taskIndex === -1) { 
    return res.status(404).json({ message: 'Task not found' }); 
  } 
  tasks.splice(taskIndex, 1); 
  res.status(200).json({ message: 'Task deleted' }); 
};