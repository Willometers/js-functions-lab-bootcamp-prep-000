var name = "you"

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
function happyCustomHolidayTo() {
  return 'Happy ${holiday} ${name}!'
}
function holidayCountdown() {
  return 'It\'s ${days} days until ${holiday}!'
}
