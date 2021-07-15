import axios from "axios";
import {Container, Grid, Card, Typography} from '@material-ui/core';
import { useEffect, useState } from "react";
import request_default_obj from "./request_default";
import AwardCard from "./AwardCard";
import AwardFilterForm from "./AwardFilterForm";
import keys from "./keys";

const AWARD_SEARCH_REQUEST_URL = "https://api.usaspending.gov/api/v2/search/spending_by_award/";

const ENTITY_SEARCH_URL = "https://api.sam.gov/entity-information/v2/entities";

const SBA_SEARCH_URL = "https://web.sba.gov/pro-net/search/dsp_profile.cfm";

async function searchCallback(response){

}

const App = () => {

  const [searchResponseObj, setSearchResponseObj] = useState({"results":[]});
  const [filterDataObj, setFilterDataObj] = useState({});

  const retrieveFilter = data => {
    console.log(data)
    request_default_obj.filters.keywords = data.keywords.split(", ");
    const newRDO = {...request_default_obj}
    setFilterDataObj(newRDO);
  }
  //request for sba example: https://web.sba.gov/pro-net/search/dsp_profile.cfm?DUNS=831761957
  useEffect(() => {
    if(filterDataObj != {}){
      console.log("In useEffect!")
      axios.post(AWARD_SEARCH_REQUEST_URL, filterDataObj).then(async (response) => {
        
        for(const award of response.data.results){
          const DUNS = award["Recipient DUNS Number"];
          
          const SAM_entity_search_response = await axios.get(ENTITY_SEARCH_URL, {
            params : {
              "api_key" : keys.SAM_API_KEY,
              "ueiDUNS" : DUNS
            }
          })

          /*const SBA_entity_search_response = await axios.get(SBA_SEARCH_URL, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Access-Control-Allow-Origin': '*'
            },
            params : {
              "DUNS" : DUNS
            }
          })*/

          //console.log(SBA_entity_search_response);
          
          award["SAM Company Information"] = SAM_entity_search_response.data.entityData;
          award["SBA Company Information"] = {link : SBA_SEARCH_URL+"?DUNS="+DUNS}
          //SBA_entity_search_response;
        }
        console.log(response.data);
        setSearchResponseObj(response.data);
      })
    }
    
  },[filterDataObj])

  return (
    <div>
      <Container>
        <Container>
          <AwardFilterForm onSubmit={retrieveFilter}/>
        </Container>
        <Container>
          {
            searchResponseObj.results.map((el) =>
              (<div><AwardCard awardInfo={el}/></div>)
            )
          }
        </Container>
      </Container>
    </div>
  );

}

export default App;
