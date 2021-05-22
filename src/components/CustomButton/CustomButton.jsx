import React from 'react';

import 'components/CustomButton/CustomButton.scss';

const CustomButton = ({ children, ...otherProps }) => (
	<button className="custom-button" {...otherProps}>
		{children}
	</button>
);

export default CustomButton;
