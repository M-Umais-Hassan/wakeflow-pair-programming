import openai from "../config/openai.js";
import { PROGRAMMING_LANGUAGES } from "../utils/constants.js";
import ErrorHandler from "../utils/error.js";
import { modifyPrompt } from "../utils/helpers.js";
import tryCatch from "../utils/tryCatch.js";

export const askPrompt = tryCatch(async (req, res, next) => {
  const { message } = req.body || {};

  if (!message) throw new ErrorHandler("Message is required", 404);

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "assistant",
        content: modifyPrompt(message, PROGRAMMING_LANGUAGES.JAVASCRIPT),
      },
    ],
    model: "gpt-3.5-turbo",
  });

  if (!completion?.choices?.length) {
    throw new ErrorHandler("Something went wrong with openai", 500);
  }

  let code = completion?.choices[0]?.message?.content;

  return res.status(200).send({
    success: true,
    statusCode: 200,
    response: code,
  });
});
