import React from "react";
import { MYSTAGE_IMAGE_DOMAIN, MYSTAGE_DOMAIN } from "../../constants";

import style from "./Theatre.module.css";



export default class Show extends React.Component {

    constructor(props){
        super(props);

    }

    render() {
        return <div className="showContainer">
            <div>
                <a href={`${MYSTAGE_DOMAIN}${this.props.url}`}>
                    <h3>{this.props.name}</h3>
                    <img src={`${MYSTAGE_IMAGE_DOMAIN}${this.props.pic}`} className={style.imageClass} loading="lazy"/>
                </a>
            </div>
            
            <div>
                <p>{this.props.shortdesc}</p>
            </div>
        </div>
    }

}