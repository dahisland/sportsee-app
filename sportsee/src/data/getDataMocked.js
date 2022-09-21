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
  let userInfos = new modelUserMainData(
    USER_MAIN_DATA.find((item) => parseInt(item.id) === parseInt(userID))
  );
  return userInfos.formatUserMainData();
};

export const getActivityMockedData = (userID) => {
  let userActivity = new modelActivityData(
    USER_ACTIVITY.find((item) => parseInt(item.userId) === parseInt(userID))
  );
  return userActivity.formatActivityData();
};

export const getSessionsMockedData = (userID) => {
  let userSessions = new modelSessionsData(
    USER_AVERAGE_SESSIONS.find(
      (item) => parseInt(item.userId) === parseInt(userID)
    )
  );
  return userSessions.formatSessionsData();
};

export const getPerfMockedData = (userID) => {
  let userSessions = new modelPerfData(
    USER_PERFORMANCE.find((item) => parseInt(item.userId) === parseInt(userID))
  );
  return userSessions.formatPerfData();
};
