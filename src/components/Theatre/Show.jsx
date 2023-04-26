import React from "react";
import { MYSTAGE_IMAGE_DOMAIN, MYSTAGE_DOMAIN } from "../../constants";

import style from "./Theatre.module.css";
import { ReadMoreButton } from "../ReadMoreButton";



export default class Show extends React.Component {

    constructor(props){
        super(props);

    }

    getRating = () => {
        if(this.props.rating === '0') {
            return '??';
        }
        const ratingNumber = parseFloat(this.props.rating);

        return ratingNumber/100;
    }

    render() {
        return <div className="showContainer">
            <div>
                <a href={`${MYSTAGE_DOMAIN}${this.props.url}`}>
                    <h1>{this.props.name}</h1>
                    <img src={`${MYSTAGE_IMAGE_DOMAIN}${this.props.pic}`} className={style.imageClass} loading="lazy"/>
                </a>
            </div>
            <div>
                <div className="showDetails">
                    <h2>Ora: {this.props.time}</h2>
                    <h3>Rating: {this.getRating()} / 5</h3>
                    <h4>Bilete libere {this.props.free}</h4>
                </div>
            </div>
            <div>                
                <p>{this.props.shortdesc}</p>
            </div>
            <div>
                <a href={`${MYSTAGE_DOMAIN}${this.props.url}`}>
                    <ReadMoreButton>
                        Citește mai mult
                    </ReadMoreButton>
                </a>
            </div>
        </div>
    }

}