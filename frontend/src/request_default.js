const request_default_obj={
    "limit":100,
    "fields":["Award ID",
          "Recipient Name",
          "Start Date",
          "End Date",
          "Award Amount",
          "Awarding Agency",
          "Awarding Sub Agency",
          "Contract Award Type",
          "Award Type",
          "Funding Agency",
          "Funding Sub Agency",
           "Period of Performance Current End Date",
            "Period of Performance Start Date",
            "Place of Performance City Code",
            "Place of Performance Country Code",
            "Place of Performance State Code",
              "Recipient DUNS Number",
              "Description"
        ],
    "filters":{
        "keywords": [],
        "time_period": [
            {
                "start_date": "2007-12-31",
                "end_date": "2021-07-05"
            }
        ],
        "naics_codes": [
            "518210",
            "541511",
            "541512",
            "541513",
            "541519",
            "611420"
        ],
        "award_type_codes":[
            "A",
            "B",
            "C",
            "D"
        ],
        "award_amounts": [{
            "lower_bound":50000
        }]
    }
  }

  export default request_default_obj;
  