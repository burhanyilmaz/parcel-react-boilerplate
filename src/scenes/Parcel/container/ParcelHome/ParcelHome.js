import React, { Component } from 'react';
import { connect } from 'react-redux';
import { STATE_PARCEL } from '../../constants';
import { changeCounter } from '../../actions/ParcelActions';
import '../../style/style.css';

class ParcelHome extends Component {

    increaseCounter() {
        const { counter } = this.props;
        this.props.changeCounter(counter + 1);
    }

    decreaseCounter() {
        const { counter } = this.props;
        this.props.changeCounter(counter - 1);
    }

    render() {
        const { counter } = this.props;

        return(
            <div>
               <h3>Parcel React Boilerplate</h3>
                <div className="container">
                    <div className="column" onClick={() => this.decreaseCounter()}>
                        <span>−</span>
                    </div>
                    <div className="column">
                        <h1 className="counter">{counter}</h1>
                    </div> 
                    <div className="column" onClick={() => this.increaseCounter()}>
                        <span>+</span>                    
                    </div>
               </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { counter } = state[STATE_PARCEL];

    return { counter };
}

export default connect(mapStateToProps, { changeCounter })(ParcelHome);
