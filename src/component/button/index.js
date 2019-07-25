import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class MyButton extends Component {

    submitEvent() {
        if (this.props.emitEvent) {
            this.props.emitEvent();
        }
    }

    render() {
        const { buttonText } = this.props;
        return (
            <button onClick={() => this.submitEvent()} data-test="buttonComponent">
                {buttonText}
            </button>
        );
    }
}

MyButton.propTypes = {

};

MyButton.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func,
};

export default MyButton
