import React, {useState} from "react";

const Search = () => {

    const [results, setResults] = useState();

    const handleChanges = e => {
        setResults(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                onChange={handleChanges}
                type="text"
                name="search"
                placeholder="Search a Strain"/>
            </form>
        </div>
    )
}
export default Search;