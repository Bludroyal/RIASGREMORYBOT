//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "2349164718113";
global.owner = process.env.OWNER_NUMBER || "2347053192517";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUp5UTNiTk51SERyU2VwaXZDSTliaXV6UVR3WFh5Z2FQLzVla1h5NGQxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNENMZG1BUmpsUjlsTTdXSWpQRGlUdGNRSkdLVll2eU14MlJES1lxUm9CWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RkJaZTZNMGJpVU9ucEVjdm1Ya2o3d2Ryd2IzUnJpQzNCSlI5Yk1BRjA4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMWnVhUVNJUzNmOWtiSHdEVnJ5cjE2Tk9taXo5ZlJ1d2xBblB4MDZJVWhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFFS3pUSzhnSEx3WTVCbkdXYUVwcGdNSU9DRVRreVArTnJ0enN4aElQM1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZIMjRPTy80WXN0K1doc1AzbXVwRk5oZ2xUOU0wa2pGdlFPNWJrc2lDanc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0QvUStYQ1dJQTlYNExOcE5INDdPRUtjd1k0N1BlM1ZlYUhLdHk3V2pWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNktjVW40R2xkY2NrWDlPWGR4cFNzM2lPU2FvM0JpNUFHRFNDK2xkNW5nQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5IYXBEbGRsVHVWT2k5bUh1dG80aTZxb3JlS1c1S2pteS9qVEdCYXpyclRieFpXeW9CVXVFaFVGbW5GRVZSQ01qaEJFZVZDS2FIT1dUdlNza2ovL0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDMsImFkdlNlY3JldEtleSI6ImRpYmhUelF2WnlPTU1mN1JjUUdrUGY1bERVTlBrdC9kR3BNRXJvUFlvYkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkZfWFR3Nm43UnJ1cEZSWGR2dFJYelEiLCJwaG9uZUlkIjoiZjFkMmI1ZjAtZWRiMS00NTA5LThiM2MtMzI5M2EzOGM4MjY2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxHcDZkTys5UU5NaFlmUTMyNDluc1JJdFA0Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtZllqWHlnNWY0YzdnNXhOUm1VYkFnT2tKS3M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTUxGVFJUTTQiLCJtZSI6eyJpZCI6IjIzNDcwNTMxOTI1MTc6NzZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tDeXVNWUhFSUd2d2JrR0dCRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImtVNVBxMWN6M3dQaWlvWG5GdWxkUjJBbE1rK2lEREJrb2lzdk4zeHpsaXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii9ZR3poRTJFVXd3b0IzdFpoc29aSFVYek5KMVREVWJLa3FieGx4NWMyWDl3MU5NOWJiVVNJVERsc2xuaDZPeTU4ZUlIODRJWWpkR0QxWEQ0ZG4yTkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLOXdiZTMzcm5Qd25UVVBCc0FYYnNvcUNDbDRYb1cvK0hOR2pkUmR3UjI2cnBRSzhvZlNDQU9rUlpHM2ZrUlIrbE9ranNPVWJXbFkvdXM4aDVYMmlCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNTMxOTI1MTc6NzZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWkZPVDZ0WE05OEQ0b3FGNXhicFhVZGdKVEpQb2d3d1pLSXJMemQ4YzVZciJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTIyMTM5MX0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ☯︎ᴇᴍᴍ ʏʏ✌︎💨",
  author: process.env.PACK_AUTHER || "☯︎ᴇᴍᴍ ʏʏ✌︎💨",
  packname: process.env.PACK_NAME || "☯︎ᴇᴍᴍ ʏʏ✌︎💨",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "☯︎ᴇᴍᴍ ʏʏ✌︎💨",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "☯︎ᴇᴍᴍ ʏʏ✌︎💨").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
