const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("Datetime", thisYear)
year.textContent = thisYear