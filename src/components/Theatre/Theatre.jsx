import React from "react";
import Day from "./Day";


export default class Theatre extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            theaterPlaysByDays: [],
        }
    }

    componentDidMount() {
        fetch('/mystage/jsonevents/getTopListingByEventTypeId')
            .then(async (res)=> {
                const data = await res.json();
                const dataWithReplacedLetters = JSON.stringify(data).replaceAll('ă','ȁ')
                const { output } = JSON.parse(dataWithReplacedLetters);
                this.setState({theaterPlaysByDays: output});
            })
    }

    render() {
        return <>
            {
                this.state?.theaterPlaysByDays?.map(day=> {
                    return <Day {...day}/>
                })
            }
        </>
    }

}