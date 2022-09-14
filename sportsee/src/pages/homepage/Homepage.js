import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HorizontalNav from "../../components/horizontalNav/HorizontalNav";
import VerticalNav from "../../components/verticalNav/VerticalNav";
import SectionHello from "../../components/sectionHello/SectionHello";
import KeyFiguresCard from "../../components/keyFiguresCard/KeyFiguresCard";
import BarChartActivity from "../../components/barChartActivity/BarChartActivity";
import { getMainUserData, getActivityData } from "../../data/getDataAPI";
import {
  getMainMockedData,
  getActivityMockedData,
} from "../../data/getDataMocked";

const Homepage = () => {
  const { userID } = useParams();
  const [dataUser, setDataUser] = useState({
    id: undefined,
    userInfos: {
      firstName: undefined,
      lastName: undefined,
      age: undefined,
    },
    todayScore: undefined,
    keyData: [
      {
        label: undefined,
        count: undefined,
        icon: undefined,
      },
    ],
  });
  const [dataActivity, setDataActivity] = useState({
    userId: undefined,
    sessions: [
      {
        day: undefined,
        dayFormatted: undefined,
        kilogram: undefined,
        calories: undefined,
      },
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    // USE DATA CALLED BY API
    // async function updateMainData() {
    //   getMainUserData(userID);
    //   const data = await getMainUserData(userID);
    //   setDataUser(data);
    // }
    // async function updateActivityData() {
    //   getActivityData(userID);
    //   const data = await getActivityData(userID);
    //   setDataActivity(data);
    // }
    // updateMainData();
    // updateActivityData();

    // USE DATA MOCKED
    setDataUser(getMainMockedData(userID));
    setDataActivity(getActivityMockedData(userID));
  }, [userID]);

  return (
    <div className="page_container">
      <HorizontalNav />
      <VerticalNav />
      <main className="pageHome_main">
        <SectionHello name={dataUser.userInfos.firstName} />
        <section className="mainSection_statistics">
          <article className="statistics_charts">
            <div className="charts_flexboxContainer">
              <BarChartActivity dataActivity={dataActivity}></BarChartActivity>
              <div
                id="linechart"
                style={{ width: "32%", background: "green", height: "263px" }}
              ></div>
              <div
                id="radarchart"
                style={{ width: "32%", background: "green", height: "263px" }}
              ></div>
              <div
                id="radialbarchart"
                style={{ width: "32%", background: "green", height: "263px" }}
              ></div>
            </div>
          </article>

          <article className="statistics_keyFigures">
            {dataUser.keyData.map((item, index) => (
              <KeyFiguresCard
                image={item.icon}
                name={item.label}
                value={item.count}
                key={item.label + index}
              />
            ))}
            {/* <div
              style={{ width: "100%", background: "green", height: "124px" }}
            ></div>
            <div
              style={{ width: "100%", background: "green", height: "124px" }}
            ></div>
            <div
              style={{ width: "100%", background: "green", height: "124px" }}
            ></div>
            <div
              style={{ width: "100%", background: "green", height: "124px" }}
            ></div> */}
          </article>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
