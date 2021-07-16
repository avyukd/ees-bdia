const agencies = [
    {
        "name": "Department of Agriculture",
        "toptier_agency_id": 14,
        "toptier_code": "012"
    },
    {
        "name": "Department of Commerce",
        "toptier_agency_id": 15,
        "toptier_code": "013"
    },
    {
        "name": "Department of Defense",
        "toptier_agency_id": 126,
        "toptier_code": "097"
    },
    {
        "name": "Department of Education",
        "toptier_agency_id": 80,
        "toptier_code": "091"
    },
    {
        "name": "Department of Energy",
        "toptier_agency_id": 78,
        "toptier_code": "089"
    },
    {
        "name": "Department of Health and Human Services",
        "toptier_agency_id": 68,
        "toptier_code": "075"
    },
    {
        "name": "Department of Homeland Security",
        "toptier_agency_id": 63,
        "toptier_code": "070"
    },
    {
        "name": "Department of Housing and Urban Development",
        "toptier_agency_id": 76,
        "toptier_code": "086"
    },
    {
        "name": "Department of Justice",
        "toptier_agency_id": 17,
        "toptier_code": "015"
    },
    {
        "name": "Department of Labor",
        "toptier_agency_id": 18,
        "toptier_code": "1601"
    },
    {
        "name": "Department of State",
        "toptier_agency_id": 21,
        "toptier_code": "019"
    },
    {
        "name": "Department of the Interior",
        "toptier_agency_id": 16,
        "toptier_code": "014"
    },
    {
        "name": "Department of the Treasury",
        "toptier_agency_id": 22,
        "toptier_code": "020"
    },
    {
        "name": "Department of Transportation",
        "toptier_agency_id": 62,
        "toptier_code": "069"
    },
    {
        "name": "Department of Veterans Affairs",
        "toptier_agency_id": 37,
        "toptier_code": "036"
    },
    {
        "name": "Environmental Protection Agency",
        "toptier_agency_id": 61,
        "toptier_code": "068"
    },
    {
        "name": "General Services Administration",
        "toptier_agency_id": 40,
        "toptier_code": "047"
    },
    {
        "name": "National Aeronautics and Space Administration",
        "toptier_agency_id": 72,
        "toptier_code": "080"
    },
    {
        "name": "National Science Foundation",
        "toptier_agency_id": 46,
        "toptier_code": "049"
    },
    {
        "name": "Nuclear Regulatory Commission",
        "toptier_agency_id": 31,
        "toptier_code": "031"
    },
    {
        "name": "Office of Personnel Management",
        "toptier_agency_id": 24,
        "toptier_code": "024"
    },
    {
        "name": "Small Business Administration",
        "toptier_agency_id": 66,
        "toptier_code": "073"
    },
    {
        "name": "Social Security Administration",
        "toptier_agency_id": 28,
        "toptier_code": "028"
    },
    {
        "name": "Agency for International Development",
        "toptier_agency_id": 65,
        "toptier_code": "072"
    },
    {
        "name": "Access Board",
        "toptier_agency_id": 102,
        "toptier_code": "310"
    },
    {
        "name": "Administrative Conference of the U.S.",
        "toptier_agency_id": 92,
        "toptier_code": "302"
    },
    {
        "name": "Advisory Council on Historic Preservation",
        "toptier_agency_id": 100,
        "toptier_code": "306"
    },
    {
        "name": "African Development Foundation",
        "toptier_agency_id": 198,
        "toptier_code": "166"
    },
    {
        "name": "American Battle Monuments Commission",
        "toptier_agency_id": 67,
        "toptier_code": "074"
    },
    {
        "name": "Appalachian Regional Commission",
        "toptier_agency_id": 129,
        "toptier_code": "309"
    },
    {
        "name": "Armed Forces Retirement Home",
        "toptier_agency_id": 75,
        "toptier_code": "084"
    },
    {
        "name": "Barry Goldwater Scholarship and Excellence In Education Foundation",
        "toptier_agency_id": 114,
        "toptier_code": "313"
    },
    {
        "name": "Commission for the Preservation of America's Heritage Abroad",
        "toptier_agency_id": 139,
        "toptier_code": "321"
    },
    {
        "name": "Commission of Fine Arts",
        "toptier_agency_id": 105,
        "toptier_code": "323"
    },
    {
        "name": "Commission on Civil Rights",
        "toptier_agency_id": 94,
        "toptier_code": "326"
    },
    {
        "name": "Committee for Purchase from People Who Are Blind or Severely Disabled",
        "toptier_agency_id": 95,
        "toptier_code": "338"
    },
    {
        "name": "Commodity Futures Trading Commission",
        "toptier_agency_id": 85,
        "toptier_code": "339"
    },
    {
        "name": "Consumer Financial Protection Bureau",
        "toptier_agency_id": 113,
        "toptier_code": "581"
    },
    {
        "name": "Consumer Product Safety Commission",
        "toptier_agency_id": 56,
        "toptier_code": "061"
    },
    {
        "name": "Corporation for National and Community Service",
        "toptier_agency_id": 121,
        "toptier_code": "485"
    },
    {
        "name": "Corps of Engineers - Civil Works",
        "toptier_agency_id": 128,
        "toptier_code": "096"
    },
    {
        "name": "Court Services and Offender Supervision Agency",
        "toptier_agency_id": 200,
        "toptier_code": "9553"
    },
    {
        "name": "Defense Nuclear Facilities Safety Board",
        "toptier_agency_id": 93,
        "toptier_code": "347"
    },
    {
        "name": "Delta Regional Authority",
        "toptier_agency_id": 111,
        "toptier_code": "517"
    },
    {
        "name": "Denali Commission",
        "toptier_agency_id": 120,
        "toptier_code": "513"
    },
    {
        "name": "District of Columbia Courts",
        "toptier_agency_id": 168,
        "toptier_code": "349"
    },
    {
        "name": "Election Assistance Commission",
        "toptier_agency_id": 97,
        "toptier_code": "525"
    },
    {
        "name": "Equal Employment Opportunity Commission",
        "toptier_agency_id": 39,
        "toptier_code": "045"
    },
    {
        "name": "Executive Office of the President",
        "toptier_agency_id": 9,
        "toptier_code": "1100"
    },
    {
        "name": "Export-Import Bank of the United States",
        "toptier_agency_id": 74,
        "toptier_code": "083"
    },
    {
        "name": "Farm Credit System Insurance Corporation",
        "toptier_agency_id": 71,
        "toptier_code": "7802"
    },
    {
        "name": "Federal Communications Commission",
        "toptier_agency_id": 27,
        "toptier_code": "027"
    },
    {
        "name": "Federal Deposit Insurance Corporation",
        "toptier_agency_id": 49,
        "toptier_code": "051"
    },
    {
        "name": "Federal Election Commission",
        "toptier_agency_id": 84,
        "toptier_code": "360"
    },
    {
        "name": "Federal Financial Institutions Examination Council",
        "toptier_agency_id": 116,
        "toptier_code": "362"
    },
    {
        "name": "Federal Housing Finance Agency",
        "toptier_agency_id": 108,
        "toptier_code": "9566"
    },
    {
        "name": "Federal Labor Relations Authority",
        "toptier_agency_id": 51,
        "toptier_code": "054"
    },
    {
        "name": "Federal Maritime Commission",
        "toptier_agency_id": 60,
        "toptier_code": "065"
    },
    {
        "name": "Federal Mediation and Conciliation Service",
        "toptier_agency_id": 81,
        "toptier_code": "093"
    },
    {
        "name": "Federal Mine Safety and Health Review Commission",
        "toptier_agency_id": 83,
        "toptier_code": "368"
    },
    {
        "name": "Federal Trade Commission",
        "toptier_agency_id": 29,
        "toptier_code": "029"
    },
    {
        "name": "Government Accountability Office",
        "toptier_agency_id": 5,
        "toptier_code": "005"
    },
    {
        "name": "Gulf Coast Ecosystem Restoration Council",
        "toptier_agency_id": 103,
        "toptier_code": "471"
    },
    {
        "name": "Harry S Truman Scholarship Foundation",
        "toptier_agency_id": 87,
        "toptier_code": "372"
    },
    {
        "name": "Institute of Museum and Library Services",
        "toptier_agency_id": 136,
        "toptier_code": "474"
    },
    {
        "name": "Inter-American Foundation",
        "toptier_agency_id": 199,
        "toptier_code": "164"
    },
    {
        "name": "International Trade Commission",
        "toptier_agency_id": 36,
        "toptier_code": "034"
    },
    {
        "name": "James Madison Memorial Fellowship Foundation",
        "toptier_agency_id": 107,
        "toptier_code": "381"
    },
    {
        "name": "Japan-United States Friendship Commission",
        "toptier_agency_id": 89,
        "toptier_code": "382"
    },
    {
        "name": "John F. Kennedy Center for the Performing Arts",
        "toptier_agency_id": 34,
        "toptier_code": "3301"
    },
    {
        "name": "Library of Congress",
        "toptier_agency_id": 3,
        "toptier_code": "003"
    },
    {
        "name": "Marine Mammal Commission",
        "toptier_agency_id": 90,
        "toptier_code": "387"
    },
    {
        "name": "Merit Systems Protection Board",
        "toptier_agency_id": 38,
        "toptier_code": "389"
    },
    {
        "name": "Millennium Challenge Corporation",
        "toptier_agency_id": 109,
        "toptier_code": "524"
    },
    {
        "name": "Morris K. Udall and Stewart L. Udall Foundation",
        "toptier_agency_id": 110,
        "toptier_code": "487"
    },
    {
        "name": "National Archives and Records Administration",
        "toptier_agency_id": 77,
        "toptier_code": "088"
    },
    {
        "name": "National Capital Planning Commission",
        "toptier_agency_id": 82,
        "toptier_code": "394"
    },
    {
        "name": "National Council on Disability",
        "toptier_agency_id": 130,
        "toptier_code": "413"
    },
    {
        "name": "National Credit Union Administration",
        "toptier_agency_id": 25,
        "toptier_code": "025"
    },
    {
        "name": "National Endowment for the Arts",
        "toptier_agency_id": 53,
        "toptier_code": "417"
    },
    {
        "name": "National Endowment for the Humanities",
        "toptier_agency_id": 54,
        "toptier_code": "418"
    },
    {
        "name": "National Gallery of Art",
        "toptier_agency_id": 35,
        "toptier_code": "3302"
    },
    {
        "name": "National Labor Relations Board",
        "toptier_agency_id": 58,
        "toptier_code": "420"
    },
    {
        "name": "National Mediation Board",
        "toptier_agency_id": 98,
        "toptier_code": "421"
    },
    {
        "name": "National Transportation Safety Board",
        "toptier_agency_id": 86,
        "toptier_code": "424"
    },
    {
        "name": "Northern Border Regional Commission",
        "toptier_agency_id": 144,
        "toptier_code": "573"
    },
    {
        "name": "Nuclear Waste Technical Review Board",
        "toptier_agency_id": 45,
        "toptier_code": "431"
    },
    {
        "name": "Occupational Safety and Health Review Commission",
        "toptier_agency_id": 91,
        "toptier_code": "432"
    },
    {
        "name": "Office of Government Ethics",
        "toptier_agency_id": 112,
        "toptier_code": "434"
    },
    {
        "name": "Office of Special Counsel",
        "toptier_agency_id": 57,
        "toptier_code": "062"
    },
    {
        "name": "Overseas Private Investment Corporation",
        "toptier_agency_id": 64,
        "toptier_code": "071"
    },
    {
        "name": "Peace Corps",
        "toptier_agency_id": 12,
        "toptier_code": "1125"
    },
    {
        "name": "Pension Benefit Guaranty Corporation",
        "toptier_agency_id": 19,
        "toptier_code": "1602"
    },
    {
        "name": "Privacy and Civil Liberties Oversight Board",
        "toptier_agency_id": 99,
        "toptier_code": "535"
    },
    {
        "name": "Railroad Retirement Board",
        "toptier_agency_id": 55,
        "toptier_code": "060"
    },
    {
        "name": "Securities and Exchange Commission",
        "toptier_agency_id": 47,
        "toptier_code": "050"
    },
    {
        "name": "Selective Service System",
        "toptier_agency_id": 79,
        "toptier_code": "090"
    },
    {
        "name": "Smithsonian Institution",
        "toptier_agency_id": 32,
        "toptier_code": "3300"
    },
    {
        "name": "Surface Transportation Board",
        "toptier_agency_id": 135,
        "toptier_code": "472"
    },
    {
        "name": "The Council of the Inspectors General on Integrity and Efficiency",
        "toptier_agency_id": 88,
        "toptier_code": "542"
    },
    {
        "name": "The Judicial Branch",
        "toptier_agency_id": 8,
        "toptier_code": "010"
    },
    {
        "name": "U.S. Agency for Global Media",
        "toptier_agency_id": 118,
        "toptier_code": "514"
    },
    {
        "name": "U.S. Chemical Safety & Hazard Investigation Board",
        "toptier_agency_id": 117,
        "toptier_code": "510"
    },
    {
        "name": "U.S. Interagency Council on Homelessness",
        "toptier_agency_id": 44,
        "toptier_code": "376"
    },
    {
        "name": "U.S. International Development Finance Corporation",
        "toptier_agency_id": 196,
        "toptier_code": "077"
    },
    {
        "name": "U.S. Postal Service",
        "toptier_agency_id": 20,
        "toptier_code": "018"
    },
    {
        "name": "United States Court of Appeals for Veterans Claims",
        "toptier_agency_id": 124,
        "toptier_code": "345"
    },
    {
        "name": "United States Institute of Peace",
        "toptier_agency_id": 122,
        "toptier_code": "458"
    },
    {
        "name": "United States Trade and Development Agency",
        "toptier_agency_id": 13,
        "toptier_code": "1133"
    },
    {
        "name": "Vietnam Education Foundation",
        "toptier_agency_id": 131,
        "toptier_code": "519"
    },
    {
        "name": "Woodrow Wilson International Center for Scholars",
        "toptier_agency_id": 33,
        "toptier_code": "3303"
    }
]

export default agencies; 
