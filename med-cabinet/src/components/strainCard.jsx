import React from "react";
import styled from "styled-components";

const StrainCard = (props) => {

    const Box = styled.div`
    box-shadow: 0 4px 8px 0 rgba( 0, 0, 0, 0.2), 0 6px 20px 0 rgba( 0, 0, 0, 0.19);
    display: flex;
    flex-flow: column wrap;
    border: 1px solid black;
    border-radius: 3%;
    width: 30%;
    margin-top: 2%;
    h2 {
        margin: 0 auto;
        margin-bottom: 5%;
        margin-top: 5%;
    }
    p {
        margin: 0 auto;
        margin-bottom: 4%;
        padding-left: 4%;
        padding-right: 4%;
    }
    h3 {
        margin: 0 auto;
    }
    ul {
        margin: 0 auto;
    }
`;

const Rate = styled.div`
    display:flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-top: 2%;
    img {
        margin-left 4%;
    }
    h4 {
        margin-top: 1%;
    }
`;

return (
    <Box>
        <h2>Strain: {props.name}</h2>
        <p>Type: {props.type}</p>
        <h3>Rating:</h3>
        <Rate> 
            <h4>{props.rating}</h4>
        </Rate>
        <ul>Effects:{props.effects}</ul>
        <ul>Flavors: {props.flavors}</ul>
        <p>Description: {props.description}</p>
    </Box>
)
}
export default StrainCard;