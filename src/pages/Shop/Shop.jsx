import React, { useEffect, useState }                 from 'react';
import { Route }                                      from 'react-router-dom';
import { connect }                                    from 'react-redux';

import WithSpinner                                    from 'components/WithSpinner/WithSpinner';
import CollectionsOverview                            from 'components/CollectionsOverview/CollectionsOverview';
import CollectionPage                                 from 'pages/Collection/Collection';
import { firestore, convertCollectionsSnapshotToMap } from 'firebase/firebase.utils';
import { updateCollections }                          from 'redux/shop/shopActions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner      = WithSpinner(CollectionPage);

const Shop = ({ match, updateCollections }) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const collectionRef = firestore.collection('collections');

		return collectionRef.onSnapshot(async (snapshot) => {
			updateCollections(convertCollectionsSnapshotToMap(snapshot));
			setIsLoading(false);
		});
	}, []);


	return (
		<div>
			<Route 
				exact 
				path   = {`${match.path}`}
				render = {(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}
			/>
			<Route 
				path   = {`${match.path}/:collectionId`}
				render = {(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});


export default connect(null, mapDispatchToProps)(Shop);
