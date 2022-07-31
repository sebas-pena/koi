let months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
]

let days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
]
export default (date: number | Date, ) => {

  typeof date === "number" ? date = new Date(date) : null

  let result = {
    day : {
      name : days[date.getDay()],
      number : date.getDate(),
    },
    month :{
      name : months[date.getMonth()],
      number : date.getMonth() + 1
    },
    year : date.getFullYear(),
    minute: date.getMinutes(),
    hour: date.getHours(),
  }

  return result
}