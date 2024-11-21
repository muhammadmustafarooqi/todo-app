let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something');
    } else {
        let li = document.createElement('li');
        li.innerHTML = `${inputBox.value} <i class="ri-close-line"></i>`;
        listContainer.appendChild(li);

        // Clear the input box
        inputBox.value = '';

        // Add event listener for removing the task
        li.querySelector('i').addEventListener('click', () => {
            li.remove();
        });

        // Add event listener for marking as completed
        li.addEventListener('click', (e) => {
            if (e.target.tagName !== 'I') {
                li.classList.toggle('checked');
            }
        });
    }
}

gsap.from("#contain #todo",{
    scale:0,
    opacity:0,
    rotate:360,
    duration: 1.5
})