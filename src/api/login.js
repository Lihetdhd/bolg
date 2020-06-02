import axios from "axios";
let host = "/api";
export default {
  //登录
  getToken(params) {
    return axios({
      url: `${host}/login/cellphone`,
      method: "post",
      data: params,
    });
  },
  //注销
  logOut() {
    return axios({
      url: `${host}/logout`,
      method: "get",
    });
  },
};
