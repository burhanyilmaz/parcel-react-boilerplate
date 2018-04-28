import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { STATE_PARCEL } from '../../constants';
import { changeCounter } from '../../actions/ParcelActions';
import ParcelHome from './ParcelHome';

const mapStateToProps = state => {
    const { counter } = state[STATE_PARCEL];

    return { counter };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCounter: bindActionCreators(changeCounter, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ParcelHome);
