import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import SliderComp from './components/slider/Slider';
import AssetText from './components/assetTypesText/AssetText';
import './App.css';

export class App extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            "risk": props.stateData.risk,
            "currentRisk": props.stateData.risk[props.stateData.recommendedRisk]
        }

        // this._onChange = this._onChange.bind(this);
        this.setActiveState = this.setActiveState.bind(this);

    }

    setActiveState(value) {
        this.setState(value);
    }


    render() {
        const { max, recommendedRisk, stateData } = this.props;
        return ( 
            < div className="App" >
                < div className="App-header" >
                    < h2 > Investment Strategy < /h2>
                < /div>
                < SliderComp stateData={stateData} recommendedRisk={recommendedRisk} max={max} setActiveState={this.setActiveState} / >
                <AssetText information={this.state.currentRisk} recommendedRisk={recommendedRisk} />
            < /div>
        );
    }
}

App.propTypes = {
    max: PropTypes.number.isRequired,
    recommendedRisk: PropTypes.number,
    stateData: PropTypes.object
};

const mapStateToProps = (state) => ({
    max: Object.keys(state.reducer[0].data[0].risk).length - 1,
    recommendedRisk: state.reducer[0].data[0].recommendedRisk,
    stateData: state.reducer[0].data[0]
});

export default connect(mapStateToProps)(App);
