import React                        from 'react';
import { connect }                  from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem                     from 'components/MenuItem/MenuItem';
import { selectDirectorySections }  from 'redux/directory/directorySelectors';

import 'components/Directory/Directory.scss';

const renderItems = (sections) => (
	sections.map(({ id, ...otherItemProps }) => (
		<MenuItem key={id} {...otherItemProps} />
	))
);

const Directory = ({ sections }) => (
	<div className="directory-menu">
		{renderItems(sections)}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
