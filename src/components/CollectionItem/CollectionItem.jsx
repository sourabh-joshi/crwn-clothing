import React        from 'react';
import { connect }  from 'react-redux';

import { addItem }  from 'redux/cart/cartActions';
import CustomButton from 'components/CustomButton/CustomButton';

import 'components/CollectionItem/CollectionItem.scss';

const CollectionItem = ({ item, addItem }) => (
	<div className="collection-item">
		<div
			className = "image"
			style     = {{backgroundImage: `url(${item.imageUrl})`}} />
		<div className="collection-footer">
			<span className="name">{item.name}</span>
			<span className="price">{item.price}</span>
		</div>
		<CustomButton className="custom-button" onClick={() => addItem(item)} inverted>Add to cart</CustomButton> 
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
