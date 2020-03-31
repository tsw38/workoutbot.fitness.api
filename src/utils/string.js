import stemmer from 'stemmer';
import stopword from 'stopword';

const cleanString = str => stemmer(stopword.removeStopwords(str.split(' ')).join(' ')).toLowerCase().replace(/\s/,'');

export const sameString = (str1, str2) => cleanString(str1) === cleanString(str2);