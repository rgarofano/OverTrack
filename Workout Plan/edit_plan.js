const add_boxes = document.querySelectorAll('.material-symbols-outlined');
const tables = document.querySelectorAll('table');

add_boxes.forEach( (add_box, index) => {
    add_box.addEventListener('click', () => {
        add_box.style.zIndex = '-1';
        tables[index].style.zIndex = '0';
    });
});

// Fixing bug with contenteditable
const tableData = document.querySelectorAll('td');

tableData.forEach(data => {
    data.addEventListener('click', event => {
        event.target.contentEditable = true;
        event.target.focus();
    });
    data.addEventListener('blur', event => {
        event.target.contentEditable = false;
    });
});