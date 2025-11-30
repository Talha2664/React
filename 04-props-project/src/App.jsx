import Card from "./Components/Card"

const App = () => {
  const jobs = [
  {
    brandLogo: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png",
    companyName: "Amazon",
    posted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part-Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Pakistan, Gujranwala"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    companyName: "Apple",
    posted: "2 days ago",
    post: "iOS App Developer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$150/hr",
    location: "Pakistan, Lahore"
  },
  {
    brandLogo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png",
    companyName: "Google",
    posted: "1 day ago",
    post: "Backend Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$180/hr",
    location: "Pakistan, Karachi"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2021/04/Microsoft-logo.png",
    companyName: "Microsoft",
    posted: "3 days ago",
    post: "Cloud Engineer (Azure)",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$140/hr",
    location: "Pakistan, Islamabad"
  },
  {
    brandLogo: "https://logo.svgcdn.com/logos/meta.png",
    companyName: "Meta",
    posted: "6 days ago",
    post: "React.js Developer",
    tag1: "Hybrid",
    tag2: "Mid Level",
    pay: "$160/hr",
    location: "Pakistan, Rawalpindi"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logo.wine.png",
    companyName: "Tesla",
    posted: "4 hours ago",
    post: "Software Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$200/hr",
    location: "Pakistan, Faisalabad"
  },
  {
    brandLogo: "https://logo.svgcdn.com/logos/netflix.png",
    companyName: "Netflix",
    posted: "8 days ago",
    post: "Frontend Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$170/hr",
    location: "Pakistan, Multan"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo.png",
    companyName: "Samsung",
    posted: "12 hours ago",
    post: "Full Stack Developer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$130/hr",
    location: "Pakistan, Sialkot"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2021/05/Intel-logo.png",
    companyName: "Intel",
    posted: "7 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Onsite",
    tag2: "Senior Level",
    pay: "$190/hr",
    location: "Pakistan, Hyderabad"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "IBM",
    posted: "10 days ago",
    post: "Cybersecurity Analyst",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$175/hr",
    location: "Pakistan, Peshawar"
  }
];
// I can create this array which contain 10 objects each of them has some properties 
// If another object created without changing the code it creates another component 
  return (
    <div className="parent">
       {jobs.map((val,idx) => {                        //This map provide me all objects properties
        return <Card 
        logo = {val.brandLogo}                // variable = val.key  (.key is used to access object val) 
        companyName = {val.companyName}
        post = {val.post}
        postDate = {val.posted}
        tag1 = {val.tag1}
        tag2 = {val.tag2}
        pay = {val.pay}
        location = {val.location}
        />
      })}
    </div>
  )
}
export default App

{/* <Card companyName = "Amazon"/ level = "senior Developer"> */} 

//  I can also add different data in components in this way but this is not suggested 
// because we can change it manually one by one