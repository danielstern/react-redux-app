import React from 'react';

import Counter from './Counter';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

export default ()=>(
    <div>
        <h1>
            Ye Olde Checklist
        </h1>
        <div>
            <Counter />
            <TodoList />
            <TodoInput />
        </div>
    </div>
)

