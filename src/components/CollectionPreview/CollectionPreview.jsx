import React          from 'react';

import CollectionItem from 'components/CollectionItem/CollectionItem';

import 'components/CollectionPreview/CollectionPreview.scss';

const renderPreviewItems = (items) => (
	items.filter((item, index) => index < 4)
		.map((item) => 
			<CollectionItem key={item.id} item={item} />
	)
);


const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{renderPreviewItems(items)}
		</div>
	</div>
);

export default CollectionPreview;
