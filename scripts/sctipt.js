const userInput = document.querySelector('.form__taskInput--js');

const taskList = [
    {
        taskName: 'task1',
        done: true
    },
    {
        taskName: 'task2',
        done: false
    },
];

const toggleDontTask = () => {
    const taskDoneBtns = document.querySelectorAll('.main__taskDoneBtn--js');
    taskDoneBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            taskList[index].done = !taskList[index].done;
            renderContent();
        })
    })
}

const deleteTask = () => {
    const taskDeleteBtns = document.querySelectorAll('.main__taskDeleteBtn--js');
    taskDeleteBtns.forEach((btn, index) => {
        btn.addEventListener('click', ()=>{
            taskList.splice(index,1);
            renderContent();
        })
        
    })
}



const buttonsFunctionality = () => {
    toggleDontTask();
    deleteTask();
}

const taskContentValidation = () => {
    if ((userInput.value.trim()).length >= 3) {
        return true;
    } else {
        return false;
    }
};

const addNewTask = () => {
    const button = document.querySelector('.form__addTaskBtn--js');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (taskContentValidation()) {
            taskList.push({
                taskName: userInput.value,
                done: false
            });
            renderContent();
            userInput.value = '';

        } 
        userInput.focus();

    })
}
const renderContent = () => {
    const taskListElement = document.querySelector('.main__tasksList');
    taskListElement.innerHTML = '';
    let result = '';
    taskList.forEach(({ taskName, done }) => {
        result += `
         <li class="main__taskItem">
            <button class="main__taskBtn main__taskDoneBtn--js" >
                ${!done ? "✔️" : "❌"}
            </button>
            <span class="main__taskName" style="${done?'text-decoration:line-through':''}">${taskName}</span>
            <button class="main__taskBtn main__taskDeleteBtn--js">🗑️</button>
         </li>
         `
    });
    taskListElement.innerHTML = result;
    buttonsFunctionality();
}



const init = () => {
    renderContent();
    addNewTask();

}
init();