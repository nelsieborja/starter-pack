import MONTHS from 'Constants/months';

export const getMonthYear = () => {
  const d = new Date();
  return {
    month: MONTHS[d.getMonth()],
    year: d.getFullYear()
  };
};
