import axios from "axios";
import {Container, Grid, Card, Typography, Divider} from '@material-ui/core';
import { useEffect, useState } from "react";
import request_default_obj from "./request_default";
import AwardCard from "./AwardCard";
import AwardFilterForm from "./AwardFilterForm";
import keys from "./keys";
import UploadFileForm from "./UploadFileForm";

const AWARD_SEARCH_REQUEST_URL = "https://api.usaspending.gov/api/v2/search/spending_by_award/";
//const ENTITY_SEARCH_URL = "https://api.sam.gov/entity-information/v2/entities";
//const SBA_SEARCH_URL = "https://web.sba.gov/pro-net/search/dsp_profile.cfm";
const COMPANYINFO_URL = "http://127.0.0.1:5000/api/company_info"
//const COMPANYINFO_URL = "https://ees-bdia-backend.herokuapp.com/api/company_info"

async function searchCallback(response){

}

const App = () => {
  const [searchResponseObj, setSearchResponseObj] = useState({"results":[]});
  const [filterDataObj, setFilterDataObj] = useState({});
  const [loading, setLoading] = useState(false);
  const [maxResults, setMaxResults] = useState(5);
  const [sentences, setSentences] = useState([]);

  const retrieveFilter = data => {
    console.log(data)
    request_default_obj.filters.keywords = data.keywords.split(", ");
    request_default_obj.filters.agencies = data.agencies;
    const newRDO = {...request_default_obj}
    console.log(newRDO);
    setFilterDataObj(newRDO);
    setLoading(true);
    setMaxResults(parseInt(data.maxNumberOfResults));
  }

  const retrieveParsedContent = data => {
    setSentences(data.sentences);
  }

  //request for sba example: https://web.sba.gov/pro-net/search/dsp_profile.cfm?DUNS=831761957
  let cnt = 0;
  useEffect(() => {
    if(filterDataObj != {}){
      axios.post(AWARD_SEARCH_REQUEST_URL, filterDataObj).then(async (response) => {
        let filteredAwards = {"results":[]}
        console.log(response.data.results);
        for(const award of response.data.results){
          //const DUNS = award["Recipient DUNS Number"];
          const name = award["Recipient Name"];
          console.log(award);
          const Company_info_response = await axios.get(COMPANYINFO_URL, {
            params : {
              "name" : name,
              "api_key": keys.SAM_API_KEY
            }
          })
          
          console.log("Response data", Company_info_response.data);
          award["Company Information"] = Company_info_response.data;
          if(Object.keys(Company_info_response.data).length !== 0){
            filteredAwards.results.push(award);
          }
          cnt++;
          if(cnt >= maxResults){
            break;
          }
        }
        //console.log(response.data);
        setSearchResponseObj(filteredAwards);
        setLoading(false);
      })
    }
    
  },[filterDataObj])

  return (
    <div>
      <Grid container alignContent="center">
          {/* <Grid item sm={6}>
            <UploadFileForm onSubmit={retrieveParsedContent}/>
            {
              sentences.length > 0 ?
              sentences.map((sentence) => (<Card><Typography variant="body2">{sentence}</Typography></Card>)) : 
              ""
            }
          </Grid> */}
          <Grid item sm={6}>
            <Container>
              <AwardFilterForm onSubmit={retrieveFilter}/>
            </Container>
            <Container>
              {
                loading ? 
                "Loading..." :
                searchResponseObj.results.length > 0 ?
                searchResponseObj.results.map((el) =>
                  (<div><AwardCard awardInfo={el}/></div>)
                ) : "No results."
              }
            </Container>
          </Grid>
      </Grid>
    </div>
  );

}

export default App;
