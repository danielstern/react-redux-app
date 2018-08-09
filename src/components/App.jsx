import React from 'react';

import Counter from './Counter';
import TodoList from './TodoList';

export default ()=>(
    <div>
        <h1>
            Things I Have To Do
        </h1>
        <h2>
            I don't want to do them, but they need to get done.
        </h2>
        <div>
            <Counter />
            <TodoList />
        </div>
    </div>
)

