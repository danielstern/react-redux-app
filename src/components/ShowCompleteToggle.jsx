import React from 'react';
import { connect } from 'react-redux';
import { mutations } from '../store';

const ShowCompleteToggle = ({showComplete,changeShowComplete})=>(
    <div>
        <label>
            Show completed items: <input type="checkbox" checked={showComplete} onChange={changeShowComplete}/>
        </label>
    </div>
);

const mapStateToProps = state=>({showComplete:state.showComplete});

const mapDispatchToProps = dispatch=>({
    changeShowComplete(e){
        dispatch(mutations.toggleShowComplete(e.target.checked));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(ShowCompleteToggle);