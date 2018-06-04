import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/style.scss';

class CounterHome extends Component {

    increaseCounter() {
        const { counter, changeCounter } = this.props;
        return changeCounter(counter + 1);
    }

    decreaseCounter() {
        const { counter, changeCounter } = this.props;
        return changeCounter(counter - 1);
    }

    render() {
        const { counter } = this.props;

        return(
            <div>
                <h3>Parcel React Boilerplate</h3>
                <div className="container">
                    <div className="column minus" onClick={() => this.decreaseCounter()}>
                        <span>−</span>
                    </div>
                    <div className="column">
                        <h1 className="counter">{counter}</h1>
                    </div> 
                    <div className="column plus" onClick={() => this.increaseCounter()}>
                        <span>+</span>                    
                    </div>
                </div>
            </div>
        );
    }
}

CounterHome.propTypes = {
    counter: PropTypes.number.isRequired,
    changeCounter: PropTypes.func.isRequired,
}

export default CounterHome;