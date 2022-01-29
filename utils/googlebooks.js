const axios = require("axios");

module.exports = async (phrase) => {
  const results = await axios.get(
    "https://www.googleapis.com/books/v1/volumes",
    {
      params: {
        format: "json",
        q: 'Turing',//`${phrase}`,
      },
    }
  );

  // console.log(results.data);
  // console.log(results.status);
  // console.log(results.statusText);
  // console.log(results.headers);

  let returnThis = {
      data: results.data,
      status: results.status,
      statusText: results.statusText,
      headers: results.headers,
      requestHeader: results.config.headers,
  }

  return JSON.stringify(returnThis);
};

/*  

        const results = await axios({
        method: 'get',
        url: 'https://www.googleapis.com/books/v1/volumes',
        params: {
            format: 'json',
            q: `${phrase}`,
        },
    })*/
