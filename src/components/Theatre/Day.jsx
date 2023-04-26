import React from "react";
import Show from "./Show";



export default class Day extends React.Component {

    constructor(props){
        super(props);

        this.inputRef = React.createRef();
    }

    openDatePicker = () => {
        this.inputRef.current.select();
    }

    render() {
        return <div className="dayContainer">
            {
                this.props?.shows?.map(show=> {
                    return <Show {...show}/>
                })
            }
        </div>
    }

}