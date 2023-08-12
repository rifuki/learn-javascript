// 1. HTML Fragments
// const student = {
//   name: "Aozora Umeko",
//   age: 20,
//   nim: "191011401905",
//   email: "aozoraumeko@icloud.com",
// };

// const el = `<div class="student">
//     <h2>${student.name}</h2>
//     <span class="nim">${student.nim}</span>
// </div>`;

// document.body.innerHTML = el;

// 2. Looping

// const student = [
//   {
//     name: "Aozora Umeko",
//     email: "aozoraumeko@icloud.com",
//   },
//   {
//     name: "Setsuna Rika",
//     email: "setsunarika@icloud.com",
//   },
//   {
//     name: "Ahane Sayaka",
//     email: "ahanesayaka@gmail.com",
//   },
// ];

// const el = `<div>
//     ${student
//       .map(
//         (s) => `<ul>
//         <li>${s.name}</li>
//         <li>${s.email}</li>
//     </ul>`
//       )
//       .join("")}
// </div>`;

// document.body.innerHTML = el;

// 3. Conditional
// ternary
// const song = {
//     title: "Bios",
//     artist: "Sawano Hiroyuki",
//     feat: "Hatsune Miku"
// }

// const el = `<div>
//     <ul>
//         <li>${song.title}</li>
//         <li>${song.artist} ${song.feat ? `(feat ${song.feat})` : ""}</li>
//     </ul>
// </div>`

// document.body.innerHTML = el;

// 4. Nested HTML
const student = {
  name: "Aozora Umeko",
  semester: 5,
  courses: [
    "Web Engineering",
    "Sistem Information and Management",
    "Basic Data",
    "Object-Oriented system design",
  ],
};

function printCourse(course) {
  return `<ol>
        ${course.map((cour) => `<li>${cour}</li>`).join("")}
    </ol>`;
}

const el = `<div>
    <h2> Name : ${student.name}</h2>
    <span>Semester : ${student.semester}</span>
    <h4>Courses : </h4>
    ${printCourse(student.courses)}
</div>`;

document.body.innerHTML = el;
