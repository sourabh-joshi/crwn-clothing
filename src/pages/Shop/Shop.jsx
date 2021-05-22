import React from 'react';

import { SHOP_DATA as shopData } from 'pages/Shop/shopData';
import CollectionPreview from 'components/CollectionPreview/CollectionPreview';

import 'pages/Shop/Shop.scss';

const renderShopData = () => (
	shopData.map(({ id, ...otherData}) => 
		<CollectionPreview id={id} {...otherData} />
	)
);

const Shop = () => (
	<div>{renderShopData()}</div>
);

export default Shop;
