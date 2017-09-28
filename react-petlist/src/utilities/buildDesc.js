const trimDesc = description => description.lastIndexOf(' ');

const buildDesc = description => {
  // do expression, see https://babeljs.io/docs/plugins/transform-do-expressions/
  return do {
    if (description.length <= 48) {
      description;
    } else {
      if (description[47] === ' ') `${description.slice(0, 47)}...`;
      else {
        let desc = description.slice(0,48);
        const trimPoint = trimDesc(desc);
        `${desc.slice(0, trimPoint)}...`;
      }
    }
  }
}

export default buildDesc;
