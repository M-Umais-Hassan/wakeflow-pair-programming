// import acorn from "acorn";
import { PROGRAMMING_LANGUAGES } from "./constants.js";

/**
 * Takes a code and validate if it's valid javascript code or not
 * @param {string} code
 * @returns true | false
 */
// export const isValidJavaScript = (code) => {
//   try {
//     acorn.parse(code, { ecmaVersion: "latest" });
//     return true; // No syntax errors, code is valid
//   } catch (err) {
//     return false; // SyntaxError will be caught if code is invalid
//   }
// };

/**
 * Takes prompt as user input and modified based on our language specific output requirments
 * @param {string} prompt
 * @param {string} language
 * @returns string
 */
export const modifyPrompt = (
  message = "",
  language = PROGRAMMING_LANGUAGES.JAVASCRIPT
) => {
  if (message && language) {
    return `Provide only ${language} code for the 
            prompt in double quotes, and use following instructions,
            1. even if in the prompt there is some other language keywords included just ignore them, 
            2. remove ${language} or js or anyother keyword at start of response, 
            3. always remove the backtics
            4. always name the returned function name as 'main'
            5. alwys use modulejs syntax "import syntax" for libraries instead of commonjs 
            Here is code related question: "${message}"`;
  }
  return message;
};
