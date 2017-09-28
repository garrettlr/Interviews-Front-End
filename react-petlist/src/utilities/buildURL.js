const buildURL = title => title
  .replace(/[^0-9a-zA-Z_\- ]/g, '')
  .replace(/\s+/g, '-')
  .replace(/\--+/g,'-')
  .toLowerCase();
// constrain to alphanumeric, dashes and underscores and spaces. remove spaces, then remove double dashes. finally, convert to lowercase. 
export default buildURL;
