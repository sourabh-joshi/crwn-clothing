import React                        from 'react';
import { connect }                  from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview            from 'components/CollectionPreview/CollectionPreview';
import { selectShopCollections }    from 'redux/shop/shopSelectors';

import 'components/CollectionsOverview/CollectionsOverview.scss';

const renderCollectionsPreviewList = (collections) => (
	collections ? Object.values(collections).map(({ id, ...otherProps }) => 
		<CollectionPreview key={id} {...otherProps} />
	) : []
);

const CollectionsOverview = ({ collections }) => (
	<div className="collections-overview">
		{renderCollectionsPreviewList(collections)}		
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
