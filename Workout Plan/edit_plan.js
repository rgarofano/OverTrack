// let num_cards = 6;

// const edit_button = document.querySelector('#edit');
// const icons = document.querySelectorAll('i');

// edit_button.addEventListener('click', function (e) {
//     edit_button.textContent = changeButtonText(edit_button);
//     toggleIcons(icons);
// });

// function changeButtonText(button) {
//     if (button.textContent === 'Edit Workout Plan') {
//         return 'Done';
//     }
//     else {
//         return 'Edit Workout Plan';
//     }
// }

// function toggleIcons(icons) {
//     for (let i of icons) {
//         i.classList.toggle('hide');
//     }
// }

// const td_list = document.querySelectorAll('td');
// for (let td of td_list) {
//     td.addEventListener('dblclick', function (e) {
//         if (edit_button.textContent === 'Done') {
//             let text = prompt('Enter a new value:', td.textContent);
//             if (text !== null) {
//                 td.textContent = text;
//             }
//         }
//     });
// }

// for (let i of icons) {
//     i.addEventListener('click', function (e) {
//         if (edit_button.textContent === 'Done') {
//             i.parentElement.remove();
//             num_cards--;
//             const main = document.querySelector('main');
//             let card_calc = Math.floor(num_cards / 2);
//             main.style.gridTemplateColumns = `repeat(${card_calc},1fr) 0.5fr repeat(${card_calc},1fr)`;
//             main.style.width = '40vh';
//         }
//     });
// }