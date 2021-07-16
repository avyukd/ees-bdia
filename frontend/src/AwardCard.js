import { Typography, Card, CardContent, Container } from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//props contains one object: awardInfo
//all elements accessed using props.awardInfo['COL_NAME']
const urlValidate = url => {
    if(url === null){
        return "";
    }
    if(url.substring(0,4)!=="http"){
        return "http://"+url;
    }else{
        return url; 
    }
}

const AwardCard = props => {

    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant="h5"><a href={urlValidate(props.awardInfo["Company Information"].url)}>
                        {props.awardInfo["Recipient Name"]}</a></Typography>
                    <Typography> <b>Award Amount:</b> ${Number(props.awardInfo["Award Amount"]).toLocaleString()}</Typography>
                    <Typography> <b>Agency:</b> {props.awardInfo["Awarding Agency"]}, {props.awardInfo["Awarding Sub Agency"]}</Typography>
                    <Typography><b>Period of Performance:</b> {props.awardInfo["Start Date"]} to {props.awardInfo["End Date"]}</Typography>
                    <Typography><b>Award ID:</b> {props.awardInfo["Award ID"]}</Typography>
                    <Typography><b>Description:</b> {props.awardInfo["Description"].substring(0,250)}</Typography>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}>
                            <Typography>Company Details</Typography>
                        </AccordionSummary>
                    <AccordionDetails>
                        <Container>
                            <Typography><b>Socio-economic Status:</b> {props.awardInfo["Company Information"]["socio_economic_status"].join(", ")}</Typography>
                            <Typography><b>Primary NAICS:</b> {props.awardInfo["Company Information"]["primary_NAICS"]}</Typography>
                            <Typography><b>Point of Contact:</b> {props.awardInfo["Company Information"]["Contact Person:"]}</Typography>
                            <Typography><b>POC Email:</b> {props.awardInfo["Company Information"]["E-mail Address:"]}</Typography>
                            <Typography><b>Capabilities Narrative:</b> {props.awardInfo["Company Information"]["Capabilities Narrative"]}</Typography>
                            <Typography><b>GSA Contract Number:</b> {props.awardInfo["Company Information"]["GSA Advantage Contract(s):"]}</Typography>
                            <Typography><b>8(a) Start:</b> {props.awardInfo["Company Information"]["sba_8a_entrance"]}</Typography>
                            <Typography><b>8(a) End:</b> {props.awardInfo["Company Information"]["sba_8a_exit"]}</Typography>
                        </Container>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Past Performance</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Container>
                            {props.awardInfo["Company Information"]["References"].map(
                                (el) => {
                                    return (
                                        <>
                                            <Typography variant="h6"><b>Contract Name:</b> {el["Contract:"]}</Typography>
                                            <Typography><b>Agency:</b> {el["Name:"]}</Typography>
                                            <Typography><b>Start:</b> {el["Start:"]}</Typography>
                                            <Typography><b>End:</b> {el["End:"]}</Typography>
                                            <Typography><b>Value:</b> {el["Value:"]}</Typography>
                                            <Typography><b>Contact:</b> {el["Contact:"]}</Typography>
                                            <Typography><b>Phone:</b> {el["Phone:"]}</Typography>
                                        </>
                                    );
                                }
                            )}
                            </Container>
                        </AccordionDetails>
                </Accordion>
                </CardContent>
            </Card>
        </>
    );
}

export default AwardCard;

/*  {
        (props.awardInfo["SAM Company Information"] !== undefined) &&
        getPointsOfContactJSX(props.awardInfo["SAM Company Information"][0].pointsOfContact)
    }
*/