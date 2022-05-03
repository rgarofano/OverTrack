const monday = document.getElementById('monday-add-box');
const monday_table = document.getElementById('monday-table');
const tuesday = document.getElementById('tuesday-add-box');
const tuesday_table = document.getElementById('tuesday-table');
const wednesday = document.getElementById('wednesday-add-box');
const wednesday_table = document.getElementById('wednesday-table');
const thursday = document.getElementById('thursday-add-box');
const thursday_table = document.getElementById('thursday-table');
const friday = document.getElementById('friday-add-box');
const friday_table = document.getElementById('friday-table');
const saturday = document.getElementById('saturday-add-box');
const saturday_table = document.getElementById('saturday-table');
const sunday = document.getElementById('sunday-add-box');
const sunday_table = document.getElementById('sunday-table');

monday.addEventListener('click', () => {
    monday.style.zIndex = '-1';
    monday_table.style.zIndex = '0';
});
tuesday.addEventListener('click', () => {
    tuesday.style.zIndex = '-1';
    tuesday_table.style.zIndex = '0';
});
wednesday.addEventListener('click', () => {
    wednesday.style.zIndex = '-1';
    wednesday_table.style.zIndex = '0';
});
thursday.addEventListener('click', () => {
    thursday.style.zIndex = '-1';
    thursday_table.style.zIndex = '0';
});
friday.addEventListener('click', () => {
    friday.style.zIndex = '-1';
    friday_table.style.zIndex = '0';
});
saturday.addEventListener('click', () => {
    saturday.style.zIndex = '-1';
    saturday_table.style.zIndex = '0';
});
sunday.addEventListener('click', () => {
    sunday.style.zIndex = '-1';
    sunday_table.style.zIndex = '0';
});