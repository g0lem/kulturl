import React from "react";
import Movies from "./components/Movies/Movies";
import Theatre from "./components/Theatre/Theatre";
import { RouterButton } from "./components/RouterButton";

const Routes = {
    Movies: 'MOVIE_ROUTE',
    Theatre: 'THEATRE_ROUTE',
}

export class Router extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentRoute: Routes.Theatre
        }
    }

    getCurrentRoute = () => {
        switch(this.state.currentRoute){
            case Routes.Movies: 
                return <Movies/>
            case Routes.Theatre: 
                return <Theatre/>
            default:
                return <Theatre/>
        }
    }

    switchRoute = (routeName = Routes.Theatre) => {
        this.setState({
            currentRoute: routeName
        })
    }


    render() {
        return <div>
            <RouterButton
                onClick={()=>this.switchRoute(Routes.Theatre)}>
                Teatru
            </RouterButton>
            <RouterButton className="routerButton"
                onClick={()=>this.switchRoute(Routes.Movies)}>
                Cinema
            </RouterButton>
            {this.getCurrentRoute()}
        </div>
    }

}