import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import StrainCard from "../components/strainCard";
import Search from "./Search";
import styled from "styled-components";


const StrainSearch = () => {

    const Title = styled.div`
        width: 100%;
        height: 50px;
        h1 {
            display:flex;
            justify-content: center;
            margin-top:7%;
            color: green;
        }
    `;  

    const SearchDiv = styled.div`
        display: flex;
        justify-content: center;
        width: 30%;
        margin: 0 auto;
        margin-top: 7%;
        margin-bottom: 8%;
    `;

    const CardSection = styled.div`
    width:100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;

    const [strains, setStrains] = useState([]);
    const [filteredStrains, setFilteredStrains] = useState([]);

    console.log(strains);

    const search = nameArr => {
        setFilteredStrains(nameArr)
    }

    useEffect(() =>{
        axiosWithAuth().get(`/responses`) // add when ready
        .then(res => {
            console.log(res);
            setStrains(res.data);
            setFilteredStrains(res.data)
        })
        .catch(err => {
            console.log("error", err);
        });
    }, []);


    return (
        <div>
            <Title>
                <h1>Strains</h1>
            </Title>
            <SearchDiv>
                <Search search={search} strains={strains}/>
            </SearchDiv>
            <CardSection>
            {strains.map(props => (
                <StrainCard
                  key={props.strain_id}
                  name={props.strain_name}
                  type={props.strain_type}
                  rating={props.strain_rating}
                  description={props.strain_description}
                  effects={props.strain_effects.map(effect => 
                        <li>{effect}</li>
                  )}
                  flavors={props.strain_flavors.map(flavor => 
                    <li>{flavor}</li>
                  )}
                />
                   ))}
            </CardSection>
        </div>
    )
}
export default StrainSearch;