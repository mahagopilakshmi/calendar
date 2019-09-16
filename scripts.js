today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectedMonth = document.getElementById("month");
selectedYear = document.getElementById("year");
 
months = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" ,"Sep" , "Oct" , "Nov", "Dec"];
monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function showCalendar(month, year){
	console.log("month and year ",month+" "+year);
	monthAndYear.innerHTML = months[month]+" "+year;
	selectedYear.value = year;
	selectedMonth.value = month;
	let firstDay = new Date(year,month).getDay();
	console.log("firstday ",firstDay);
	let date = 1;
	var tbl = document.getElementById("calendar-body");
	tbl.innerHTML = "";
	for(let i = 0; i<6 ; i++){
		let row = document.createElement("tr");
		for(let j = 0 ; j<7 ; j++){
			if(i == 0 && j<firstDay){
				cell = document.createElement("td");
				cellText = document.createTextNode("");
				cell.appendChild(cellText);
				row.appendChild(cell);
			}
			else if(date > daysInMonth(month,year)){
				break;
			}
			else{
				cell = document.createElement("td");
				cell.setAttribute("onclick","cellClicked(event)");

				cellText = document.createTextNode(date);
				if(date == today.getDate() && year == today.getFullYear() && month == today.getMonth()){
					cell.classList.add("bg-info");
				}
				cell.appendChild(cellText);
				row.appendChild(cell);
				date++;
			}
		}
		tbl.appendChild(row);
	}

}
function daysInMonth(iMonth, iYear){
	return 32 - new Date(iYear,iMonth,32).getDate();
}
function previous(){
	currentYear = (currentMonth === 0)? currentYear-1:currentYear;
	currentMonth = (currentMonth === 0)? 11 : currentMonth-1;
	showCalendar(currentMonth, currentYear);
}
function next(){
	currentYear= (currentMonth === 11)? currentYear+1 : currentYear;
	currentMonth = (currentMonth+1) % 12;
	showCalendar(currentMonth, currentYear);
}
function jump(){
	currentMonth = parseInt(selectedMonth.value);
	currentYear = parseInt(selectedYear.value);
	showCalendar(currentMonth,currentYear);
}
function cellClicked(e){
	console.log("click event ",e.target.hasAttribute("class"));
	var cells_in_table = document.getElementsByTagName("td");
	for(var x = 0; x< cells_in_table.length; x++){
		console.log("cells are ",cells_in_table[x].hasAttribute("class"));
		if(cells_in_table[x].hasAttribute("class")){
			cells_in_table[x].setAttribute("class","");
		}
	}
	e.target.setAttribute("class","bg-info");
}