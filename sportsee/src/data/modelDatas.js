/**
 * Javascript file containing all class used to format datas locally imported or called by api
 * @file
 */

export class modelUserMainData {
  /**
   * Create a new object formatting main user mock data or main user data called by api.
   * @class
   * @exports
   */

  constructor(apiDataUserMain) {
    this.id = parseInt(apiDataUserMain.id);
    this.firstName = String(apiDataUserMain.userInfos.firstName);
    this.lastName = String(apiDataUserMain.userInfos.lastName);
    this.age = parseInt(apiDataUserMain.userInfos.age);
    // replace key 'store' to key 'todayScore' if data called contains a key 'store'
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
    /**
     * Static method used to structure data formatting
     * @return object - object containing useful data to exploit
     */

    let objMainData = {
      id: this.id,
      userInfos: {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
      },
      todayScore: [
        // Add object containing reference value for the radialChart statistics (percentage)
        { name: "Max", value: 100, fill: "transparent" },
        // Convert user todayScore value in percentage
        { name: "Score", value: this.todayScore * 100, fill: "#FF0000" },
      ],
      keyData: [
        // Add french labels, reference icons and units for the cards values
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
  /**
   * Create a new object formatting user Activity mock data or user Activity data called by api.
   * @class
   * @exports
   */

  constructor(apiDataActivity) {
    this.userId = parseInt(apiDataActivity.userId);
    this.sessions = apiDataActivity.sessions;
  }

  formatActivityData() {
    /**
     * Static method used to structure data formatting
     * @return object - object containing useful data to exploit
     */

    let objActivityData = {
      userId: this.userId,
      sessions: this.sessions.sort(function (a, b) {
        return a.kilogram - b.kilogram;
      }),
    };

    objActivityData.sessions.map(function (el) {
      el.day = String(el.day);
      // Add the new key 'dayFormatted' for each object contained in array 'sessions'
      el.dayFormatted =
        el.day !== undefined
          ? // Expected number on format 'x' if number < 10 or 'xx' if number is >= 10
            parseFloat(el.day.split("-")[2].replace(/^0/, ""))
          : undefined;
      el.kilogram = parseFloat(el.kilogram);
      el.calories = parseFloat(el.calories);

      return el;
    });

    return objActivityData;
  }
}

export class modelSessionsData {
  /**
   * Create a new object formatting user Sessions mock data or user Sessions data called by api.
   * @class
   * @exports
   */

  constructor(apiDataSessions) {
    this.userId = parseInt(apiDataSessions.userId);
    this.sessions = apiDataSessions.sessions;
  }

  formatSessionsData() {
    /**
     * Static method used to structure data formatting
     * @return object - object containing useful data to exploit
     */

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
      // Add new key 'dayLabel" on format 'X' where 'X' is the first letter of week's days
      el.day = parseInt(el.day);
      el.dayLabel = String(days[el.day - 1][0]);
      el.sessionLength = parseInt(el.sessionLength);

      return el;
    });

    return objSessionsData;
  }
}

export class modelPerfData {
  /**
   * Create a new object formatting Performances user mock data or Performances user data called by api.
   * @class
   * @exports
   */
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
    /**
     * Static method used to structure data formatting
     * @return object - object containing useful data to exploit
     */

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
      // Array containing kind values and french labels equivalences
      kind: Object.keys(this.kind).map(function (key) {
        return [Number(key), frenchKind[key - 1]];
      }),
      data: this.data,
    };

    objPerfData.data.forEach((el) => {
      // Key containing french label kind corresponding to data value
      el.subject = String(
        objPerfData.kind.find((item) => item[0] === el.kind)[1]
      );
    });

    return objPerfData;
  }
}
