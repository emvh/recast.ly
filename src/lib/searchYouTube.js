// import YOUTUBE_API_KEY from '../../src/config/youtube.js';


var searchYouTube = (options, callback) => {
  // TODO

  options = {
    // key: 'API_KEY',
    // q: 'cats',
    // maxResults: 10,
    key: 'API_KEY',
    query: 'cats',
    max: 10,
    // part: 'snippet',
    // type: 'video',
    // videoEmbeddable: true
  };


  var getData = function(successCB) {
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: options,
      // contentType: 'application/json',
      success: function(data) {
        callback(data);
      },
      // (data) => {
      //   console.log('success');
      //   callback(data);
      //   // callback();
      // },
      error: (status) => {
        console.log('failed');
        console.error('Failed to get video', status);
        // callback();
      }
    });
  };

  getData(callback);


  //invoke the callback with the videos array that is returned from hitting the endpoint
  // callback();


};



export default searchYouTube;
