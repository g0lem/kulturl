import React from "react";


export default class Movie extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <a href={this.props.url}>
            <h1>{this.props.featureTitle}</h1>
            <img src={this.props.posterSrc}/>
        </a>
    }

}