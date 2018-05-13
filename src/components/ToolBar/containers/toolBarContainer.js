import { connect } from 'react-redux';
import ToolBar from '../ToolBar';
import { actions, selectors } from '../../../modules';

export const mapStateToProps = state => ({
  searchName: selectors.app.nameSearchSelector(state),
  searchPosition: selectors.app.positionSearchSelector(state),
  searchAge: selectors.app.ageSearchSelector(state),
});

export const mapDispatchToProps = dispatch => ({
  setSearchName(searchTerm) {
    dispatch(actions.app.setNameSearch(searchTerm));
  },
  setSearchPosition(searchTerm) {
    dispatch(actions.app.setPositionSearch(searchTerm));
  },
  setSearchAge(searchTerm) {
    dispatch(actions.app.setAgeSearch(searchTerm));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);
