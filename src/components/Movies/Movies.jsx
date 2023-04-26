import React from "react";
import Movie from "./Movie";


export default class Movies extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        fetch('cinemacity/ro/data-api-service/v1/feed/10107/byName/now-playing?lang=ro_RO')
            .then(async (res)=> {
                const data = await res.json();
                const { posters } = data?.body;
                this.setState({movies: posters || []});
            })
    }

    render() {
        return <div className="moviesContainer">
            {this.state.movies.map(movie=> {
                return <Movie {...movie}/>
            })}

        </div>
    }

}