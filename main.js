import "./style.css";

import './comment.js'
import StateManager from './state-manager.js'
import CommentList from './comment-list.js'
import Form from './form-component';
import Counter from './counter.js';

/*
Goal:
1. Create a new instance of the state manager
2. Create a new instance of the comment list
    * the comment list needs the data from the state manager
      so that it knows how to draw the comments.
*/

const stateManager = new StateManager();
// const counter = new Counter(stateManager);
const commentList = new CommentList(stateManager);
const form = new Form(stateManager);

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
  const currentMonth = currentDate.getMonth(); 
  // Be careful! January is 0, not 1
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
