const buildURL = title => title
  .replace(/[^0-9a-zA-Z_\- ]/g, '')
  .replace(/\s+/g, '-')
  .replace(/\--+/g,'-');

export default buildURL;
