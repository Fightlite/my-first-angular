const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const { people } = require('./data');

// Use cors middleware to handle origin
app.use(cors());
app.options('*', cors());
// Use body parsing middleware to get body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));

app.get('/', (req,res) => {
    const students = people.students
    res.status(200).json({ data: students })
})

app.get('/students/:id', (req, res) => {
    const {id} = req.params

    const student = people.students.find(student => student.id === Number(id))
    if(!student){
        res.status(404).json({ success:false, msg: `Student with ${id} not found`})
    }
    res.status(200).json({ success: true, data: student })
})

app.post('/students', (req,res) => {
    const student = req.body
    if(!student){
        res.status(400).json({ success:false, msg: 'Please provide student information'})
    }
    people.students.push(student);
    res.status(201).json({ success:true, data: people})
})


app.put('/students/:id', (req, res) => {
    const {id} = req.params
    const editStudent = req.body

    const student = people.students.find(student => student.id === Number(id))
    if(!student){
        res.status(404).json({ success:false, msg: `Student with ${id} not found`})
    }

    const newStudents = people.students.map(student => {
        if(student.id === Number(id)){
            for (let k in editStudent){
                student[k] = editStudent[k]
            }
        }
        return student
    })
    people.students = newStudents;
    res.status(200).json({ success: true, data: people.students })
})

app.delete('/students/:id', (req, res) => {
    const {id} = req.params
    if (!id){
        res.status(404).json({ success:false, msg: `Student with ${id} not found`})
    }
    const studentIndex = people.students.findIndex(student => student.id === Number(id))
    const newStudents = people.students.splice(studentIndex, 1)
    res.status(200).json({ success: true, data: newStudents})
})

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
})
