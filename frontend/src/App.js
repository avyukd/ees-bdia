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

const COMPANYINFO_URL = "http://127.0.0.1:5000/api/company_info"

async function searchCallback(response){

}

const App = () => {

  const [searchResponseObj, setSearchResponseObj] = useState({"results":[]});
  const [filterDataObj, setFilterDataObj] = useState({});
  const [loading, setLoading] = useState(false);

  const retrieveFilter = data => {
    console.log(data)
    request_default_obj.filters.keywords = data.keywords.split(", ");
    const newRDO = {...request_default_obj}
    setFilterDataObj(newRDO);
    setLoading(true);
  }
  //request for sba example: https://web.sba.gov/pro-net/search/dsp_profile.cfm?DUNS=831761957
  const maxResults = 5;
  let cnt = 0;
  useEffect(() => {
    if(filterDataObj != {}){
      axios.post(AWARD_SEARCH_REQUEST_URL, filterDataObj).then(async (response) => {
        let filteredAwards = {"results":[]}
        for(const award of response.data.results){
          const DUNS = award["Recipient DUNS Number"];

          const Company_info_response = await axios.get(COMPANYINFO_URL, {
            params : {
              "duns" : DUNS,
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
      <Container>
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
      </Container>
    </div>
  );

}

export default App;
