const createTaskBtn = document.getElementById('create-task-btn');
const completeTaskBtn = document.querySelectorAll('.complete-task-btn');
const deleteTaskBtn = document.querySelectorAll('.delete-task-img');
const list = document.getElementById('list');
const themeSwitch = document.getElementById('theme');

for (let i = 0; i < completeTaskBtn.length; i++) {
    completeTaskBtn[i].addEventListener('click', () => {
        if (!completeTaskBtn[i].classList.contains('active')) {
            completeTaskBtn[i].classList.add('active');
            completeTaskBtn[i].firstElementChild.style.visibility = 'visible';
            /* console.log(completeTaskBtn[i].parentElement.children[1].classList.add('done')); */
            completeTaskBtn[i].parentElement.children[1].classList.add('done');
        } else {
            completeTaskBtn[i].classList.remove('active');
            completeTaskBtn[i].firstElementChild.style.visibility = 'hidden';
            completeTaskBtn[i].parentElement.children[1].classList.remove('done');
        }
    });
}

for (let i = 0; i < deleteTaskBtn.length; i++) {
    deleteTaskBtn[i].addEventListener('click', () => {
        console.log(deleteTaskBtn[i]);
    });
}

createTaskBtn.addEventListener('click', () => {
    if (document.getElementById('input-task').value != '') {
        let taskTitle = document.getElementById('input-task').value;
        alert('Task \"' + taskTitle + '\" created');
        document.getElementById('input-task').value = '';
    } else {
        alert('Task\'s title can\'t be empty');
    }
    completeTaskBtn = document.querySelectorAll('.complete-task-btn');
    deleteTaskBtn = document.querySelectorAll('.delete-task-img');
});

themeSwitch.addEventListener('click', () => {
    if (!document.body.attributes['data-theme']) {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
    }
});