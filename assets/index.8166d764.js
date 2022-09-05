const m=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};m();class l extends HTMLElement{constructor(){super()}connectedCallback(){const e=this.attachShadow({mode:"open"});e.innerHTML=`<section class="comment">
    
    
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
    `}}customElements.define("custom-comment",l);class d{constructor(){this.comments=[],this.subscribers=[],this.loadDatabase()}loadDatabase(){let e;var o=indexedDB.open("monique_app_db",2);o.onupgradeneeded=function(r){var t=r.target.result;console.log("running onupgradeneeded"),t.objectStoreNames.contains("comments")||t.createObjectStore("comments",{keyPath:"id",autoincrement:!0})},o.onsuccess=function(r){console.log("running onsuccess"),e=r.target.result,this.readCommentsFromDataStore(e)}.bind(this)}addComment(e){this.comments.push(e),console.log(this.comments),this.notify("comment-added",this.comments)}subscribe(e,o){this.subscribers.push([e,o])}notify(e,o){for(let r=0;r<this.subscribers.length;r++){const t=this.subscribers[r][0],n=this.subscribers[r][1];e==t&&n(o)}}readCommentsFromDataStore(e){var o=e.transaction("comments","readonly"),r=o.objectStore("comments"),t=r.openCursor(),n=[];t.onsuccess=function(s){s.target.result&&(n.push(s.target.result.value),s.target.result.continue())},o.oncomplete=function(s){console.log(n),this.notify("comments-loaded",n)}.bind(this)}}class u{constructor(e){e.subscribe("comment-added",this.redraw.bind(this)),e.subscribe("comments-loaded",this.redraw.bind(this))}redraw(e){document.querySelector(".comments").innerHTML="",console.log(e);for(let o=0;o<e.length;o++){let r=e[o].name,t=e[o].email,n=e[o].comment,s=e[o].timestamp,c=`
                <custom-comment 
                    name="${r}" 
                    email="${t}" 
                    comment="${n}"
                    timestamp="${s}">
                </custom-comment>

            `;document.querySelector(".comments").insertAdjacentHTML("afterbegin",c)}}greeting(){console.log("hello world")}}class h{constructor(e){this.stateManager=e;const o=`
 
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


        `;document.querySelector(".form-container").innerHTML=o,document.querySelector("form").addEventListener("submit",this.addComment.bind(this))}addComment(e){e.preventDefault();const o=new Date;let r=o.toLocaleDateString();r+=" "+o.toLocaleTimeString();const t={name:document.querySelector("#name").value,email:document.querySelector("#my_email").value,comment:document.querySelector("#message").value,timestamp:r};console.log(t),document.querySelector("#name").value="",document.querySelector("#my_email").value="",document.querySelector("#message").value="",document.querySelector("#yes").checked=!1,this.stateManager.addComment(t)}}const a=new d;new u(a);new h(a);
