
'use client'


// components/YouTubePlayer.js
import React, { useState } from 'react';
import YouTube from 'react-youtube';
// import LazyLoad from 'react-lazyload';

const VideoPlayer = ({ videoId }) => {
	const [showPlayer, setShowPlayer] = useState(false);

	const opts = {
		height: '100%',
		width: '100%',
		playerVars: {
			autoplay: 1,
		},
	};

	const handlePlay = () => {
		setShowPlayer(true);
	};

	return (
		<div className="youtube-player" style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '56.25%' }}>
			{!showPlayer && (
				<div
					className="youtube-placeholder"
					onClick={handlePlay}
					style={{
						position: 'absolute',
						top: '0',
						left: '0',
						width: '100%',
						height: '100%',
					}}
				>
					<img
						//src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
						src={'https://www.metalskateboards.com/cdn/shop/files/Screen_Shot_2024-05-20_at_4.15.27_PM_1780x.png?v=1716239557'}
						alt="Video Preview"
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'cover', // Ensures the image fills the container without stretching
						}}
					/>
					<div className="play-button"></div>
				</div>
			)}

			{showPlayer && (
				//<LazyLoad height="100%" once>
				<div >
					<YouTube videoId={videoId} opts={opts} style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover' }} />
				</div>
				//</LazyLoad>
			)}
		</div>
	);
};


export default VideoPlayer;
