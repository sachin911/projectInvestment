import React, { Component } from 'react';
import './questionStyle.css';

export default class QuestionComponent extends Component {
	render() {
		let questions = this.props.questions;
		let questionArray = [];

		questionArray =  questions.map(function(question,index) {
			return(
				<div key={index} className="questionComponent"> 
					<div> 
						<h2 className="questionNumber-color_green">
							{index + 1}
						</h2>
					</div>
					<div> <h3> {question.question} </h3> </div>
					<div className="answerContainer"> {question.answer} </div>
				</div>
			)
		});

		return (
			<div className="QuestionContainer">
				<h2> Top Question </h2>
				{questionArray}
			</div>
		);
	}
}