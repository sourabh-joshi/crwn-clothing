import React                                from 'react';

import { SpinnerContainer, SpinnerOverlay } from 'components/WithSpinner/withSpinner.styles';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
	return isLoading ? (
		<SpinnerOverlay>
			<SpinnerContainer />
		</SpinnerOverlay>
	) : (
		<WrappedComponent { ...otherProps } />
	);
};

export default WithSpinner;
