import React, { useEffect, useRef } from 'react';

function FocusInput() {

	const inputRef = useRef(null);

	useEffect(() => {
		// Focus the input element
		inputRef.current.focus();
	}, []);

    return (
        <div className="App">
        	<input ref={inputRef} type="text" />
        </div>
    );
}

export default FocusInput;
