export class modelUserMainData {
  constructor(resDataUserMain) {
    this.id = parseInt(resDataUserMain.id);
    this.firstName = String(resDataUserMain.userInfos.firstName);
    this.lastName = String(resDataUserMain.userInfos.lastName);
    this.age = parseInt(resDataUserMain.userInfos.age);
    resDataUserMain.score
      ? (this.todayScore = parseFloat(resDataUserMain.score))
      : (this.todayScore = parseFloat(resDataUserMain.todayScore));
    this.calorieCount = parseFloat(resDataUserMain.keyData.calorieCount);
    this.proteinCount = parseFloat(resDataUserMain.keyData.proteinCount);
    this.carbohydrateCount = parseFloat(
      resDataUserMain.keyData.carbohydrateCount
    );
    this.lipidCount = parseFloat(resDataUserMain.keyData.lipidCount);
  }

  formatUserMainData() {
    let objMainData = {
      id: this.id,
      userInfos: {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
      },
      todayScore: this.todayScore,
      keyData: {
        calorieCount: this.calorieCount,
        proteinCount: this.proteinCount,
        carbohydrateCount: this.carbohydrateCount,
        lipidCount: this.lipidCount,
      },
    };
    return objMainData;
  }
}

export class modelActivityData {
  constructor(apiDataActivity) {
    this.userId = parseInt(apiDataActivity.userId);
    this.sessions = apiDataActivity.sessions;
  }

  formatActivityData() {
    let objActivityData = {
      userId: parseInt(this.userId),
      sessions: this.sessions.sort(function (a, b) {
        return a.kilogram - b.kilogram;
      }),
    };
    // objActivityData.sessions.forEach((el) => {
    //   el.day = String(el.day);
    //   el.kilogram = parseFloat(el.kilogram);
    //   el.calories = parseFloat(el.calories);
    // });

    objActivityData.sessions.map(function (el) {
      el.day = String(el.day);
      el.dayFormatted =
        el.day !== undefined
          ? parseFloat(el.day.split("-")[2].replace(/^0/, ""))
          : undefined;
      el.kilogram = parseFloat(el.kilogram);
      el.calories = parseFloat(el.calories);
      return el;
    });

    console.log(objActivityData);
    return objActivityData;
  }
}
