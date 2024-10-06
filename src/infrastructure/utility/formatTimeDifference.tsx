const formatTimeDifference = (inputTime: any) => {
  const currentTime: any = new Date();
  const inputDate: any = new Date(inputTime);
  const timeDifference = currentTime - inputDate;

  const year = 31556952000;
  const month = 2629746000;
  const week = 604800000;
  const day = 86400000;
  const hour = 3600000;
  const minute = 60000;

  const toYear = Math.floor(timeDifference / year);
  const toMonth = Math.floor(timeDifference / month);
  const toWeek = Math.floor(timeDifference / week);
  const toDay = Math.floor(timeDifference / day);
  const toHour = Math.floor(timeDifference / hour);
  const toMinute = Math.floor(timeDifference / minute);
  if (timeDifference > year) {
    const remainingMonths = toMonth % 12;
    if (remainingMonths > 0) {
      return `${toYear} year${
        toYear !== 1 ? "s" : ""
      } ${`- ${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`} ago`;
    } else {
      return `${toYear} year${toYear !== 1 ? "s" : ""} ago`;
    }
  } else if (timeDifference > month) {
    const remainingDays = toDay % 30;
    if (remainingDays > 0) {
      return `${toMonth} month${
        toMonth !== 1 ? "s" : ""
      } ${`- ${remainingDays} day${remainingDays !== 1 ? "s" : ""}`} ago`;
    } else {
      return `${toMonth} year${toMonth !== 1 ? "s" : ""} ago`;
    }
  } else if (timeDifference > week) {
    const remainingDays = toDay % 7;
    if (remainingDays > 0) {
      return `${toWeek} week${
        toWeek !== 1 ? "s" : ""
      } ${`- ${remainingDays} day${remainingDays !== 1 ? "s" : ""}`} ago`;
    } else {
      return `${toWeek} week${toWeek !== 1 ? "s" : ""} ago`;
    }
  } else if (timeDifference > day) {
    return `${toDay} day${toDay !== 1 ? "s" : ""} ago`;
  } else if (timeDifference > hour) {
    const remainingMinutes = toMinute % 60;
    if (remainingMinutes > 0) {
      return `${toHour} hour${
        toHour !== 1 ? "s" : ""
      } - ${remainingMinutes} minute${remainingMinutes !== 1 ? "s" : ""} ago`;
    } else {
      return `${toHour} hour${toHour !== 1 ? "s" : ""} ago`;
    }
    // return `${toHour} hour${toHour !== 1 ? "s" : ""} ago`;
  } else if (timeDifference > minute) {
    return `${toMinute} minute${toMinute !== 1 ? "s" : ""} ago`;
  } else {
    return `Just Now`;
  }
};

export default formatTimeDifference;
