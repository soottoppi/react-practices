import React, { Component } from 'react';

export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            val: this.props.begin
        }
    }

    onClickButton(e) {
        // this.state.value = this.state.value + this.props.step;
        e.target.value === '+' ?
        this.setState({
            val: this.state.val + this.props.step
        }) : this.setState({
            val: this.state.val - this.props.step
        }) 
    }
    render() {
        return (
            <div>
                <button value={'+'} onClick={ this.onClickButton.bind(this) }>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
                {' '}
                <button value={'-'} onClick={ this.onClickButton.bind(this) }>
                    <strong>-</strong>
                </button>
            </div>
        );
    }
}