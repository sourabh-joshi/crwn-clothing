import React, { useEffect, lazy, Suspense } from 'react';
import { Route }                            from 'react-router-dom';
import { connect }                          from 'react-redux';

import { fetchCollectionsStartAsync }       from 'redux/shop/shopActions';

const CollectionsOverviewContainer = lazy(() => import('components/CollectionsOverview/CollectionsOverviewContainer'));
const CollectionPageContainer      = lazy(() => import('pages/Collection/CollectionContainer'));

const Shop = ({ match, fetchCollectionsStartAsync }) => {
	useEffect(() => {
		fetchCollectionsStartAsync();
	}, []);

	return (
		<div>
			<Suspense>
				<Route 
					exact 
					path      = {`${match.path}`}
					component = {CollectionsOverviewContainer}
				/>
				<Route 
					path      = {`${match.path}/:collectionId`}
					component = {CollectionPageContainer} />
			</Suspense>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(Shop);
