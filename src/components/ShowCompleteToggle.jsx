import React from 'react';
import { connect } from 'react-redux';
import { mutations } from '../store';

const ShowCompleteToggle = ({showComplete,handleChangeShowComplete})=>(
    <div>
        <label>
            Show completed items
            <input type="checkbox" checked={showComplete} onChange={handleChangeShowComplete}/>
        </label>
    </div>
);

const mapStateToProps = state=>({showComplete:state.showComplete});
