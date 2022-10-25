class TaskManager  {
    constructor(currentId) {
      this.tasks = [];
      this.currentId = 0;
    }
    addTask(name, description, assignedTo, dueDate) {
        const task = {
            id: this.currentId++,
            name: newTaskNameInput ,
            description: document.querySelector("#description").value,
            assignedTo: document.querySelector("#assignedTo").value,
            dueDate: document.querySelector("#dueDate").value,
            status: 'TODO'
        }
    
            this.tasks.push(task);
            console.log(this.tasks)
        }
    
    }
    
    
    
    function clickMe(){
      event.preventDefault();
      newTaskVar = new TaskManager();
      newTaskVar.addTask();
    }
    