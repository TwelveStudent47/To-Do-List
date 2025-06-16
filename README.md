# To-Do List

A simple and interactive To-Do List web application built with Node.js, Express, and EJS. Users can create, edit, and delete tasks with a clean and responsive interface.

---

## Features

- 📝 Add new tasks with title, type, and due date
- ✏️ Edit existing tasks
- ❌ Delete tasks
- 📋 View all tasks on the main page
- 💾 All data is stored in memory (resets on server restart)
- 🎨 Responsive UI with custom CSS and Bootstrap

---

## Project Structure

```
To-Do List/
├── index.js
├── package.json
├── public/
│   ├── js/
│   │   └── jquery.js
│   └── styles/
│       └── style.css
└── views/
    ├── edit.ejs
    ├── index.ejs
    ├── task-creation.ejs
    └── partials/
        ├── footer.ejs
        ├── header-task-creation.ejs
        └── header.ejs
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/To-Do-List.git
    cd To-Do-List
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the server:**
    ```bash
    node index.js
    ```

4. **Open your browser and visit:**
    ```
    http://localhost:3000
    ```

---

## Usage

- **View Tasks:** All tasks are listed on the homepage.
- **Add Task:** Click the "Add Task" button to create a new task.
- **Edit Task:** Click the "Edit" button next to a task to update its details.
- **Delete Task:** Click the "Delete" button to remove a task.

---

## Technologies Used

- **Node.js** & **Express** – Backend server
- **EJS** – Templating engine for dynamic HTML
- **Bootstrap** – Responsive design
- **jQuery** – For interactive UI (optional)
- **Custom CSS** – For additional styling

---

## Limitations

- Tasks are stored in memory only. All data will be lost when the server restarts.
- No user authentication or persistent storage.

---

## License

This project is licensed under the MIT License.

---

## Author

Created by Kevin Laczko.  
Feel free to fork, contribute, and share!
