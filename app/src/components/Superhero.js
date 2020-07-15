import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSuperhero } from "../actions/index";

function Superhero(props) {
    useEffect(() => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max)) + 1;
        }
        props.fetchSuperhero(getRandomInt(731));
      }, []);
    return (
        <div>
            { Object.entries(props.superhero).length > 0 &&
            <>
                <h2>{props.superhero.name}</h2>
                <h3>{props.superhero.biography["alter-egos"]}</h3>
                <img src={props.superhero.image.url} />
            </>
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        superhero: state.superhero,
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchSuperhero }
  )(Superhero);
  
