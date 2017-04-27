import React from 'react';


const VideoListItem = ({video,onVideoSelect})=>{
	
    const imageuUrl = video.snippet.thumbnails.default.url;
    const heading= video.snippet.title;
	return(
		<li onClick={()=> onVideoSelect(video)} className="list-group-item">
         <div className="video-list media">
           <div className="media-left">
             <img className="media-object" src ={imageuUrl}/>
            </div>
            <div className="media-body">
             <div className="media-heading">{heading} </div>
             </div>
          </div>

		</li>
		) ;
};


export default VideoListItem;