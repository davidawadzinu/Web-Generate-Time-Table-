// Data Arrays
const teachers = ["Mr. Akakpo", "Mrs. Zaglago", "Dr. Agbenyenugah"];
const rooms = ["Room 101", "Lab A", "Room 102"];
const courses = ["Mathematics", "Computer Science", "Physics"];
const timeSlots = ["09:00 - 10:30", "11:00 - 12:30", "14:00 - 15:30"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// DOM Selectors
const generateBtn = document.getElementById("generateBtn");
const timetableBody = document.getElementById("timetableBody");
const hideBtn = document.getElementById("hideBtn")

// Event Listener for click event
generateBtn.addEventListener("click", () => {
    // Clear out the previous layout
    timetableBody.innerHTML = "";
    // Build the grid structure
    timeSlots.forEach((slot) => {
        let rowHTML = `<tr><td><strong>${slot}</strong></td>`;
        
        days.forEach((day) => {
            // Pick random elements for standard display
            const randomCourse = courses[Math.floor(Math.random() * courses.length)];
            const randomTeacher = teachers[Math.floor(Math.random() * teachers.length)];
            const randomRoom = rooms[Math.floor(Math.random() * rooms.length)];
            
            rowHTML += `<td>
                <div class="slot-card">
                    <span class="course-name">${randomCourse}</span>
                    <span class="details">👨‍🏫 ${randomTeacher}</span>
                    <span class="details">🏢 ${randomRoom}</span>
                </div>
            </td>`;
        });
        rowHTML += `</tr>`;
        timetableBody.innerHTML += rowHTML;
    });
});

// Event Listener for click event
hideBtn.addEventListener("click", () => {
    // Clear out the previous layout
    timetableBody.innerHTML = "";
    // Build the grid structure
    timeSlots.forEach((slot) => {
        
        
        days.forEach((day) => {
            // Pick random elements for standard display
            const randomCourse = courses[Math.floor(Math.random() * courses.length)];
            const randomTeacher = teachers[Math.floor(Math.random() * teachers.length)];
            const randomRoom = rooms[Math.floor(Math.random() * rooms.length)];
           
        });
        rowHTML += `</tr>`;
        timetableBody.innerHTML += rowHTML;
    });
});