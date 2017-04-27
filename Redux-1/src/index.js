// Create a new component.
// This component should create some HTML

// Take this componet's generated HTML and put it on the page( in the DOM)


import _ from 'lodash';
import React, {Component} from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from 'youtube-api-search';
import VideoList from "./components/video_list";
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBN2JWPrFtwOnJX9DFa8rkNRlfFG-Kin5w';
 
class App extends Component{
    constructor(props){
        super(props); 

        this.state={
            videos:[],
            selectedVideo:null
        };


        this.videoSearch('麻将');

    }
    videoSearch(term){

        YTSearch({key: API_KEY, term: term}, 
            (videos)=>{
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
                });
            });
    }
    

    render(){
        const videoSearch= _.debounce((term)=>{ this.videoSearch(term)},500);


        return(
            <div>
             <SearchBar onSearchTermchange={videoSearch} />
             <VideoDetail video={this.state.selectedVideo}/>
             <VideoList
              onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
              videos={this.state.videos}/>
            </div>
            );
    }
}
 
ReactDOM.render(<App />, document.querySelector('.container')); // Check the index.html for "container"