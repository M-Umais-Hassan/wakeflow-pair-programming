import { askPrompt } from "../controllers/codePrompt.js";

export const routes = (app) => {
  app.route("/prompt").post(askPrompt);
};

// andreas-kater
// You
// 9:25 PM
// https://wakeflow-pair-programming.vercel.app/prompt
// https://wakeflow-pair-programming.vercel.app
// You
// 9:27 PM
// {
//   "message": "write code for getting first monday of the month of July, 2024 and use dayjs library"
// }
// Andreas Kater
// 9:28 PM
// andreas-kater
