/*
The job of the comment list is to:
1. At the very beginning, draw all the comments.
2. If it gets notified that a new comment has been created, 
   it should draw a new comment at the top.
*/

export default class CommentList {
  constructor(comments) {
    //when a new instance of CommentList is created,
    //it needs to know what comments it should draw
    //it should draw those comments
    this.redraw(comments);
    //when I initialize comments I want it to invoke and redraw my comments
  }
  redraw(comments) {
    //the "redraw" method will clear out the comments and
    //redraw with new comments.
    document.querySelector(".comments").innerHTML = "";
    
    
    console.log(comments);

    for (let i = 0; i < comments.length; i++) {
        //Here it loops through and creates a new comment
      // Person named first:
      let name = comments[i].name;
      let email = comments[i].email;
      let comment = comments[i].comment;
      let timestamp = comments[i].timestamp;

      // creating an HTML representation of it
      let template = `
                <custom-comment 
                    name="${name}" 
                    email="${email}" 
                    comment="${comment}"
                    timestamp="${timestamp}">
                </custom-comment>
            `;

      // we need to append it to the DOM
      document
        .querySelector(".comments")
        .insertAdjacentHTML("afterbegin", template);
    }
  }
  greeting(){
    console.log("hello world");
  }
}
