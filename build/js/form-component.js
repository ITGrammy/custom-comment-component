/*

Form component:
1. Draws the form/template(elements) &inserts that  form in the DOM.
2. Listens for the form submit 
//to update or notifies the state manager when a user 
//fills in required info and clicks the button
3. It creates/builds a new comment object 


   {
        name: __________,
        email: _________,
        comment: _______, 
        timestamp: new Date()
   }

    and sends comment to the state manager.
4. It clears out the form

*/

export default class Form {
  // what is a constructor?
  // brings the instance to life
  constructor(sm) {
    this.stateManager = sm;
    const formTemplate = `
 
    <form action="#" method="POST">
      <img
        src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_1280.jpg"
        alt="Mo's Commenting System pic"
        width="300"
        height="200"
      />
      <!-- Name -->
      <div>
        <label for="name">Name (required)</label>
      </div>
      <div>
        <input
          required
          id="name"
          name="name"
          type="text"
          placeholder="Bookie Boo"
          maxlength="50"
          tabindex="1"
        />
      </div>

      <!-- Email -->
      <div>
        <label for="my_email"> Email (required)</label>
        <div>
          <input
            required
            id="my_email"
            name="my_email"
            type="email"
            spellcheck="false"
            placeholder="BookieBoo2@shemail.com"
            maxlength="255"
            tabindex="2"
          />
        </div>
      </div>

      <!-- Large Text Area -->
      <div>
        <label for="message"> Comment (required) </label>
        <div>
          <textarea
            id="message"
            name="message"
            spellcheck="true"
            rows="10"
            cols="50"
            tabindex="3"
            required
          ></textarea>
        </div>
      </div>
      <div>
        <fieldset>
          <legend>Check if you agree to have your comment posted!</legend>
          <div>
            <input
              type="checkbox"
              required
              id="yes"
              name="interest"
              value="yes"
            />
            <label for="yes">Yes</label>
          </div>
        </fieldset>
      </div>
      <input type="Submit" value="Submit" />
    </form>


        `;

    document.querySelector(".form-container").innerHTML = formTemplate;
//appends to the DOM says go find the "form container"
    document
      .querySelector("form")
      .addEventListener("submit", this.addComment.bind(this));
      //adds event listener when user clicks submit add comment 

      //trigger addComment object
  }

  addComment(ev) {
    // goal of add comment is to let the state manager know
    // that a new comment has been added:
    ev.preventDefault();

    const date = new Date();
    let dateString = date.toLocaleDateString();
    dateString += " " + date.toLocaleTimeString();

    const commentObject = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#my_email").value,
      comment: document.querySelector("#message").value,
      timestamp: dateString,
    };
    console.log(commentObject);

    document.querySelector('#name').value = "";
        document.querySelector('#my_email').value = "";
        document.querySelector('#message').value = "";
        document.querySelector('#yes').checked = false;


    // tell the state manager that we have
    // a new comment to add:
    this.stateManager.addComment(commentObject);

    // Your Job: how do you clear out your form!!
    
    //grab what user typed and set it to empty
  }
  
}
