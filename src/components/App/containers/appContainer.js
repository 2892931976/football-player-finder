import { connect } from 'react-redux';
import App from '../App';
import { effects } from '../../../modules';

const mapDispatchToProps = dispatch => ({
  fetchPlayers() {
    dispatch(effects.player.fetchPlayers());
  },
});

export default connect(null, mapDispatchToProps)(App);
