import { Octokit } from "octokit";
import CryptoJS from "crypto-js";
const octokit = new Octokit({ auth: CryptoJS.AES.decrypt("U2FsdGVkX1/ZI5LgGJF+1aJ73keUiAJATV7d7l9EVAMbFTDLsUSm+eY/f5OXshGWJQdcc9K0NuNYmoBocfLApA==", "hard boiled egg").toString(CryptoJS.enc.Utf8)});


export { octokit };
