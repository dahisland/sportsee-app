import {
  modelUserMainData,
  modelActivityData,
  modelSessionsData,
} from "./modelDatas";

export const getMainUserData = async (userID) => {
  try {
    const mainData = await fetch(`http://localhost:3000/user/${userID}`);
    const mainDataJson = await mainData.json();
    const formatMainDataJson = new modelUserMainData(mainDataJson.data);
    return formatMainDataJson.formatUserMainData();
  } catch (err) {
    // TypeError: failed to fetch
    alert(`Une erreur est survenue dans le chargement des données (${err})`);
  }
};

export const getActivityData = async (userID) => {
  try {
    const activityData = await fetch(
      `http://localhost:3000/user/${userID}/activity`
    );
    const activityDataJson = await activityData.json();
    const formatActivityJson = new modelActivityData(activityDataJson.data);
    return formatActivityJson.formatActivityData();
  } catch (err) {
    // TypeError: failed to fetch
    alert(`Une erreur est survenue dans le chargement des données (${err})`);
  }
};

export const getSessionsData = async (userID) => {
  try {
    const sessionsData = await fetch(
      `http://localhost:3000/user/${userID}/average-sessions`
    );
    const sessionsDataJson = await sessionsData.json();
    const formatSessionsJson = new modelSessionsData(sessionsDataJson.data);
    return formatSessionsJson.formatSessionsData();
  } catch (err) {
    // TypeError: failed to fetch
    alert(`Une erreur est survenue dans le chargement des données (${err})`);
  }
};
