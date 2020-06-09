import axios from "axios";
let host = "/juhe";
export default {
  calendarDay(date) {
    return axios({
      url: `${host}/calendar/day`,
      method: "get",
      params: {
        date: date,
        key: "54ad42f0d1d4fa1b166ca0dd0341f80d",
      },
    });
  },
};
