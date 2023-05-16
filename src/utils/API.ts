import axios, { AxiosInstance } from "axios";

let sendInstanse: AxiosInstance;
let getInstanse: AxiosInstance;
let deleteNotificationInstanse: AxiosInstance;

function createSendInstanse(IdInstance: string, apiTokenInstance: string) {
  sendInstanse = axios.create({
    baseURL: `https://api.green-api.com/waInstance${IdInstance}/SendMessage/${apiTokenInstance}`,
    headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
  });
}

function createGetInstanse(IdInstance: string, apiTokenInstance: string) {
  getInstanse = axios.create({
    baseURL: `https://api.green-api.com/waInstance${IdInstance}/ReceiveNotification/${apiTokenInstance}`,
  });
}

function createDeleteNotificationInstanse(IdInstance: string, apiTokenInstance: string) {
  deleteNotificationInstanse = axios.create({
    baseURL: `https://api.green-api.com/waInstance${IdInstance}/DeleteNotification/${apiTokenInstance}`,
    headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
  });
}

async function setAccSettings(IdInstance: string, apiTokenInstance: string) {
  console.log("SET SETTINGS");

  let res = await axios.post(`https://api.green-api.com/waInstance${IdInstance}/SetSettings/${apiTokenInstance}`, {
    webhookUrl: "",
    incomingWebhook: "yes",
  });

  let state = await axios.get(`https://api.green-api.com/waInstance${IdInstance}/getStateInstance/${apiTokenInstance}`);
  console.log("NEW SETTINGS", res.data, state.data);

  return res;
}

export {
  sendInstanse,
  getInstanse,
  deleteNotificationInstanse,
  createSendInstanse,
  createGetInstanse,
  setAccSettings,
  createDeleteNotificationInstanse,
};
