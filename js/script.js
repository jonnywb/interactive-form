const nameInput = document.querySelector('#name');
nameInput.focus()

const otherJobRole = document.querySelector('#other-job-role');
otherJobRole.style.display = 'None';

const jobRole = document.querySelector('#title');
jobRole.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherJobRole.style.display = '';
    } else {
        otherJobRole.style.display = 'None';
    }
})

const shirtColors = document.querySelector('.shirt-colors');
shirtColors.style.display = 'None';

const design = document.querySelector('#design');
design.addEventListener('change', (e) => {
    const colors = document.querySelectorAll('#color > option')
    shirtColors.style.display = '';
    colorSelect = document.querySelector('#color');
    
    if (e.target.value === 'js puns') {
        for (let i = 0; i < colors.length; i++) {
            colors[i].style.display = '';
            if (i >= 4) {
                colorSelect.value = colors[1].value;
                colors[i].style.display = 'None';
            }
        }
    } else {
        for (let i = 0; i < colors.length; i++) {
            colors[i].style.display = '';
            colorSelect.value = colors[4].value;
            if (i <= 3) {  
                colors[i].style.display = 'None';
            }
        }
    }   
});

let totalCost = 0;
const activities = document.querySelector('#activities');
activities.addEventListener('change', (e) => {
    totalCost = 0;
    activityCheckboxes = document.querySelectorAll('#activities > label');
    for (let i = 0; i < activityCheckboxes.length; i++) {
        const checkBox = activityCheckboxes.querySelector('input');
        const cost = activityCheckboxes.lastChild.textContent;
        if (checkBox.checked == true) {
            totalCost += cost;
        }
    }
});