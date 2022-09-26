/**
 * Javascript file containing objects used to init useState() in the Homepage component
 * @file
 */

export const userUseState = {
  /**
   * Object containing main user data structure with 'undefined' default values,
   * after data has been called and formatted
   * @constant
   * @exports
   */

  id: undefined,
  userInfos: {
    firstName: undefined,
    lastName: undefined,
    age: undefined,
  },
  todayScore: [
    { name: undefined, value: undefined, fill: undefined },
    { name: undefined, value: undefined, fill: undefined },
  ],
  keyData: [
    {
      label: undefined,
      count: undefined,
      icon: undefined,
    },
  ],
};

export const activityUseState = {
  /**
   * Object containing user Activity data structure with 'undefined' default values,
   * after data has been called and formatted
   * @constant
   * @exports
   */

  userId: undefined,
  sessions: [
    {
      day: undefined,
      dayFormatted: undefined,
      kilogram: undefined,
      calories: undefined,
    },
  ],
};

export const sessionsUseState = {
  /**
   * Object containing user Sessions data structure with 'undefined' default values,
   * after data has been called and formatted
   * @constant
   * @exports
   */

  userId: undefined,
  sessions: [
    {
      day: undefined,
      dayLabel: undefined,
      sessionLength: undefined,
    },
  ],
};

export const perfUseState = {
  /**
   * Object containing user Performance data structure with 'undefined' default values,
   * after data has been called and formatted
   * @constant
   * @exports
   */

  userId: undefined,
  kind: [[undefined, undefined]],
  data: [
    {
      value: undefined,
      kind: [undefined, undefined],
    },
    {
      value: undefined,
      kind: undefined,
      subject: undefined,
    },
  ],
};
