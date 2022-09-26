/**
 * Javascript file containing functions used to collect data by using mock data
 * This file can be used to develop, implement and test code without calling data by api
 * @file
 */

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./dataMock";
import {
  modelUserMainData,
  modelActivityData,
  modelSessionsData,
  modelPerfData,
} from "./modelDatas";

export const getMainMockedData = (userID) => {
  /**
   * Function to get main user mock data
   * @params userId : Number collected in the page's url by using useParam()
   * @returns Object containing mock data formatted
   * @exports
   */

  let userInfos = new modelUserMainData(
    USER_MAIN_DATA.find((item) => parseInt(item.id) === parseInt(userID))
  );

  return userInfos.formatUserMainData();
};

export const getActivityMockedData = (userID) => {
  /**
   * Function to get user Activity mock data
   * @params userId : Number collected in the page's url by using useParam()
   * @returns Object containing mock data formatted
   * @exports
   */

  let userActivity = new modelActivityData(
    USER_ACTIVITY.find((item) => parseInt(item.userId) === parseInt(userID))
  );

  return userActivity.formatActivityData();
};

export const getSessionsMockedData = (userID) => {
  /**
   * Function to get user Sessions mock data
   * @params userId : Number collected in the page's url by using useParam()
   * @returns Object containing mock data formatted
   * @exports
   */

  let userSessions = new modelSessionsData(
    USER_AVERAGE_SESSIONS.find(
      (item) => parseInt(item.userId) === parseInt(userID)
    )
  );

  return userSessions.formatSessionsData();
};

export const getPerfMockedData = (userID) => {
  /**
   * Function to get user Performance mock data
   * @params userId : Number collected in the page's url by using useParam()
   * @returns Object containing mock data formatted
   * @exports
   */

  let userSessions = new modelPerfData(
    USER_PERFORMANCE.find((item) => parseInt(item.userId) === parseInt(userID))
  );

  return userSessions.formatPerfData();
};
