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

const toggleDontTask = () =>{
    const taskDoneBtns = document.querySelectorAll('.main__taskDoneBtn--js');
    taskDoneBtns.forEach((btn, index) => {
        btn.addEventListener('click', ()=>{
            console.log("element clicked");
            taskList[index].done = !taskList[index].done;
            renderContent();
        })
    })
    
}

const buttonsFunctionality = () => {
    toggleDontTask();
}

const taskContentValidation = () => {
    if ((userInput.value.trim()).length >= 3) {
        return true;
    } else {
        return false;
    }
};

const addNewTask = () => {
    const validationAllert = document.querySelector('.form__statusAlert');
    const button = document.querySelector('.form__addTaskBtn--js');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (taskContentValidation()) {
            validationAllert.classList.remove('form__statusAlert--active');
            taskList.push({
                taskName: userInput.value,
                done: false
            });
            renderContent();
            userInput.value = '';
            
        }else{
            validationAllert.classList.add('form__statusAlert--active');
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
            <button class="main__taskBtn main__taskDoneBtn--js">${done ? "✔️" : "❌"}</button>
            <span class="main__taskName">${taskName}</span>
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