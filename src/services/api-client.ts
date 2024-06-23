import axios from "axios";

export default axios.create({
   baseURL: "https://api.rawg.io/api",
   params: {
      key: "bb96c5f098db4270bfcf967ea77c1dcc",
   },
});
