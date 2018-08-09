import React from 'react';
import { mutations } from '../store';
import { connect } from 'react-redux';

const TodoListItem = ({name,complete,id,onChange})=>(
    <li>
        {name} {console.log(onChange)}
        {
            complete ?
                <span><button disabled>DONE</button></span>:
                <button onClick={()=>onChange(id)}>DO</button>

        }

    </li>
);

const TodoList = ({todos,onChange})=>(
    <ul>

        {todos.map(todo=>(
            <TodoListItem {...todo} onChange={onChange} key={todo.id}/>)
        )}
    </ul>
);

const mapStateToProps = ({showComplete,todos})=>{
    const filteredTodos = todos.filter(todo=>todo.complete);
    return {
        todos: showComplete ? todos : filteredTodos
    }
};

const mapDispatchToProps = (dispatch)=>({
    onChange(id){
        console.log(id);
        dispatch(mutations.completeTodo(id));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)