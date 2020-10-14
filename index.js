function happyHolidays() {
  return 'Happy holidays!'
}
function happyHolidaysTo('you') {
  return 'Happy holidays ${name}!'
}
function happyHolidaysTo('everyone') {
  return 'Happy holidays ${name}!'
}
function happyCustomHolidayTo('Independence Day', 'you') {
  return 'Happy ${holiday} ${name}!'
}
function happyCustomHolidayTo('New Year', 'everyone') {
  return 'Happy ${holiday} ${name}!'
}
function holidayCountdown(20, "Mother's Day") {
  return 'It\'s ${days} days until ${holiday}!'
}
function holidayCountdown(120, "Father's Day") {
  return 'It\'s ${days} days until ${holiday}!'
}
