import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchBitcoin} from "../actions/bitcoin";

export class Loot extends Component {
    componentDidMount() {
        this.props.fetchBitcoin();
    } 
    computeBitCoin() {
        const {bitcoin} = this.props;
       
        if(Object.keys(bitcoin).length === 0) return "";
        return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(",", ""), 10);
    }
    render() {
        return(
            <h3>Bitcoin balance: {this.computeBitCoin()}</h3>
        )
    }
}

export default connect(state => state, {fetchBitcoin})(Loot);
