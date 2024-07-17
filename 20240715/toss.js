import { choseongIncludes } from 'es-hangul';

const searchWord = '라면';
const userInput = 'ㄹㅁ';

const result = choseongIncludes(searchWord, userInput);
console.log(result); // true
