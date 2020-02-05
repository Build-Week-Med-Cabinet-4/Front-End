import React from "react";
import styled from "styled-components";
import { getUser } from '../actions/index';

export default function ProfileCard (props) {

    const profileCard =styled.div`
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
        <profileCard>
            <h2>User:</h2>
            <p>Full Name: {props.data.full_name}</p>
            <p>Username: {props.data.username}</p>
            <p>Email: {props.data.email}</p>
        </profileCard>
    );
}