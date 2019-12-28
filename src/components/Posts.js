import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux';

class PostsClass extends React.Component {
	componentDidMount() {
		this.props.fetchPosts();
	}
	render() {
		let { postData } = this.props;
		return postData.loading ? (
			<h2>Loading</h2>
		) : postData.error ? (
			<h2>{postData.error}</h2>
		) : (
			<div>
				<h2>Posts List</h2>
				<div>
					{
						postData && postData.posts && postData.posts.map((post,index) => <p key={index}>{post.title}</p>)
					}
				</div>
			</div>
		);
	}
}

// function Posts({ postData, fetchPosts }) {
// 	useEffect(() => {
// 		fetchPosts();
// 	}, [fetchPosts]);
// 	return postData.loading ? (
// 		<h2>Loading</h2>
// 	) : postData.error ? (
// 		<h2>{postData.error}</h2>
// 	) : (
// 		<div>
// 			<h2>Posts List</h2>
// 			<div>
// 				{
// 					postData && postData.posts && postData.posts.map((post,index) => <p key={index}>{post.title}</p>)
// 				}
// 			</div>
// 		</div>
// 	);
// }

const mapStateToProps = state => {
	return {
		postData: state.post
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchPosts: () => dispatch(fetchPosts())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsClass);