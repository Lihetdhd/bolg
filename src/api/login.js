import axios from "axios";
let host = "/api";
export default {
  getToken(params) {
    return axios({
      url: `${host}/login/cellphone`,
      method: "post",
      data: params,
    });
  },
};
