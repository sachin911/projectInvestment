const tooltip_grid_container = 
        `display: flex;  align-items: center;width: 440px; height: 100px; box-sizing: border-box; border: 1px solid #888; border-radius: 3px; font-family: FidelitySans-Regular, Helvetica, sans-serif; box-shadow: 0 2px 3px rgba(0,0,0,.15)`;
 

const tooltip_left = 
 `display: flex; flex-direction: column; padding: 0 8px 0 8px;  align-items: center; width: 60px; text-align: center; font-size: 12px`;
 

const year = 'font-size: 20px';
 

const tooltip_right =  
`display: flex; border-left: 1px solid #CCC; padding: 0 8px 0 8px`;
 

const icon = 
 `margin-left: -20px; display: inline-block; width: 16px; height: 16px; border-radius: 50%; box-sizing: border-box; vertical-align: middle;`;

const border_gray = 'border: gray solid 3px;';

const border_blue = 'border: #90c6e4 solid 3px';

const border_orange = 'border: #ffa500 solid 3px';

const data_box = 
 `padding-left:20px; box-sizing: border-box; width: 130px;`;
 

const title_box = 'margin: 0';

 

const title = 
 `vertical-align: middle; font-size: 12px; font-family: FidelitySans-Regular, Helvetica, sans-serif`;
 

const money = 
 `font-size: 16px; font-weight: 700; margin: 5px 0 5px 0`;
 
const difference = 
 `margin: 0; color: #0D6F3F; font-size: 12px`;

const result = 
    `<span style = "${tooltip_grid_container}"">
        <span style = "${tooltip_left}" >
            <span>MAY</span>
            <span style = "${year}" >2043</span>
        </span>
        <span style = "${tooltip_right}" >
            <span style = "${data_box}" >
                <span style = "${title_box}" >
                    <span style = "${icon + border_blue}" ></span>
                    <span style = "${title}" >Avg Market</span>
                </span>
                <p style = "${money}" >$2,165,900</p>
                <p style = "${difference}" >+$1,488,500</p>
            </span>
            <span style = "${data_box}" >
                <span style = "${title_box}" >
                    <span style = "${icon + border_gray}" ></span>
                    <span style = "${title}" >Avg Market</span>
                </span>
                <p style = "${money}" >$2,165,900</p>
                <p style = "${difference}" >+$1,488,500</p>
            </span>
            <span style = "${data_box}" >
                <span style = "${title_box}" >
                    <span style = "${icon + border_orange}" ></span>
                    <span style = "${title}" >Avg Market</span>
                </span>
                <p style = "${money}" >$2,165,900</p>
                <p style ="${difference}">+$1,488,500</p>
            </span>
        </span>
    </span>`;

export default result;