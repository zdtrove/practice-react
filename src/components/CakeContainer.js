import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.cakeNumbers}</h2>
            <button onClick={props.buyCakeFunc}>Buy Cake</button>
        </div>
    );
}

const mapStateToProps = state => {
	return {
		cakeNumbers: state.numOfCakes
	}
}

const mapDispatchToProps = dispatch => {
	return {
		buyCakeFunc: () => dispatch(buyCake())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
