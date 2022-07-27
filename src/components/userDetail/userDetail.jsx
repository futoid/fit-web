import React from "react";
import "./userDetail.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PieChart } from "react-minimal-pie-chart";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TodayIcon from "@mui/icons-material/Today";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
}

export default function User({ data }) {

  return (
    <div className="user-details">
      <img
        className="user-image "
        src={data.img}
        alt=""
      />

      <div className="fun_user_name user-name">
        <text className="userName">{data.name} </text>
        <br />
        <text className="userMail">{data.mail} </text>
      </div>

      <div style={{ width: 100, height: 110 }} className="fun_user walk-dia">
        <CircularProgressbar
          value={data.stepsWalked}
          maxValue={data.stepsTarget}
          text={data.stepsWalked}
        />
      </div>

      <div className="mid_user_walk_target fun_user_walk_target mid_user">
        <text className="target">{kFormatter(data.stepsTarget)}</text>
        <br />
        target
      </div>

      <div className="fun_user_date mid_user_date">
        <div className="start-date">
          <CalendarTodayIcon className="start-icon" fontSize="large" />
          <div className="start-text">15 Oct</div>
        </div>

        <div className="end-date">
          <TodayIcon className="end-icon" fontSize="large" />
          <div className="end-text">20 Oct</div>
        </div>
      </div>
      <a href={`${data.userid}/workout`} className="arrow">
        <div>
          <ArrowForwardIosIcon style={{color : "white"}}/>
        </div>
      </a>

      <div className="fun_user_cal cal-dia" style={{ width: 100, height: 110 }}>
        <PieChart
          lineWidth={30}
          animate={true}
          paddingAngle={25}
          rounded={true}
          data={[
            { title: "Protein", value: data.proteinConsumed, color: "#F5C90F" },
            { title: "Calorie", value: data.carbConsumed, color: "#03C7FC" },
            { title: "Fat", value: data.fatConsumed, color: "#F45C84" },
          ]}
        />
      </div>

      <div className="mid_user_walk_target fun_user_walk_target mid_user">
        <text className="target">{kFormatter(data.calorieTarget)}</text>
        <br />
        target
      </div>
      <a href={`${data.userid}/nutrtion`} className="arrow">
        <div>
          <ArrowForwardIosIcon style={{color : "white"}}/>
        </div>
      </a>

      <div className="fun_bell-icon">
        <NotificationsNoneIcon style={{ color: "black" }} fontSize="large" />
      </div>
    </div>
  );
}