import React from "react";
import styled from "styled-components";

const Card = () => {

    const Box = styled.div`
        display: flex;
        flex-flow: column nowrap;
        border: 1px solid green;
        width: 30%;
        h2 {
            margin: 0 auto;
        }
        p {
            margin: 0 auto;
        }
    `;
    return (
        <Box>
            <h2>Strain:</h2>
            <p>Type:</p>
            <p>Rating:</p>
            <p>Effects:</p>
            <p>Flavors:</p>
            <p>Symptoms:</p>
            <p>Description:</p>
        </Box>
    )
}
export default Card;
