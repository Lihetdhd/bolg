import axios from "axios";
import router from "../../router";

//axios配置

axios.defaults.timeout = 100000; //请求超时时间
axios.defaults.withCredentials = true; //允许跨域携带 Cookie
