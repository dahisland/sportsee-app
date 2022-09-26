/**
 * Javascript file containing functions used to fetch data by using calls to api
 * @file
 */

import {
  modelUserMainData,
  modelActivityData,
  modelSessionsData,
  modelPerfData,
} from "./modelDatas";

export const getMainUserData = async (userID) => {
  /**
   * Function to get main user data by calling api
   * @params userId : Number collected in the page's url by using useParam()
   * @async
   * @returns Object containing formatted data called
   * @exports
   */

  const mainData = await fetch(`http://localhost:3000/user/${userID}`);
  const mainDataJson = await mainData.json();
  const formatMainDataJson = new modelUserMainData(mainDataJson.data);

  return formatMainDataJson.formatUserMainData();
};

export const getActivityData = async (userID) => {
  /**
   * Function to get user Activity data by calling api
   * @params userId : Number collected in the page's url by using useParam()
   * @async
   * @returns Object containing formatted data called
   * @exports
   */

  const activityData = await fetch(
    `http://localhost:3000/user/${userID}/activity`
  );
  const activityDataJson = await activityData.json();
  const formatActivityJson = new modelActivityData(activityDataJson.data);

  return formatActivityJson.formatActivityData();
};

export const getSessionsData = async (userID) => {
  /**
   * Function to get user Sessions data by calling api
   * @params userId : Number collected in the page's url by using useParam()
   * @async
   * @returns Object containing formatted data called
   * @exports
   */

  const sessionsData = await fetch(
    `http://localhost:3000/user/${userID}/average-sessions`
  );
  const sessionsDataJson = await sessionsData.json();
  const formatSessionsJson = new modelSessionsData(sessionsDataJson.data);

  return formatSessionsJson.formatSessionsData();
};

export const getPerformanceData = async (userID) => {
  /**
   * Function to get user Performance data by calling api
   * @params userId : Number collected in the page's url by using useParam()
   * @async
   * @returns Object containing formatted data called
   * @exports
   */

  const perfData = await fetch(
    `http://localhost:3000/user/${userID}/performance`
  );
  const perfDataJson = await perfData.json();
  const formatPerfJson = new modelPerfData(perfDataJson.data);

  return formatPerfJson.formatPerfData();
};
