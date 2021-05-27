import React, { useEffect }           from 'react';
import { Route }                      from 'react-router-dom';
import { connect }                    from 'react-redux';

import CollectionsOverviewContainer   from 'components/CollectionsOverview/CollectionsOverviewContainer';
import CollectionPageContainer        from 'pages/Collection/CollectionContainer';
import { fetchCollectionsStartAsync } from 'redux/shop/shopActions';

const Shop = ({ match, fetchCollectionsStartAsync }) => {
	useEffect(() => {
		fetchCollectionsStartAsync();
	}, []);

	return (
		<div>
			<Route 
				exact 
				path      = {`${match.path}`}
				component = {CollectionsOverviewContainer}
			/>
			<Route 
				path      = {`${match.path}/:collectionId`}
				component = {CollectionPageContainer} />
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(Shop);
