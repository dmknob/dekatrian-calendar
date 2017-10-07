const monthsLength = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

const months = [
  "",
  "Auroran",
  "Borean",
  "Coronian",
  "Driadan",
  "Electran",
  "Faian",
  "Gaian",
  "Hermetian",
  "Irisian",
  "Kaosian",
  "Lunan",
  "Maian",
  "Nixian"
];

export function isBissexto(today) {
  ano = today.getFullYear();
  if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
    return true;
  }
  return false;
}

export function diaDoAno(today) {
  days = monthsLength[today.getMonth()]; // How many days in full elapsed months
  if (isBissexto(today) && days >= 59) {
    //If bissexto and date is equal or greater than 29/02
    days++;
  }
  days += today.getDate(); // How many days elapsed in current month + days in full elapsed months
  return days;
}

export function dekaMonthName(month) {
  return months[month];
}

export function dekatrian(today) {
  days = diaDoAno(today);
  if (days == 1) {
    //Achronian
    return (dekaDateObj = {
      day: "Achronian",
      month: "0",
      year: today.getFullYear(),
      yearlyDay: days,
      monthName: dekaMonthName(0)
    });
  } else if (isBissexto(today) && days == 2) {
    //Sinchronian
    return (dekaDateObj = {
      day: "Sinchronian",
      month: "0",
      year: today.getFullYear(),
      yearlyDay: days,
      monthName: dekaMonthName(0)
    });
  } else if (this.isBissexto(today) && days > 2) {
    // Bissexto, need to corret by 2 days
    days = days - 2;
  } else {
    //Not bissexto, need to correct just Achronian
    days--;
  }
  elapsedMonths = Math.floor(days / 28);
  elapsedDays = days - elapsedMonths * 28;
  dekaDay = elapsedDays;
  dekaMonth = elapsedMonths + 1; //Adjust array index
  if (dekaDay == 0) {
    // Another index adjust. (0-27 -> 1-28)
    dekaMonth -= 1;
    dekaDay = 28;
  }
  return (dekaDateObj = {
    day: dekaDay, // Dekatrian Day (DD) 1-28
    month: dekaMonth, // Dakatrian Month (MM) 1-13
    year: today.getFullYear(), // Year (YYYY)
    yearlyDay: elapsedDays, // How many days in Dekatrian Calendar since 01\01
    monthName: dekaMonthName(dekaMonth) // Dekatrian full Month name
  });
}
