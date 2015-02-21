var youTubeVideos = require('../models/movie.js');
var _ = require('lodash');

var indexController = {
	index: function(req, res) {
		// res.render('index',{
		// 	// videos: youTubeVideos
		// });
	},

	videopage: function(req,res) {
		// console.log(youTubeVideos.videoArray[0]);
		// console.log(youTubeVideos.videoArray[1]);
		res.render('videoList',{
			videos:youTubeVideos.videoArray

		});
	},

	submitVideo: function(req,res) {
		// var url = req.body.url;;
		// var position = url.indexOf('=');
		// var id = url.slice(position+1, url.length);
		// console.log('req.body',req.body);
			if(youTubeVideos.videoArray.length >= 6) {
				res.render('index', {
					videolength: true
				});
			}
			else {
				res.render('index', {
					videolength: false,

				});
				// console.log('video array in else statement',youTubeVideos.videoArray)
				youTubeVideos.addVideo (
					req.body.name,
					// req.body.id
					req.body.url,
					req.body.title,
					req.body.description,
					req.body.rating

		);

			}
		
		console.log('array length',youTubeVideos.videoArray.length);
	},

	chunkArray: function(req,res){
		var chunks= _.chunk(youTubeVideos.videoArray,2);
		console.log('chunks',chunks);
		// console.log('chunk length',chunks.length);
		// console.log('0',chunks[0][0].name);
		// console.log('1',chunks[0][1].name);
		// 
		// var vid1 = chunks[0][0];
		// var vid2 = chunks[0][1];
		// var vid3 = chunks[1][1];
		// var vid4 = chunks[1][2];
		console.log('chunk 0',chunks[0]);
		res.render('paired-videos', {
			chunks: chunks
			// vid1: vid1,
			// vid2: vid2

		});
	}

};

module.exports = indexController;


