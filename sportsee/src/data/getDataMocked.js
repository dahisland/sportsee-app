import { USER_MAIN_DATA, USER_ACTIVITY } from "./dataMock";
import { modelUserMainData, modelActivityData } from "./modelDatas";

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
