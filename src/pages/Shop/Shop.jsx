import React                        from 'react';
import { connect }                  from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview            from 'components/CollectionPreview/CollectionPreview';
import { selectShopCollections }    from 'redux/shop/shopSelectors';

const renderShopData = (collections) => (
	collections.map(({ id, ...otherData}) => 
		<CollectionPreview key={id} {...otherData} />
	)
);

const Shop = ({ collections }) => (
	<div>{renderShopData(collections)}</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections
});

export default connect(mapStateToProps)(Shop);
