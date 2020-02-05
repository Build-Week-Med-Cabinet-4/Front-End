import React from "react";
import styled from "styled-components";

export default function ProfileCard () {

    const Pcard =styled.div`
        box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
        display: flex;
        flex-flow: column nowrap;
        width: 30%;
        margin: 0 auto;
        margin-top: 10%;
        border: 1px solid blacl;
        h2 {
            margin: 0 auto;
            margin-bottom: 5%;
            margin-top: 3%;
            color: green;
        }
        p {
            margin: 0 auto;
            margin-bottom: 2%;
        }
    `;

    return (
        <Pcard>
            <h2>User:</h2>
            <p>First Name:</p>
            <p>Last Name:</p>
            <p>Email:</p>
        </Pcard>
    );
}