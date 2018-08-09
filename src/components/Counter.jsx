import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state=>({todos:state.todos});
const Counter = ({todos})=>(
    <div>
        You have {todos.length} things. Most impressive!
    </div>
);

export default connect(mapStateToProps)(Counter);