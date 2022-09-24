export const userUseState = {
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
