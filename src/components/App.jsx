import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
// import YOUTUBE_API_KEY from '../config/youtube.js';
// import Search from './Search.js';

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         {/* do we hard code this data input? does it only take in the first video? */}
//         <VideoPlayer video={exampleVideoData[0]} />
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={exampleVideoData} />
//       </div>
//     </div>
//   </div>
// );


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //needs to keep track of all the videos in the video list and the current video in the player
      // videoList: [],
      videoList: exampleVideoData,
      videoPlayer: exampleVideoData[0]
      // videoPlayer: {}
    };
    this.handleClick = this.handleClick.bind(this);
    // this.setState = this.setState.bind(this);
    this.getVideos = this.getVideos.bind(this);
  }

  //create event handler for click event when videoListEntry is clicked
  handleClick(video) {
    this.setState ({
      videoPlayer: video
    });
  }

  componentDidMount() {
    this.getVideos();
  }

  getVideos() {
    let options = {
      key: this.props.propYoutube,
      query: 'puppies',
      max: 5
    }
    searchYouTube(options,
    (videos) => {
      console.log(videos);
      this.setState ({
        videoList: videos,
        videoPlayer: videos[0]
      });
    });
  }



  render() {
    console.log(this.state)
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* do we hard code this data input? does it only take in the first video? */}
            <VideoPlayer video={this.state.videoPlayer} />
          </div>
          <div className="col-md-5">
            <VideoList
              videos={this.state.videoList}
              onClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }

}





// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
