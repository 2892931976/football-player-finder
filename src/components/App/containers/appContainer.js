import { connect } from 'react-redux';
import App from '../App';
import { effects } from '../../../modules';

export const mapDispatchToProps = dispatch => ({
  fetchPlayers() {
    dispatch(effects.player.fetchPlayers());
  },
});

export default connect(null, mapDispatchToProps)(App);
