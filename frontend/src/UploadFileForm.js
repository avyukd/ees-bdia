import { TextField, Typography, Button, Fab, Container } from '@material-ui/core';
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import axios from "axios";

const POST_URL = "http://127.0.0.1:5000/api/parser"

const UploadFileForm = props => {
    
    const [enteredFile, setEnteredFile] = useState(null);

    const handleFileChange = (event) => {
        setEnteredFile(event.target.files[0]);
    };

    const handleFileUpload = (event) => {
        const formData = new FormData();    
        formData.append(
            "uploadedFile",
            enteredFile,
            enteredFile.name
        );
        console.log(enteredFile);
        axios.post(POST_URL, formData).then(
            (res) => {
                props.onSubmit(
                    {
                        sentences : res.data.sentences
                    }
                );
            }
        );
    }


    return (
        <>
            <Container>
                <Button
                    variant="contained"
                    component="label"
                >
                    Select File
                    <input
                        type="file"
                        onChange={handleFileChange}
                        hidden
                    />
                </Button>
                <Typography>{enteredFile && <span>{enteredFile.name}</span>}</Typography>
                <Button
                    variant="contained"
                    onClick={handleFileUpload}>Upload File</Button>
            </Container>
        </>
    );
}

export default UploadFileForm;