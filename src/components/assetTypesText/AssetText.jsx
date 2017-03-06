import React, { Component } from 'react';
import './TextStyle.css';

export default class AssetText extends Component {
	render() {
		let textNodes = [];
		let propsData = this.props.information;
		let riskLevelText = "We suggest this Risk Level!";
		let recommendedRiskLevel = this.props.recommendedRisk;
		(function(propsData,textNodes,recommendedRiskLevel){
			Object.keys(propsData.assetAllocation).forEach(function(key){
				if(parseInt(propsData.riskLevel) < parseInt(recommendedRiskLevel)){
					riskLevelText = "This is more Conversative";
				}else if(parseInt(propsData.riskLevel) > parseInt(recommendedRiskLevel)) {
					riskLevelText = "This is more Aggressive!";
				}


				let percent = propsData.assetAllocation[key].percent;
				let value = propsData.assetAllocation[key].type; 
				return (
					textNodes.push(<div className="AssetTextDiv" key={key}>{percent}% {value}</div>)
				);
			});
		})(propsData,textNodes,recommendedRiskLevel);

		return (
			<div>
				<div>
					{riskLevelText}
				</div>
				{textNodes}
			</div>	
		);
	}
}