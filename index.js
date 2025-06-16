import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from "method-override";

const app = express();
const port = 3000;

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let taskList = [];

app.get("/", (req, res) => {
    res.render("index.ejs", {taskList});
});

app.get("/create", (req, res) => {
    res.render("task-creation.ejs");
});

app.post("/task-list", (req, res) => {
    const task = {
        taskTitle: req.body.title,
        taskType: req.body.type,
        taskDue: req.body.date
    };
    taskList.push(task);
    res.redirect("/");
})

app.get("/task/:id/edit", (req, res) => {
  const id = req.params.id;
  const task = taskList[id];

  if (task) {
    res.render("edit.ejs", { task, id });
  } else {
    res.sendStatus(404);
  }
});

app.patch("/task/:id", (req, res) => {
  const id = req.params.id;
  const task = taskList[id];

  if (task) {
    task.taskTitle = req.body.title;
    task.taskType = req.body.type;
    task.taskDue = req.body.date;
    res.redirect("/");
  } else {
    res.sendStatus(404);
  }
});

app.delete("/task/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (taskList[id]) {
    taskList.splice(id, 1); // remove 1 item at that index
  }
  res.redirect("/");
});

app.listen(port, (req, res) => {
    console.log(`The server is running on port ${port}.`);
});