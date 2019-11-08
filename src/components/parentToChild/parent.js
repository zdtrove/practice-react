import React from 'react';
import Child from './child';

const parent = (props) => {
    return (
        <div>
            <Child doSomething={props.changeTheWorldEvent} title={props.title} />
            <Child doSomething={props.keepTheWorldSameEvent} title={props.title} />
        </div>
    );
};

export default parent;