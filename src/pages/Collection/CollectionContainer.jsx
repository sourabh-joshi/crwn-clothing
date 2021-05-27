import { connect }                   from 'react-redux';
import { compose }                   from 'redux';
import { createStructuredSelector }  from 'reselect';

import { selectIsCollectionsLoaded } from 'redux/shop/shopSelectors';
import WithSpinner                   from 'components/WithSpinner/WithSpinner';
import CollectionPage                from 'pages/Collection/Collection';

const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionPage);

export default CollectionContainer;


