import Axios from "axios";

// Send a POST request
const Api = Axios({
  url: "http://localhost:3001",
});

export default Api;
