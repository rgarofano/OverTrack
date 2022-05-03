const d1 = document.getElementById('day-one-add')

d1.addEventListener("click", addDay);

function addDay(){
    d1.style.zIndex = "-1";
    document.getElementById('day1').style.zIndex = '0'
}