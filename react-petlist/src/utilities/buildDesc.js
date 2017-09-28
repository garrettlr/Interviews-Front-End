const trimDesc = description => description.lastIndexOf(' ');

const buildDesc = description => {
  return do {
    if (description.length <= 48) {
      description;
    } else {
      if (description[47] === ' ') description.slice(0, 48);
      else {
        description
        .slice(0,48).slice(0, trimDesc(description));
      }
    }
  }
}




const test = 'word1 description1 word2 description2 word3 description3 word4 description4';


const trimmed = trimDesc('word1 description1 word2 description2 word3 description3 word4 description4');
console.log(trimmed);
const workwith = test.slice(0, 48);
console.log(workwith);
console.log(workwith.length);
const trimat = trimDesc(workwith);
console.log(workwith.slice(0, trimat))
console.log(workwith.slice(0, trimat).length)
export default buildDesc;
