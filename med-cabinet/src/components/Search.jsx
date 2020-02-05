import React, {useState} from "react";
import styled from "styled-components";

const Search = (props) => {

    const Button = styled.button`
        background: white;
        color: green;
        border: 1px solid black;
        border-radius: 8%;
        margin-top: 8%;
        margin-left: 22%;
        padding-left: 25px;
        padding-right: 25px;
        :hover {
            color: green;
            text-decoration: none;
            border-radius: 7%;
            box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
            transition: all 0.3s ease;
        }
    `;

    const [results, setResults] = useState();

    const handleChanges = e => {
        setResults(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault();

        const strainSearch = (strains, index) => {
                return strains.filter(result => result.toLowerCase().includes(result.toLowerCase()));
          };
          props.search(strainSearch);
          console.log(strainSearch);
        };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                onChange={handleChanges}
                type="text"
                name="search"
                placeholder="Search Strain"/>
            </form>
            <Button type="submit">Results</Button>
        </div>
    )
    }
export default Search;