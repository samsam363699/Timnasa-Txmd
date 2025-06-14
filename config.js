import dotenv from "dotenv";
dotenv.config();

const conf = {
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "on",
  AUTO_LIKE: process.env.AUTO_LIKE || "on",
  AUTO_READ_DM: process.env.AUTO_READ_DM || "off",
  AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || "off",
  ADM: process.env.ANTI_DELETE || "on",
  ON: process.env.OWNER_NAME || "TIMNASA-TXMD",
  ANTICALL: process.env.ANTICALL || "off",
  ANTIPROMOTE: process.env.ANTIPROMOTE || "off",
  ANTIDEMOTE: process.env.ANTIDEMOTE || "off",
  ANTILINK: process.env.ANTILINK || "off",
  ANTILINK_ACTION: process.env.ANTILINK_ACTION || "delete",
  timezone: process.env.TIME_ZONE || "Africa/Nairobi",
  PRESENCE_DM: process.env.DM_PRESENCE || "typing",
  PRESENCE_GROUP: process.env.GROUP_PRESENCE || "paused",
  MODE: process.env.MODE || "private",
  AV: process.env.AV || "on",
  PREFIXES: process.env.PREFIX !== undefined 
  ? process.env.PREFIX.split(",").map(p => p.trim()) 
  : [""], 
  Session: process.env.SESSION || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUp5aUZqVFRXbUZMRjNUTnNHQUV4QWg4T2NWUmFhY2RwRExHMUxobENFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlg5dDcvWFk2UDhEYUlPZXh0SGxQaHI4V290cjIybWxXeGp6emRGazYxQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTVBtQm9zVXJTUWxpakVpK3VrdkVVMDlSc2pjd2Fyci9lZDJvSkNjTTEwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPNzQ4Z0k4K0JDNnZnb2M3RnJYdkhGU2VscnZSNWpkWXNodUFXSXVQRmk4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVDVjhQZmczeXk2bGwyYUJCcFEvck5jYk50cEEzdHF2VTMweVd3VG1NbHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNjMy9GZUl5Ly9mblpGWnNjdTVicEV3d2kyWkQ3VTNOSURzTFBjYmFUWDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlA4SElsWUs3WXBHc1NqRGhHNUdMNnFYMmR0WHZ3MnJiSGNWU2xvbUczMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTFaL3dicGQ2Y2xjQ0JFVTBTeFYyTWJ6M3B0azNVVk9iOW51ZnI3eHVtZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1yL2dERmFaRS9lR1YxYlNVcTFWa0ZZaTVYS0YxMEtBbHhTV3pUemZLNVpBOGFNdkdOcklEeWhrelJzQjZzdUVqVGU0WnA2Ry9jRWExWjVMdDhZZEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMyLCJhZHZTZWNyZXRLZXkiOiJjdTJYa0FaeDZacFh3dW5GdEdzSXdhTTBFeUpQOFVvaHcrSVB5VGg2Z1JnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmT0J1Z0ZwTlFnVzY2MVRTb2I4dUdRIiwicGhvbmVJZCI6IjkwY2E2OWZjLWI5M2UtNGZmZC05YjllLTYxMGZiNTlkNmE2OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyUWV4Nmh1UWdsL3h3N2xkM256c1R1K2hMaHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHRIQXRnVkp0UW8vWmVmaGRQRk9HRS9RcFg0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRPWElDVEVDIiwibWUiOnsiaWQiOiIyMzQ5MTYyODM1MjM4OjUxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjQ3OTU3NjcyNzQ3MTcwOjUxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkxmdnNVREVKZnFzc0lHR0E4Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZmk1eExXcTBwUEZzdzd0VzlvVW1ua0lUaGFOT3RBSFZpVGJWd3l4QndUcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiV25mVG56eWM1QkpscGw2VGhycnJrRW1aWUlEU3VRS3JuZTdTRTcwNC9ydWlUWnVGK1ZNYVl3eWRHWE51ZllXNzZaQXBRZTBqMGxLS1RuZ3o2ODZTQkE9PSIsImRldmljZVNpZ25hdHVyZSI6InpnZ2NDaXFieTF2TTZRN0VWU2pOQ1JvSkpvSWwweFc4RHdLQnJHbi9DUy9WaU9kMnJ1eVN2ZVhUZnVDNE45VzIrK3V6cnA2ckFUV2hya0VFQVJrVkJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTE2MjgzNTIzODo1MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYNHVjUzFxdEtUeGJNTzdWdmFGSnA1Q0U0V2pUclFCMVlrMjFjTXNRY0U3In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDk4NTc1NzIsImxhc3RQcm9wSGFzaCI6IjNnUFVKayIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT096In0=",
  NUMBER: process.env.OWNER_NUMBER || "2349162835238",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "VENOM2MP"
};

export default conf;
