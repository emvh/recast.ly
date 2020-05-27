import YOUTUBE_API_KEY from '../../src/config/youtube.js';


var searchYouTube = (options, callback) => {
  // TODO

  //change the keys given in the options param to be the correct keys (q and maxResults)

  //AJAX GET REQUEST:
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true'
    },
    contentType: 'application/json',
    success: (data) => {

      console.log(data.items);
      //invoke the callback with the videos array that is returned from hitting the endpoint
      callback(data.items);

    },
    error: (status) => {
      console.log('failed');
      console.error('Failed to get video', status);

    }
  });

//simple get request:
  // $.get('https://www.googleapis.com/youtube/v3/search', {
  //   key: options.key,
  //   q: options.query,
  //   maxResults: options.max,
  //   part: 'snippet',
  //   type: 'video',
  //   videoEmbeddable: 'true'
  // }).done(data.items => {
  //   if (callback) {
  //     callback(data.items);
  //   }
  // });
};



export default searchYouTube;
