'use strict';

//Selectors
const txtTarea = document.querySelector('.input_texto');
const addTarea = document.querySelector('.input_button');
const listaTareas = document.querySelector('.lista-tareas');

const list = document.getElementById('drag');




//Functions

const crearTarea = function (event) {
    event.preventDefault();

    //TAREA DIV
    const tareaDiv = document.createElement('div');
    tareaDiv.classList.add('tarea');
    //DIV MOVE TAREA
    const moveTarea = document.createElement('div');
    moveTarea.classList.add('move_tarea');
    tareaDiv.appendChild(moveTarea);
    //DIV MOVE_TAREA_ITEM
    const moveTareaItem1 = document.createElement('div');
    moveTareaItem1.classList.add('move_tarea_item');
    moveTarea.appendChild(moveTareaItem1);
    //DIV MOVE_TAREA_ITEM
    const moveTareaItem2 = document.createElement('div');
    moveTareaItem2.classList.add('move_tarea_item');
    moveTarea.appendChild(moveTareaItem2);
    //DIV MOVE_TAREA_ITEM
    const moveTareaItem3 = document.createElement('div');
    moveTareaItem3.classList.add('move_tarea_item');
    moveTarea.appendChild(moveTareaItem3);
    //LI 
    const nuevaTarea = document.createElement('li');
    nuevaTarea.innerText = txtTarea.value;
    nuevaTarea.classList.add('tarea-item');
    tareaDiv.appendChild(nuevaTarea);
    //BUTTON BASURA
    const quitarTareaBtn = document.createElement('button');
    quitarTareaBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    quitarTareaBtn.classList.add('trash-btn');
    tareaDiv.appendChild(quitarTareaBtn);


    //Apend to list
    listaTareas.appendChild(tareaDiv);

    //Clear input
    txtTarea.value = '';

}

const borrarTarea = function(event) {

    console.log(event.target);

    const item = event.target; 
    //DELETE 
    if(item.classList[0] === 'trash-btn') {
        const tarea = item.parentElement;
        tarea.remove();
    }
}


//DRAGGABLE ITEM

Sortable.create(list, {
    animation: 150,
    handle: '.move_tarea',
    ghostClass: 'blue-background-class'
})



//Event Listeners
addTarea.addEventListener('click', crearTarea);
listaTareas.addEventListener('click', borrarTarea);




