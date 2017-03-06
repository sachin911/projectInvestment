import React from 'react';
import { render } from 'react-dom';


import PieChart from './pieChart/index';
import AreaChart from './areaChart/index';
import MoreInfo from './moreInfo';



class App extends React.Component {
    render(){
        return(
            <div>
                <AreaChart />
                <MoreInfo />
                <PieChart />
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));
