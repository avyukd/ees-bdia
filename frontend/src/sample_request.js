const sample_request_data={
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
        "time_period": [
            {
                "start_date": "2008-01-01",
                "end_date": "2020-01-01"
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

  export default sample_request_data;
  