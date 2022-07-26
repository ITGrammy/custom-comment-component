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
    //Now deprecating dependencies on this array borrowing code from db test file
    // this week: figuring out how to store and then reload
    // comments using indexDB.
    // this.comments = [
    //   {
    //     name: "John",
    //     email: "Johnnyboy@gmail.com",
    //     comment: "I commented!",
    //     timestamp: "7/29/2022 3:15:13PM",
    //   },
    //   {
    //     name: "Nina",
    //     email: "NinaNiiina@gmail.com",
    //     comment: "I need me to be me ",
    //     timestamp: "8/3/2022 3:15:13PM",
    //   },
    //   {
    //     name: "MoniqueNiqui",
    //     email: "momoni@gmail.com",
    //     comment: "I am wealthy, healthy and strong! ",
    //     timestamp: "8/4/2022 3:15:13PM",
    //   },
    // ];
    //mailing list
    this.comments = [];
    this.subscribers = [];
    this.loadDatabase();
  }

  //This method does 3 things; loads db(moniqueapp.db)
  //& creates a new comment store if it doesn't exist.
  //Then, it reads the comment store
  loadDatabase() {
    let db;

    var openRequest = indexedDB.open("monique_app_db", 2);

    // 1. This function created our new data store:
    openRequest.onupgradeneeded = function (e) {
      var db = e.target.result;
      console.log("running onupgradeneeded");

      // create new data stores:
      if (!db.objectStoreNames.contains("comments")) {
        var storeOS = db.createObjectStore("comments", {
          keyPath: "id",
          autoincrement: true,
        });
      }
    };

    // 2. This function fires when the database has been opened.
    // This is where we will add new comments to the datastore:
    openRequest.onsuccess = function (e) {
      console.log("running onsuccess");
      db = e.target.result;
      // call this function to create a new comment:

      this.readCommentsFromDataStore(db);
    }.bind(this);
  }

  // 2. we need a way to update the comments list
  //The form invoked the stateManager's add comment function
  addComment(newComment) {
    this.comments.push(newComment);
    //push method of an array appends item to the bottom
    console.log(this.comments);
    this.notify("comment-added", this.comments);
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

  notify(theEvent, theData) {
    //Now we need to notify all of the subscribers that
    //a comment has been added
    //So that each subscriber can respond
    //To do this we loop thru ea. subscriber
    //and invoke the cb function
    for (let i = 0; i < this.subscribers.length; i++) {
      const subscriberEvent = this.subscribers[i][0];
      const theFunction = this.subscribers[i][1];
      if (theEvent == subscriberEvent) {
        theFunction(theData);
      }
    }
  }

  readCommentsFromDataStore(db) {
    var transaction = db.transaction("comments", "readonly");
    var objectStore = transaction.objectStore("comments");
    var cursorRequest = objectStore.openCursor();
    var commentList = [];
    cursorRequest.onsuccess = function (event) {
      if (event.target.result) {
        // if(event.target.result.value['id'] && event.target.result.value['id'] == value){ //compare values
        commentList.push(event.target.result.value);
        // }
        event.target.result["continue"]();
      }
    };

    transaction.oncomplete = function (event) {
      console.log(commentList);
      this.notify("comments-loaded", commentList);
      // callback(agregate); // return items
    }.bind(this);
  }
}
