import {TextField, Typography, Button} from '@material-ui/core';
import { PinDropSharp } from '@material-ui/icons';
import { useState } from 'react';

const AwardFilterForm = props => {
    const [enteredKeywords, setEnteredKeywords] = useState("");

    const keywordHandler = event => (setEnteredKeywords(event.target.value));
    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(enteredKeywords);
        props.onSubmit({
            keywords : enteredKeywords
        })
    }

    return (
        <>
            <form onSubmit={formSubmitHandler}>
                <TextField label="Keywords" onChange={keywordHandler}></TextField>
                <Button type="submit" variant="outlined">Apply</Button>
            </form>
        </>
    );
}

export default AwardFilterForm; 