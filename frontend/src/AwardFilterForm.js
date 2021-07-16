import {TextField, Typography, Button} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ContactPhoneOutlined, PinDropSharp } from '@material-ui/icons';
import { useState } from 'react';
import agencies from './agencies';

const AwardFilterForm = props => {
    const [enteredKeywords, setEnteredKeywords] = useState("");
    const [enteredTopTierAgency, setEnteredTopTierAgency] = useState("");
    const [maxResults, setMaxResults] = useState("");

    const maxResultsHandler = event => (setMaxResults(event.target.value));
    const keywordHandler = event => (setEnteredKeywords(event.target.value));
    const topTierAgencyHandler = event => {
        setEnteredTopTierAgency(event.target.innerText);
    };
    const formSubmitHandler = (event) => {
        event.preventDefault();

        props.onSubmit({
            keywords : enteredKeywords,
            agencies : [
                {
                    type : "awarding",
                    name : enteredTopTierAgency,
                    tier : "toptier"
                }
            ],
            maxNumberOfResults : maxResults
        })
    }

    return (
        <>
            <form onSubmit={formSubmitHandler}>
                <TextField label="Keywords" onChange={keywordHandler} value={enteredKeywords}></TextField>
                <Autocomplete
                    onChange={topTierAgencyHandler}
                    options={agencies}
                    getOptionLabel={(option) => option.name}
                    renderInput={(params) => <TextField {...params} label="Top-tier Agency" 
                        style={{width: 300}}  />}
                />
                <TextField label="Number of Results" onChange={maxResultsHandler} value={maxResults}></TextField>
                <Button type="submit" variant="outlined">Apply</Button>
            </form>
        </>
    );
}

export default AwardFilterForm; 