class TaskManager  {
    constructor(currentId) {
      this.tasks = [];
      this.currentId = 0;
    }
    addTask(name, description, assignedTo, dueDate) {
        const task = {
            id: this.currentId++,
            name: document.querySelector("#name").value ,
            description: document.querySelector("#description").value,
            assignedTo: document.querySelector("#assignedTo").value,
            dueDate: document.querySelector("#dueDate").value,
            status: 'TODO'
        }
    
            this.tasks.push(task);
            console.log(this.tasks)
        }
    };

    const task1 = {
      id: 1,
      name: 'Take out the trash',
      description: 'Take out the trash to the front of the house',
      assignedTo: 'Nick',
      dueDate: '2020-09-20',
      status: 'TODO'
  };
  
  const task2 = {
      id: 2,
      name: 'Cook Dinner',
      description: 'Prepare a healthy serving of pancakes for the family tonight',
      assignedTo: 'Nick',
      dueDate: '2020-09-20',
      status: 'TODO'
  };
    
    
    
    function clickMe(event){
      //event.preventDefault();
      newTaskVar = new TaskManager();
      newTaskVar.addTask();
    }
    clickMe();

    const btn = document.querySelector('btn')
    btn.onClick