import { connect }                    from 'react-redux';
import { createStructuredSelector }   from 'reselect';
import { compose }                    from 'redux';

import { selectIsCollectionFetching } from 'redux/shop/shopSelectors';
import WithSpinner                    from 'components/WithSpinner/WithSpinner';
import CollectionsOverview            from 'components/CollectionsOverview/CollectionsOverview';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;


