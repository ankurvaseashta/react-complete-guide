import React, {Component} from 'react';

// const withClass = (WrappedComponet, className) => {
// 	return (props) => (
// 		<div className={className}>
// 			<WrappedComponet {...props} />
// 		</div>
// 	)
// }

const withClass = (WrappedComponet, className) => {
	return class extends Component{
		render () {
			return (
				<div className={className}>
					<WrappedComponet {...this.props} />
				</div>
			)
		}
	}

}

export default withClass;