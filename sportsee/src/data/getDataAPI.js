import {
  modelUserMainData,
  modelActivityData,
  modelSessionsData,
  modelPerfData,
} from "./modelDatas";

export const getMainUserData = async (userID) => {
  const mainData = await fetch(`http://localhost:3000/user/${userID}`);
  const mainDataJson = await mainData.json();
  const formatMainDataJson = new modelUserMainData(mainDataJson.data);
  return formatMainDataJson.formatUserMainData();
};

export const getActivityData = async (userID) => {
  const activityData = await fetch(
    `http://localhost:3000/user/${userID}/activity`
  );
  const activityDataJson = await activityData.json();
  const formatActivityJson = new modelActivityData(activityDataJson.data);
  return formatActivityJson.formatActivityData();
};

export const getSessionsData = async (userID) => {
  const sessionsData = await fetch(
    `http://localhost:3000/user/${userID}/average-sessions`
  );
  const sessionsDataJson = await sessionsData.json();
  const formatSessionsJson = new modelSessionsData(sessionsDataJson.data);
  return formatSessionsJson.formatSessionsData();
};

export const getPerformanceData = async (userID) => {
  const perfData = await fetch(
    `http://localhost:3000/user/${userID}/performance`
  );
  const perfDataJson = await perfData.json();
  const formatPerfJson = new modelPerfData(perfDataJson.data);
  return formatPerfJson.formatPerfData();
};
