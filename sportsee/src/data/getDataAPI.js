import { modelUserMainData, modelActivityData } from "./modelDatas";

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
