import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HorizontalNav from "../../components/horizontalNav/HorizontalNav";
import VerticalNav from "../../components/verticalNav/VerticalNav";
import SectionHello from "../../components/sectionHello/SectionHello";
import KeyFiguresCard from "../../components/keyFiguresCard/KeyFiguresCard";
import BarChartActivity from "../../components/barChartActivity/BarChartActivity";
import {
  getMainUserData,
  getActivityData,
  getSessionsData,
  getPerformanceData,
} from "../../data/getDataAPI";
import {
  getMainMockedData,
  getActivityMockedData,
  getSessionsMockedData,
  getPerfMockedData,
} from "../../data/getDataMocked";
import LineChartSessions from "../../components/lineChartSessions/LineChartSessions";
import RadarChartPerf from "../../components/radarChartPerformance/RadarChartPerf";

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

  const [dataSessions, setDataSessions] = useState({
    userId: undefined,
    sessions: [
      {
        day: undefined,
        dayLabel: undefined,
        sessionLength: undefined,
      },
    ],
  });

  const [dataPerf, setDataPerf] = useState({
    userId: undefined,
    kind: [[undefined, undefined]],
    data: [
      {
        value: undefined,
        kind: [undefined, undefined],
      },
      {
        value: undefined,
        kind: undefined,
        subject: undefined,
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
    // async function updateSessionsData() {
    //   getSessionsData(userID);
    //   const data = await getSessionsData(userID);
    //   setDataSessions(data);
    // }
    // async function updatePerformanceData() {
    //   getPerformanceData(userID);
    //   const data = await getPerformanceData(userID);
    //   setDataPerf(data);
    // }
    // updateMainData();
    // updateActivityData();
    // updateSessionsData();
    // updatePerformanceData();

    // USE DATA MOCKED
    setDataUser(getMainMockedData(userID));
    setDataActivity(getActivityMockedData(userID));
    setDataSessions(getSessionsMockedData(userID));
    setDataPerf(getPerfMockedData(userID));
  }, [userID]);

  console.log(dataPerf);

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

              <LineChartSessions
                dataSessions={dataSessions}
              ></LineChartSessions>

              <RadarChartPerf dataPerf={dataPerf}></RadarChartPerf>

              <div
                id="radialbarchart"
                style={{ width: "32%", background: "green", height: "200px" }}
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
          </article>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
