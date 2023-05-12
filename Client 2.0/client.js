const axios = require('axios');

let testGet =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8989/test_get_method?id=313455321&year=1995',
  headers: { }
};

axios.request(testGet).then((getResponse) => 
{

  let postData = JSON.stringify(
    {
    "id": "313455321",
    "year": "1995",
    "requestId": getResponse.data
    }
    );

  let testPost =
  {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:8989/test_post_method',
    headers:
    { 
      'Content-Type': 'application/json'
    },
    data : postData
  };

  axios.request(testPost).then((postResponse) => 
  {

    let putData =
    {
      "id": "7",
      "year": "9"
    };

    let testPut = 
    {
      method: 'put',
      maxBodyLength: Infinity,
      url: `http://localhost:8989/test_put_method?id=${postResponse.data.message}`,
      headers:
      { 
        'Content-Type': 'application/json'
      },
      data : putData
    };

    axios.request(testPut).then((putResponse) => 
    {
      let testDelete =
      {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `http://localhost:8989/test_delete_method?id=${putResponse.data.message}`,
        headers: { }
      };
      
      axios.request(testDelete).then((response) => 
      {})
      .catch((error) =>
      {
        console.log(error);
      });
    })

    .catch((error) =>
    {
      console.log(error);
    });

  })

  .catch((error) => 
  {
    console.log(error);
  });

}
)

.catch((error) => 
{
  console.log(error);
});