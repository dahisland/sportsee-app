export class modelUserMainData {
  constructor(apiDataUserMain) {
    this.id = parseInt(apiDataUserMain.id);
    this.firstName = String(apiDataUserMain.userInfos.firstName);
    this.lastName = String(apiDataUserMain.userInfos.lastName);
    this.age = parseInt(apiDataUserMain.userInfos.age);
    apiDataUserMain.score
      ? (this.todayScore = parseFloat(apiDataUserMain.score))
      : (this.todayScore = parseFloat(apiDataUserMain.todayScore));
    this.calorieCount = parseFloat(apiDataUserMain.keyData.calorieCount);
    this.proteinCount = parseFloat(apiDataUserMain.keyData.proteinCount);
    this.carbohydrateCount = parseFloat(
      apiDataUserMain.keyData.carbohydrateCount
    );
    this.lipidCount = parseFloat(apiDataUserMain.keyData.lipidCount);
  }

  formatUserMainData() {
    let objMainData = {
      id: this.id,
      userInfos: {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
      },
      todayScore: [
        { name: "Max", value: 100, fill: "transparent" },
        { name: "Score", value: this.todayScore * 100, fill: "#FF0000" },
      ],
      keyData: [
        {
          label: "Calories",
          count: this.calorieCount.toLocaleString("en-US") + "kCal",
          icon: "calories-icon.svg",
        },
        {
          label: "Proteines",
          count: this.proteinCount + "g",
          icon: "protein-icon.svg",
        },
        {
          label: "Glucides",
          count: this.carbohydrateCount + "g",
          icon: "carbs-icon.svg",
        },
        {
          label: "Lipides",
          count: this.lipidCount + "g",
          icon: "lipid-icon.svg",
        },
      ],
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

    return objActivityData;
  }
}

export class modelSessionsData {
  constructor(apiDataSessions) {
    this.userId = parseInt(apiDataSessions.userId);
    this.sessions = apiDataSessions.sessions;
  }

  formatSessionsData() {
    const days = [
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
      "Dimanche",
    ];

    let objSessionsData = {
      userId: parseInt(this.userId),
      sessions: this.sessions,
    };

    objSessionsData.sessions.map(function (el) {
      el.day = parseInt(el.day);
      el.dayLabel = String(days[el.day - 1][0]);
      el.sessionLength = parseInt(el.sessionLength);
      return el;
    });

    return objSessionsData;
  }
}

export class modelPerfData {
  constructor(apiDataPerf) {
    this.userId = parseInt(apiDataPerf.userId);
    this.kind = apiDataPerf.kind;
    this.data = apiDataPerf.data.map(function (el) {
      el.value = parseInt(el.value);
      el.kind = Number(el.kind);
      return el;
    });
  }

  formatPerfData() {
    const frenchKind = [
      "Cardio",
      "Energie",
      "Endurance",
      "Force",
      "Vitesse",
      "Intensité",
    ];

    let objPerfData = {
      userId: this.userId,
      kind: Object.keys(this.kind).map(function (key) {
        return [Number(key), frenchKind[key - 1]];
      }),
      data: this.data,
    };

    objPerfData.data.forEach((el) => {
      el.subject = String(
        objPerfData.kind.find((item) => item[0] === el.kind)[1]
      );
    });

    return objPerfData;
  }
}
