// Tagged Templates
// const namae = "Aozora Umeko";
// const age = 20;

// // Rest Parameter (...args)

// function coba(strings, ...args) {
//   //   let result = "";
//   //   strings.forEach((str, index) => {
//   //     result += `${str}${args[index] || ""}`;
//   //   });
//   //   return result;

//   return strings.reduce(
//     (result, str, i) => `${result}${str}${args[i] || ""}`,
//     ""
//   );
// }

// const str = coba`Hello, my name is ${namae}, i'm ${age} old years`;
// console.log(str);

// Highlight
const namae = "Aozora Umeko";
const age = 20;
const email = "aozoraumeko@gmail.com"

function highlight(strings, ...args) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${args[i] || ""}</span>`,
    ""
  );
}

const str = highlight`Hello, my name is ${namae}, i'm ${age} old years and my email is ${email}`;
document.body.innerHTML = str;
