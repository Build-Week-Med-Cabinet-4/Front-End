import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/strainCard";
import Search from "./Search";

const StrainSearch = () => {

    const [strains, setStrains] = useState([]);

    useEffect(() =>{
        axios.get(``) // add when ready
        .then(res => {
            console.log(res);
            setStrains(res.data);
        })
        .catch(err => {
            console.log("Big oof", err);
        });
    }, []);


return (
    <div>
    <Search />
    <h2>search for strains</h2>
    <section>
    <Card />
    </section>
    </div>
)
};
export default StrainSearch;