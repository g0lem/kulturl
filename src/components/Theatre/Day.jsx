import React from "react";
import Show from "./Show";



export default class Day extends React.Component {

    constructor(props){
        super(props);

        console.log(props);

    }

    render() {
        return <div className="dayContainer">
            <h1>{this.props?.info?.data}</h1>
            {
                this.props?.shows?.map(show=> {
                    return <Show {...show}/>
                })
            }
        </div>
    }

}