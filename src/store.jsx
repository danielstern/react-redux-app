import { createStore } from 'redux';
import uuid from 'uuid';

const COMPLETE_TODO = `COMPLETE_TODO`;
const defaultState = {
    showDone: true,
    todos:[{
        id:uuid(),
        name:"Find enchanted wand",
        done:true
    },{
        id:uuid(),
        name:"Find the hidden city of the elves",
        done: false,
    },{
        id:uuid(),
        name:"Capture the Red Dragon",
        done: false
    }]
};



const reducer = (state = defaultState, action)=>{
    switch (action.type) {
        case COMPLETE_TODO:
            console.log("compling todo!",state);
            const newState = Object.create(state);
            newState.todos = state.todos.map(todo=>{
                if (todo.id === action.id) {
                    return {
                        name:todo.name,
                        done: true,
                        id: todo.id
                    }
                } else {
                    return todo;
                }
            });
            return newState;
    }
    return state;
};

export const store = createStore(reducer);

export const mutations = {
    completeTodo(id){
        return {id,type:COMPLETE_TODO}
    },
    createTodo(){

    }
};