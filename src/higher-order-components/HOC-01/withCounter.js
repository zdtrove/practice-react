import React, {Component, useState} from 'react';

// export const withCounter = (WrappedComponent, incrementNumber) => {
// 	return class WithCounter extends Component {
// 		constructor(props) {
// 			super(props);
// 			this.state = {
// 				count: 0,
// 			}
// 		}
// 		incrementCount = () => {
// 			this.setState(prevState => {
// 				return { count: prevState.count + incrementNumber }
// 			});
// 		}
// 		render() {
// 			return (
// 				<WrappedComponent 
// 					{...this.props}
// 					count={this.state.count}
// 					incrementCount={this.incrementCount}
// 				/>
// 			);
// 		}
// 	}
// }

export const withCounter = (WrappedComponent, incrementNumber) => {
	return function WithCounter(props) {
		const [count, incrementCount] = useState(0);
		return (
			<WrappedComponent 
				{...props}
				count={count}
				incrementCount={() => incrementCount(count + incrementNumber)}
			/>
		)
	}
}