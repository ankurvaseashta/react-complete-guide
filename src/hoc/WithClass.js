import React, {Component} from 'react';

// const withClass = (WrappedComponet, className) => {
// 	return (props) => (
// 		<div className={className}>
// 			<WrappedComponet {...props} />
// 		</div>
// 	)
// }

const withClass = (WrappedComponet, className) => {
	const WithClass =  class extends Component{
		render () {
			return (
				<div className={className}>
					<WrappedComponet ref={this.props.forwardedRef} {...this.props} />
				</div>
			)
		}
	}

	return React.forwardRef((props, ref) => {
		return <WithClass {...props} forwardedRef={ref} />
	});
}

export default withClass;