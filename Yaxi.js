
const Discord = require("discord.js");
const Yaxi = new Discord.Client();
//////// playing or dnd  streaming ////////
Yaxi.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `You only live once, so try to live for God.`,
 
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    Yaxi.user.setActivity(STREAMING, {      
    type: "As Up Dev", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
///////////////////////
Yaxi.on("ready", () => {
    var join = Yaxi.channels.get("858796966129827870"); /// id voice
    if (join) join.join();
  });
//////////////// tokn lera da bne 
Yaxi.login("OTIyMDc5NjE3Nzc3NTMyOTQ4.GwLXI7.BUwQHXpFUpOcbr7aQouoiul9FeQmKCa8m72hhI");
