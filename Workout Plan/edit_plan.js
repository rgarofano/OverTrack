var d1 = document.getElementById('day-one-add')

d1.addEventListener("click", addDay);

function addDay(){
    document.getElementById('day-one-add').style.zIndex = "-1";
    document.getElementById('day1').style.zIndex = '0'
}