// creating a new class that controls what our new element will look like
// This means we include what attributes it needs and how to present them using HTML
// We can also include a style declaration or style tag with rules this is totally optional
class Comment extends HTMLElement {
  constructor() {
    super();
  }
  //Method builds HTML for the component
  // This a class we are overring the ccb method with my own HTML code
  connectedCallback() {
    //below is the section for the component
    const shadow = this.attachShadow({ mode: "open" });
    //ShadowDom encapsulates the rule created so they don't leak out or impact other parts of the system

    shadow.innerHTML = `<section class="comment">
    
    
      <h2>${this.getAttribute("name")}</h2>
      
      <h3>${this.getAttribute("email")}</h3>
      <h4>${this.getAttribute("comment")}</h4>
      <h5>${this.getAttribute("timestamp")}</5>
      
      <!--<p>You can do what you are capable of believing you can do!!</p>-->
    </section>
    <style>
    .comment {

      border: solid black 1px;
      padding: 20px;
      margin: 20px;
      background-color: rgb(255, 127, 176);
    
    }
    </style>
    `;
  }
}

customElements.define("custom-comment", Comment);
//Everytime we run the tag name there is a new instance of comment component
// CE.define takes two arguements; 1st the name of the tag to be, and 2nd is the class used to control the tag
