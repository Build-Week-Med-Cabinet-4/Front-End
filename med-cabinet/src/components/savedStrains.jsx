import React from "react";
import { connect } from 'react-redux';

import { getStrains } from '../actions';

const savedStrains = props => {
    console.log(props);
    console.log(props.strains);

    return (
        <div>
           
            <h2>saved strains</h2>
            <button onClick={props.getStrains}>Load Strains</button>
            {props.error && <p>{props.error}</p>}
            {props.isFetching && <p>Loading...</p>}
            {props.strains && props.strains.map(item => (
                <p>{item.Name}</p>
            ))}
        </div>
    );
};

const mapStateToProps = state => ({
    strains: state.strainReducer.strains,
    error: state.strainReducer.error,
    isFetching: state.strainReducer.isFetching
});

export default connect(
    mapStateToProps,
    { getStrains }
)(savedStrains);