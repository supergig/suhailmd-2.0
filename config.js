I'mconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348173698061";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_18_11_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MixcbiAgICAgICAgMTY4LFxuICAgICAgICA2OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU0LFxuICAgICAgICA3OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY3LFxuICAgICAgICA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU3LFxuICAgICAgICA3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA0MixcbiAgICAgICAgMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDcxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NixcbiAgICAgICAgODEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODksXG4gICAgICAgIDkxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDg1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImswSmR4cnJtaG5qUlUrSEFYRTFPdGorMzM5YzM0YVJqSkx5MFN6a1dSckE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImpPZXRHZUREUzVTZUxCanU3QVhNdmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODFmYmNmZGYtY2NmOC00NDVmLTkzZDctY2RiMDA0Y2UzNmY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNyxcbiAgICAgIDIyMyxcbiAgICAgIDIzOSxcbiAgICAgIDIxNixcbiAgICAgIDMxLFxuICAgICAgMjUzLFxuICAgICAgMTQ0LFxuICAgICAgMzAsXG4gICAgICAyMzgsXG4gICAgICAxNDAsXG4gICAgICAxNTQsXG4gICAgICAyMzUsXG4gICAgICAyMjUsXG4gICAgICAxLFxuICAgICAgNDAsXG4gICAgICA2OSxcbiAgICAgIDE4OCxcbiAgICAgIDE3OCxcbiAgICAgIDQwLFxuICAgICAgNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg3LFxuICAgICAgMjAsXG4gICAgICA0MSxcbiAgICAgIDI1MyxcbiAgICAgIDAsXG4gICAgICAxMDksXG4gICAgICAzNSxcbiAgICAgIDE1MixcbiAgICAgIDEwNSxcbiAgICAgIDUxLFxuICAgICAgMTEzLFxuICAgICAgMTI5LFxuICAgICAgMjI3LFxuICAgICAgMTEzLFxuICAgICAgMjExLFxuICAgICAgNjEsXG4gICAgICAyMDMsXG4gICAgICAxNzUsXG4gICAgICAxNzksXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZBN0M3R0s4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTczNjk4MDYxOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MjIyMTgzOTgwMjQzNjoxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOMzlrdXdGRU1DNXc3a0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRjeHpGS0VlRmFPUHUwWFc2QzdobFdWbmdoOEZWUW1PUHg4S0JTU1hEaEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid09PQWZsS1hqYVRrMnFwYUZCL0l5WHVCZ1NLOCtjZk1VenJiMGQzdEJmZlBnREtobngyZWRScndoUVJ5TjBISmhMSkpPKzNSUlFBSzR5YTZ2MHROQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwield0NXdLT0dzMWVwUVJWZDV0Q0dxZ3haamFFWkZ0UHpGZEV0RmM0MEFCVHRQUHcxbEpXeXZpYXIxWGgwdktQTUduaVhlU1NQSHI4c0NpYmZnNTN6aFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE3MzY5ODA2MToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMjU1NDkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTmxPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFObE8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyZWQyVDJLN1JmaFNtbmpCUS9OVXZwNVVBbHQ3QkhkQ0tBZEkyWldpWnFZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1Njg5ODA3MDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTg2MTA5MTM4N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
