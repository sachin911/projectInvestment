import React from 'react';


export default class moreInfo extends React.Component {
    render(){
        return(
            <div className = 'more-info-container'>
                <div className = 'Info-selector'>
                    <a>Tell Us More</a>
                    <span>|</span>
                    <a>Start Over</a>
                </div>
                <p className = 'info'>Providing new information could help us suggest a strategy that’s more appropriate for your needs.</p>
                <div className = 'btn-wrapper'>
                    <button className = 'sava-btn'>Save strategy</button>
                    <button className = 'open-btn'>Open Account</button>
                </div>
            </div>
        )
    }
}