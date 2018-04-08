import { connect } from 'react-redux';
import MapItemDetails from '../components/MapItemDetails.jsx';

export default connect(
  (state, ownProps) => {
    return {
      mapItem: state[ownProps.mapItemType][ownProps.id]
    };
  }
)(MapItemDetails);
