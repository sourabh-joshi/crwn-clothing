import React             from 'react';

import SHOP_DATA         from 'pages/Shop/shopData';
import CollectionPreview from 'components/CollectionPreview/CollectionPreview';

const renderShopData = () => (
	SHOP_DATA.map(({ id, ...otherData}) => 
		<CollectionPreview key={id} {...otherData} />
	)
);

const Shop = () => (
	<div>{renderShopData()}</div>
);

export default Shop;
