import { TextField, Typography, Button, Fab, Container } from '@material-ui/core';
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';

const UploadFileForm = props => {
    
    const [enteredFilename, setEnteredFilename] = useState("No file selected");

    const handleFileUpload = (event) => {
        setEnteredFilename(event.target.files[0].name);
        console.log(event.target.files)
        props.onSubmit({
            filename: event.target.value
        });
    }


    return (
        <>
            <Container>
                <Button
                    variant="contained"
                    component="label"
                    onChange={handleFileUpload}
                >
                    Upload File
                    <input
                        type="file"
                        hidden
                    />
                </Button>
                <Typography>{enteredFilename}</Typography>
            </Container>
        </>
    );
}

export default UploadFileForm;