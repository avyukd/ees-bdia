import { Typography, Card, CardContent, Container } from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//props contains one object: awardInfo
//all elements accessed using props.awardInfo['COL_NAME']
const urlValidate = url => {
    if(url.substring(0,4)!=="http"){
        return "http://"+url;
    }else{
        return url; 
    }
}

const AwardCard = props => {

    /*const getPointsOfContactJSX = obj => {
        const keys = ["governmentBusinessPOC","pastPerformancePOC","electronicBusinessPOC",
            "electronicBusinessAlternatePOC", "governmentBusinessAlternatePOC","pastPerformanceAlternatePOC"]
        let elements = []
        for(const key of keys){
            if(obj[key].firstName !== null){
                elements.push(
                    <Typography>{key}: {obj[key].firstName} {obj[key].lastName}, {obj[key].title}</Typography>
                )
            }
        }
        return (<div>{elements}</div>);
    }*/

    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant="h5"><a href={urlValidate(props.awardInfo["SAM Company Information"][0].coreData.entityInformation.entityURL)}>
                        {props.awardInfo["Recipient Name"]}</a></Typography>
                    <Typography> <b>Award Amount:</b> ${Number(props.awardInfo["Award Amount"]).toLocaleString()}</Typography>
                    <Typography> <b>Agency:</b> {props.awardInfo["Awarding Agency"]}, {props.awardInfo["Awarding Sub Agency"]}</Typography>
                    <Typography><b>Period of Performance:</b> {props.awardInfo["Start Date"]} to {props.awardInfo["End Date"]}</Typography>
                    <Typography><b>Award ID:</b> {props.awardInfo["Award ID"]}</Typography>
                    <Typography><b>Description:</b> {props.awardInfo["Description"].substring(0,250)}</Typography>
                    <Typography><a href={props.awardInfo["SBA Company Information"].link}>View SBA Profile</a></Typography>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}>
                            <Typography>View More</Typography>
                        </AccordionSummary>
                    <AccordionDetails>
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