import axios from "axios";
const myBaseURL = axios.create({
  baseURL: "http://172.16.10.63/1/",
  // baseURL: "https://gsmaf.gov.mn/1/",
});

export default myBaseURL;
