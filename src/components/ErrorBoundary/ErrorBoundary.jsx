import React                                                      from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from 'components/ErrorBoundary/error-boundary.styles';

class ErrorBoundary extends React.Component {
	state = {
		hasErrored: false
	}

	static getDerivedStateFromError(error) {
		// process the error
		return { hasErrored: true };
	}

	componentDidCatch(error, info) {
		console.log(error, info);
	}

	render() {
		if(this.state.hasErrored){
			return (
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png" />
					<ErrorImageText>This Page is Lost In Space</ErrorImageText> 
				</ErrorImageOverlay>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
