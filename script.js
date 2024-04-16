

// Selecting elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

let completedCount = 0;
let uncompletedCount = 0;

// Function to add a new task
function addTask() {
    // Getting the task text from the input box
    const task = inputBox.value.trim();
    
    // Checking if the task is empty
    if (!task) {
        alert("Please enter a task.");
        return;
    }
    
    // Creating a new list item
    const li = document.createElement("li");
    
    // Creating checkbox input
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            completedCount++;
            uncompletedCount--;
        } else {
            completedCount--;
            uncompletedCount++;
        }
        updateCounters();
    });
    
    // Creating span for task content
    const taskSpan = document.createElement("span");
    taskSpan.textContent = task;
    
    // Creating edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", function() {
        // Implement edit functionality
        // For now, let's just log a message
        console.log("Edit task:", task);
    });
    
    // Creating delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
        listContainer.removeChild(li);
        if (checkbox.checked) {
            completedCount--;
        } else {
            uncompletedCount--;
        }
        updateCounters();
    });
    
    // Add elements to list item
    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    
    // Add list item to list container
    listContainer.appendChild(li);
    
    // Incrementing uncompleted task count
    uncompletedCount++;
    
    // Updating counters
    updateCounters();
    
    // Clearing input box
    inputBox.value = "";
}

// Function to update counters
function updateCounters() {
    completedCounter.textContent = completedCount;
    uncompletedCounter.textContent = uncompletedCount;
}
















// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// function addTask() {
//     const task = inputBox.value.trim();
//     if (!task) {
//       alert("Please write down a task");
//       return;
//     }else {
//         const li=document.createElement("li");  
//         li.innerHTML = inputBox.value;    
//         listContainer.appendChild(li);
        
//         const span=document.createElement("span");
//         li.appendChild(span);
  
//   }
//   inputBox.value = "";
// }





// const checkbox = li.querySelector("input");
// const editBtn = li.querySelector(".edit-btn");
// const taskSpan = li.querySelector("span");
// const deleteBtn = li.querySelector(".delete-btn");

// Checkbox.addEventListener("click", function () {
//     li.classList.toggle("completed", checkbox.checked);
//     updateCounters();
//   });

//   editBtn.addEventListener("click", function () {
//     const update = prompt("Edit task:", taskSpan.textContent);
//     if (update !== null) {
//       taskSpan.textContent = update;
//     //   li.classList.remove("completed");
// //       checkbox.checked = false;

// //     updateCounters();
//     }
//   });
//   li.classList.remove("completed");

//   const completedCounter = document.getElementById("completed-counter");
//   const uncompletedCounter = document.getElementById("uncompleted-counter");

// function updateCounters(completedTasks,uncompletedTasks) {
//     // const completedTasks = document.querySelectorAll(".completed").length;
//     // const uncompletedTasks =document.querySelectorAll("li:not(.completed)").length;
  
//     completedCounter.textContent = completedTasks;
//     uncompletedCounter.textContent = uncompletedTasks;
//   }


// // updateCounters();









