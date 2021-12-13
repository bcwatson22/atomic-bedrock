const getRequestHeaders = (omitType = false): Headers => {

  const headers = new Headers();

  if (!omitType) headers.append('Content-Type', 'application/json');

  return headers;

};

export default getRequestHeaders;
