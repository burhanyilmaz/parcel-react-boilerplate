import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { STATE_COUNTER } from '../../constants';
import { changeCounter } from '../../actions/CounterActions';
import CounterHome from './CounterHome';

const mapStateToProps = state => {
    const { counter } = state[STATE_COUNTER];

    return { counter };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCounter: bindActionCreators(changeCounter, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterHome);
