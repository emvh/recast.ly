// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import YOUTUBE_API_KEY from './config/youtube.js';

ReactDOM.render(<App propYoutube={YOUTUBE_API_KEY}/>, document.getElementById('app'));
