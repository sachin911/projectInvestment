import React,{ PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactSlider from 'react-slider';
import './style.css';
import Slider, { Range } from 'rc-slider';
// import 'rc-slider/assets/index.css';

export class SliderComp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			"risk" : props.stateData.risk,
			"currentRisk" : {}
		}

		this._onChange = this._onChange.bind(this);
		this.setActiveState = this.setActiveState.bind(this);

	}

	componentDidMount() {
		// console.log("it did mount");
	}

	_onChange(value) {
		let riskLevel = value + 1; //because the actual risk is 1 more than the value
		let stateData = this.state;
		let currentRisk = stateData.risk[riskLevel];
		stateData.currentRisk = currentRisk;
		this.setActiveState(stateData);
	}

	setActiveState(value) {
		this.setState(value);
	}

	render() {
		const { max, recommendedRisk } = this.props;
		return (
			<div className="sliderCompContainer">
				<div className="strategyTextBase strategyTextBase-text_left ">
					<span> More Conservative </span>
				</div>
				<div className="sliderContainer">
					<Slider defaultValue={recommendedRisk} max={max} steps="1" dots="true" onChange={this._onChange}/>
				</div>
				<div className="strategyTextBase strategyTextBase-text_right">
					<span> More Aggressive </span>
				</div>
			</div>
		)
	}
}

	Slider.propTypes = {
		max : PropTypes.number.isRequired,
		recommendedRisk : PropTypes.number,
		stateData: PropTypes.object
	};

const mapStateToProps = (state) => ({
	max : Object.keys(state.reducer[0].data[0].risk).length - 1,
	recommendedRisk: state.reducer[0].data[0].recommendedRisk - 1,
	stateData: state.reducer[0].data[0]  	
});

export default connect(mapStateToProps)(SliderComp);