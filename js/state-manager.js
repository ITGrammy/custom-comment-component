/*
The job of the state manager is to: 
    1. + organize the data.
    2. update the data when a component notifies the state manager.
    3. let other components know when the data has changed.


Each comment has:
    1. Name of the person
    2. Email
    3. Comment
    4. Timestamp
*/

export default class StateManager {
  constructor() {
    // this week: figuring out how to store and then reload
    // comments using indexDB.
    this.comments = [
      {
        name: "John",
        email: "Johnnyboy@gmail.com",
        comment: "I commented!",
        timestamp: "7/29/2022 3:15:13PM",
      },
      {
        name: "Nina",
        email: "NinaNiiina@gmail.com",
        comment: "I need me to be me ",
        timestamp: "8/3/2022 3:15:13PM",
      },
      {
        name: "MoniqueNiqui",
        email: "momoni@gmail.com",
        comment: "I am wealthy, healthy and strong! ",
        timestamp: "8/4/2022 3:15:13PM",
      },
    ];
    //mailing list
    this.subscribers = [];
  }

  // 2. we need a way to update the comments list
  //The form invoked the stateManager's add comment function
  addComment(newComment) {
    this.comments.push(newComment);
    //push method of an array appends item to the bottom
    console.log(this.comments);

    //Now we need to notify all of the subscribers that
    //a comment has been added
    //So that each subscriber can respond
    //To do this we loop thru ea. subscriber
    //and invoke the cb function
    for (let i = 0; i < this.subscribers.length; i++) {
      const theEvent = this.subscribers[i][0];
      const theFunction = this.subscribers[i][1];
      if (theEvent == "add-comment") {
        theFunction(this.comments);
      }
    }
  }

  // 3. We need a way to tell the other components to redraw
  subscribe(theEvent, theResponse) {
    //This code adds a list of two elements to the subscribers array
    //What happens---The first element is a string that indicates which
    //event the subscriber's interested in (comment added, deleted, liked)
    //The reponse to what hap---the second element is a function that will get
    //invoked/executed when the event happens

    this.subscribers.push([theEvent, theResponse]);
  }
}
