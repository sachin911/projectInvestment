import React,{ PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import Slider from 'rc-slider';

export default class SliderComp extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange(value) {
		let riskLevel = value + 1; //because the actual risk is 1 more than the value
		let stateData = this.props.stateData;
		let currentRisk = stateData.risk[riskLevel];
		stateData.currentRisk = currentRisk;
		// this.setActiveState(stateData);
		this.props.setActiveState(stateData);
	}

	render() {

		return (
			<div className="sliderCompContainer">
				<div className="strategyTextBase strategyTextBase-text_left ">
					<span> More Conservative </span>
				</div>
				<div className="sliderContainer">
					<Slider defaultValue={this.props.recommendedRisk-1} max={this.props.max} steps="1" dots={true} onChange={this.onChange}/>
				</div>
				<div className="strategyTextBase strategyTextBase-text_right">
					<span> More Aggressive </span>
				</div>
			</div>
		)
	}
}
