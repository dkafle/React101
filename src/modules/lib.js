const weekDays = (function () {
  const days = ['Sunday', 'Modnday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const getDay = dayNumber => days[dayNumber];
  const getDayShort = dayNumber => getDay(dayNumber).substring(0, 3);
  const getDayInitial = dayNumber => getDay(dayNumber).substring(0, 1);

  return {
    getDay,
    getDayShort,
    getDayInitial,
  };
})();

export default weekDays;

// Immidiately Invoked Function Expression IIFE
