class App {
    static messages = [];
  
    static sendMessage(ques) {
      let message;
      if(ques) {
        message = ques["question"];
        App.messages.push([new Message(message, ques["image"])]);
      }
      else {
        message = document.getElementById("input").value;
        App.messages.push([new Message(messages)]);
        answers.push(message);
      }
      
      document.getElementById("input").value = "";
  
      localStorage.setItem("messages", JSON.stringify(App.messages));
      App.refreshChat(ques? true: false);
      return message;
    }
  
    static refreshChat(botmessage) {
      let div = document.getElementById("chat-content");
  
      for (
        let index = div.childNodes.length-3;
        index < App.messages.length;
        index++
      ) {
        const element = App.messages[index];
        let msg = document.createElement("span");
  
        msg.id = "msg-" + index;
        msg.classList.add("msg");
        if(botmessage) msg.classList.add("bot-message")
        msg.innerHTML += "<p class='body'> " + element.message + " </p>";
        msg.innerHTML += "<div class='footer'> " + element.timeStr + " </div>";
        div.appendChild(msg);
      }
    }
  }
  
  class Message {
    constructor(msg, image) {
      this.message = msg;
      this.time = new Date(Date.now());
      this.timeStr = this.time.toLocaleTimeString();
      this.image = image;
    }
  }
  
  
  
  App.messages =
    JSON.parse(localStorage.getItem("messages")) !== null
      ? JSON.parse(localStorage.getItem("messages"))
      : new Array();
  
  let div = document.getElementById("chat-content");
  for (let index = 0; index < App.messages.length; index++) {
    const element = App.messages[index];
    let msg = document.createElement("span");
  
    msg.id = "msg-" + index;
    msg.classList.add("msg");
    msg.innerHTML += "<p class='body'> " + element.message + " </p>";
    msg.innerHTML += "<div class='footer'> " + element.timeStr + " </div>";
    if(element.image){
      const img = document.createElement("img");
      img.src = element.image;
      img.width=500
      img.height=300
      document.body.appendChild(img);
    }
    div.appendChild(msg);
  }
  