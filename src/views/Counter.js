
import React from 'react';

import * as Actions from '../Actions';

import { connect } from 'react-redux';


const buttonStyle = {
    margin: '10px'
};

//纯函数: 内层组件/傻瓜组件/展示组件, 是一个纯函数
function Counter({caption, onIncrement, onDecrement, value}) {
    return (
        <div>
            <button style={buttonStyle} onClick={onIncrement}>+</button>
            <button style={buttonStyle} onClick={onDecrement}>-</button>
            <span>{caption} count: {value}</span>
        </div>
    )
}

function mapStateToProps(state, ownProps){
    return {
        value: state[ownProps.caption]
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onIncrement: () => {
            dispatch(Actions.increment(ownProps.caption))
        },
        onDecrement: () => {
            dispatch(Actions.decrement(ownProps.caption))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)
