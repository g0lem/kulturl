import React from "react";
import Day from "./Day";


export default class Theatre extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            theaterPlaysByDays: ['da'],
            day: 0,
        }
    }

    componentDidMount() {
        fetch('/mystage/jsonevents/getTopListingByEventTypeId')
            .then(async (res)=> {
                const data = await res.json();
                const dataWithReplacedLetters = JSON.stringify(data).replaceAll('ă','ȁ')
                const { output } = JSON.parse(dataWithReplacedLetters);
                console.log(output);
                this.setState({theaterPlaysByDays: output});
            })
    }

    getCurrentDay = () => {
        const days = this.state?.theaterPlaysByDays;
        const dayIndex = this.state?.day;

        if(dayIndex >= days.length) {
            return {};
        }

        return days[dayIndex];
    }
    getDayDate = () => {
        
        return this.getCurrentDay()?.info?.data;
    }

    changeDay = (add) => {
        const days = this.state?.theaterPlaysByDays;

        if(this.state.day + add >= days.length || this.state.day + add < 0) {
            return;
        }

        this.setState({day: this.state.day + add});
    }

    render() {
        return <>
            <h1 onClick={this.openDatePicker}>
                <span onClick={()=>this.changeDay(-1)}
                    style={{cursor: 'pointer'}}> 
                    {'<<   '}
                </span>
                {
                    this.getDayDate()
                }
                <span onClick={()=>this.changeDay(1)}
                    style={{cursor: 'pointer'}}> 
                    {'   >>'}
                </span>
            </h1>
            <Day {...this.getCurrentDay()}/>
        </>
    }

}