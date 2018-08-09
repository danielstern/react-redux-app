import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const COMPLETE_TODO = `COMPLETE_TODO`;
const CREATE_TODO = `CREATE_TODO`;
const TOGGLE_SHOW_COMPLETE = `TOGGLE_SHOW_COMPLETE`;

const preloadedState = {
    showComplete: true,
    todos:[{
        id:uuid(),
        name:"Find enchanted wand",
        complete:true
    },{
        id:uuid(),
        name:"Find the hidden city of the elves",
        complete: false,
    },{
        id:uuid(),
        name:"Capture the Red Dragon",
        complete: false
    }]
};

/*

const reducer = (state = defaultState, action)=>{
    switch (action.type) {
        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => ({
                    ...todo,
                    complete: (todo.id === action.id) ? true : todo.complete
                }))
            }

        case CREATE_TODO:
            return {
                ...state,
                todos: [...state.todos,{id:action.id,name:action.name,complete:false}]
            }


    }
    return state;
};
*/

const reducer2 = combineReducers({
    todos(state = [], action){
        switch (action.type) {
            case COMPLETE_TODO:
                return state.map(todo => ({
                    ...todo,
                    complete: (todo.id === action.id) ? true : todo.complete
                }));

            case CREATE_TODO:
                return [...state, {id: action.id, name: action.name, complete: false}]
        }
        return state;
    },
    showComplete(state = true,action) {
        switch (action.type) {
            case TOGGLE_SHOW_COMPLETE:
                return action.showComplete;
        }
        return state;
    }
});

export const store = createStore(reducer2,preloadedState);

export const mutations = {
    completeTodo(id){
        return {id,type:COMPLETE_TODO}
    },
    createTodo(name){
        const id = uuid();
        return {id,type:CREATE_TODO,name }
    },
    toggleShowComplete(showComplete){
        return {showComplete,type:TOGGLE_SHOW_COMPLETE }
    }
};