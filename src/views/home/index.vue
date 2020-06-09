<template>
  <div class="home">
    <div>
      <div class="calendar_content">
        <div class="calendar_day">
          <div class="calendar_day_top">
            {{today}}
          </div>
          <div class="calendar_day_content">
            <p class="today">{{day}}</p>
            <p class="lunar">{{calendarDayData.lunar}}</p>
          </div>
        </div>
        <div class="calendar">
          <div class="calendar_week">
            <span v-for="item in week"
                  :key="item.name">{{ item.name }}</span>
          </div>
          <div class="day_box">
            <div class="day"
                 v-for="(time,index) in calendarDay"
                 :key="index">
              <img src="~@images/圆框.png"
                   v-if="time.day&&time.date==today">
              {{time.day}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import juhe from '@api/juhe_api'
export default {
  data () {
    return {
      week: [
        {
          name: "周日",
        },
        {
          name: "周一",
        },
        {
          name: "周二",
        },
        {
          name: "周三",
        },
        {
          name: "周四",
        },
        {
          name: "周五",
        },
        {
          name: "周六",
        },
      ],
      calendarDay: [],
      today: '',
      day: '',
      calendarDayData: {        animalsYear: "鼠",
        avoid: "行丧.伐木.作梁.作灶.",
        date: "2020-6-9",
        lunar: "闰四月十八",
        lunarYear: "庚子年",
        suit: "嫁娶.订盟.纳采.冠笄.会亲友.安机械.造车器.祭祀.出行.纳财.入宅.安香.出火.入学.塑绘.开光.拆卸.起基.修造.动土.牧养.栽种.安门.作厕.",
        weekday: "星期二",
        year_month: "2020-6"
      }
    };
  },
  mounted () {
    this.calendarReset()
  },
  methods: {
    // 日历初始化
    calendarReset () {
      let date = new Date();
      let y = date.getFullYear();
      let m = date.getMonth();
      let d = date.getDate();
      this.day = d;
      // 当前日期
      this.today = `${y}-${m + 1}-${d}`;
      // this.getCalendarDay();
      date.setFullYear(y, m, 1)
      // 获得当前星期
      let week = date.getDay();
      // 当月天数
      date.setFullYear(y, m - 1, 0)
      let days = date.getDate()
      let length = 0;
      // 日历表填充
      for (let index = 1; index < 43; index++) {
        if (index > week && days != 0) {
          length += 1;
          this.calendarDay.push({
            day: length,
            date: `${y}-${m + 1}-${length}`
          });
          days--;
        } else {
          this.calendarDay.push('');
        }
      }
    },
    getCalendarDay () {
      juhe.calendarDay(this.today).then(res => {
        this.calendarDayData = res.data.result.data
      })
    }
  }
};
</script>
<style lang="less" scoped>
.absolute {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.home > div {
  height: 100%;
  position: relative;
}
.home {
  height: 100%;
  overflow: auto;
}
.calendar_content {
  overflow: auto;
}
@media (max-width: 450px) {
  .calendar_day {
    margin: 0 10px;
  }
}
.calendar_day {
  max-width: 370px;
  height: 250px;
  border-radius: 15px;
  background: #f8e3c6;
  overflow: hidden;
  margin: 20px auto;
  box-shadow: 2px 3px 7px -5px #000;
}
.calendar_day_top {
  height: 40px;
  background: #ffbd66;
  line-height: 40px;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  color: #9e5a32;
}
.calendar_day_content {
  color: #9e5a32;
  text-align: center;
  .today {
    font-size: 98px;
    margin: 0;
  }
  .lunar {
    font-size: 22px;
  }
}
.calendar {
  margin-top: 15px;
  max-width: 370px;
  height: 363px;
  margin: 0 auto;
  background: #ffbd66;
  border-radius: 15px;
  box-shadow: 2px 3px 7px -5px #000;
  overflow: hidden;
  .calendar_week {
    height: 40px;
    background: #fee684;
    color: #ad560e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    font-size: 13px;
  }
  .day_box {
    display: flex;
    flex-wrap: wrap;
    padding: 9px 7px;
    justify-content: space-between;
    position: relative;
    .day {
      width: 50px;
      height: 50px;
      background: #fff;
      border-radius: 8px;
      line-height: 50px;
      text-align: center;
      font-weight: bold;
      color: #9e5a32;
      margin-top: 1px;
      position: relative;
    }
    .day img {
      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      top: 0;
    }
  }
}
</style>
