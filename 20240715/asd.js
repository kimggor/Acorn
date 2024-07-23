// asd.ts
import { choseongIncludes } from 'es-hangul';

const string = '안녕하세요';
const keyword = 'ㅇㄴ';

// choseongIncludes 함수 사용
const result = choseongIncludes(string, keyword);

console.log(result); // true 또는 false 출력
