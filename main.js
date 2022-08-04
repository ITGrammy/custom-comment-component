import "./style.css";

//main js imports the style.css and incorporates the title
document.querySelector("#app").innerHTML = `
  <h1>Monique's Custom Comment Component!</h1>
`;

const addComment = (ev) => {
  ev.preventDefault();
  console.log("hello world");

  //go out into the DOM and find the e w/the id, name, then get it's val then it stores var in a val called name
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#my_email").value;
  const message = document.querySelector("#message").value;
  const currentDate = new Date();
  const time = currentDate.toLocaleTimeString();

  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
  const currentYear = currentDate.getFullYear();

  const dateString =
    currentMonth +
    1 +
    "-" +
    currentDayOfMonth +
    "-" +
    currentYear +
    "  " +
    time;

  //CSSCounterStyleRule;

  //prints value in var called name, etc.
  console.log(name);
  console.log(email);
  console.log(message);
  console.log(dateString);
  console.log(time);

  const template = `<custom-comment
  name="${name}"
  email="${email}"
  comment="${message}"
  timestamp="${dateString}"

></custom-comment>`;

  document
    .querySelector("#comments")
    .insertAdjacentHTML("afterbegin", template);
  document.querySelector("#name").value = "";
  document.querySelector("#my_email").value = "";
  document.querySelector("#message").value = "";
  document.querySelector("#yes").checked = false;
  //grab what user typed and set it to empty
};

document.querySelector("form").addEventListener("submit", addComment);
