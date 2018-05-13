import { connect } from 'react-redux';
import Table from '../Table';
import { selectors } from '../../../modules';

const mapStateToProps = state => {
  console.log(JSON.stringify(state));
  return ({
    players: selectors.player.playersFilteredSelector(state),
  });
}

export default connect(mapStateToProps)(Table);
