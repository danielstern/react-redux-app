import React from 'react';
import { connect } from 'react-redux';
import { mutations } from '../store';

const TodoInputComponent = ({submitTodo})=>(
    <form onSubmit={submitTodo}>
        <input type="text" placeholder="Add a new todo item"/>
        <button type="submit">Add</button>
    </form>
);

const mapStateToProps = ()=>({});

const mapDispatchToProps = (dispatch)=>({
    submitTodo(e){
        e.preventDefault();
        let input = e.target.elements[0];
        let value = input.value;
        if (value) {
            dispatch(mutations.createTodo(value));
            input.value = "";
        }
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoInputComponent);