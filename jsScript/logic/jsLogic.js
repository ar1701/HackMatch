let total = 0;
const jsonData = {
          "skills": ["JavaScript", "Python", "HTML", "CSS"],
          "project": [
            {
              "summary": ["Developed a website for a local business"],
              "link": ["https://example.com"],
              "stacks": ["HTML", "CSS", "JavaScript"]
            }
          ],
          "internship": [
            {
              "stacks":["Python", "Django"],
              "company":["ABC Tech"],
              "duration":["3 months"],
              "summary":["Worked on developing web applications"]
            }
          ],
          "hackathon": [
            {
              "summary": ["Participated in a hackathon and developed a chat application"],
              "gitLink": ["https://github.com/example/chat-app"],
              "stacks": ["Node.js", "Socket.io"]
            }
          ],
          "work/experience": [
            {
              "company_club":["XYZ Company","abc company"],
              "summary": ["Worked as a software developer"],
              "role": ["Full-stack Developer"],
              "duration": ["1 year","3 months"]
            }
          ],
          "certificates": ["JavaScript Basics", "Python Programming"]
        };
let rating = 0;
        const topCompanies=[ "Facebook", "Amazon", "Apple", "Netflix" ,"Google", "Alphabet","Youtube","Meta"];
        const midCompanies = [
          "Microsoft",
          "Tower Research Capital",
          "Oracle",
          "Salesforce",
          "Adobe",
          "ServiceNow",
          "PayPal",
          "Indeed",
          "Intuit",
          "Goldman Sachs",
          "J.P Morgan Chase",
          "SAP",
          "VISA",
          "Flipkart",
          "Walmart Global Tech",
          "Citrix",
          "Cisco",
          "Uber",
          "IBM",
          "Informatica",
          "Sabre",
          "Swiggy",
          "VMWare",
          "LinkedIn",
          "Nutanix",
          "Licious",
          "Expedia",
          "Groupon",
          "DE Shaw",
          "Arcesium",
          "Nvidia",
          "Morgan Stanley",
          "Wells Fargo",
          "Cure.fit",
          "Pharmeasy",
          "Myntra",
          "PhonePe",
          "Urban Company",
          "Ajio",
          "Zomato",
          "Delhivery",
          "Oyo",
          "Zynga",
          "Juniper",
          "Boeing",
          "Tesco",
          "Arista",
          "ClearTax",
          "Target",
          "MathWorks",
          "InMobi",
          "Qualcomm",
          "Paytm",
          "MasterCard",
          "f5",
          "IHS Markit",
          "BrowserStack",
          "ION",
          "Citi",
          "Cadence",
          "MindTickle",
          "Gartner",
          "Deutsche Bank",
          "TCS",
          "Academor",
          "Air India",
          "Accenture",
          "Intellect",
          "Visteon",
          "OBurst",
          "Tata elxsi",

        ];
        
        let priority={"companies":[],
                       "durations":[]
                       }
const myMap = new Map();
let arr1=[];
let arr2=[];

for (const key in jsonData) {
  if(key == "certificates")break;
  if (key === "work/experience") {
    arr1=jsonData[key][0].company_club;
    arr2=jsonData[key][0].duration;
    priority.companies = [...arr1,...priority.companies] ;
    priority.durations = [...arr2,...priority.durations];
  }
  if (key === "internship") {
    arr1=jsonData[key][0].company;
    arr2=jsonData[key][0].duration;
    priority.companies = [...arr1] ;
    priority.durations = [...arr2];
  }
  if (key === "skills") {
    for (let item in jsonData[key]) {
      myMap[jsonData[key][item]] = 0.5;
      total+=0.5;
    }
  } else {
    for (let item in jsonData[key]) {
      for (let i in jsonData[key][item].stacks){
        const currItem = (jsonData[key][item].stacks[i]);
        if (myMap.hasOwnProperty(currItem)) {
        myMap[currItem] += 1;
        total+=1;
      } else {
        myMap[currItem] = 1;
        total+=1;
      }
      }
      
    }
  }
}

console.log(myMap);
console.log("total: ",total);
console.log(priority);

let priorRank=0;
 for(let i=0;i<priority.companies.length;i++){
  const foundTop =topCompanies.find(item => item === priority.companies[i]);
  const foundMid =topCompanies.find(item => item === priority.companies[i]);
  if(foundTop)priorRank+=3;
  else if(foundMid)priorRank+=2;
  else priorRank+=1;
  if(priority.durations[i]<=12)priorRank+=1;
  else priorRank+=(priority.durations[i]/12);
 }
 console.log("priorRank : ",priorRank);