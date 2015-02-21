var Video = function(name,url,title,description,rating) {
this.name = name;
this.url = url;
this.title = title;
this.description = description;
this.rating = 0;

}
videoCounter = 0;

var videoArray = [
{name:'chappelle video',url:'<iframe width="560" height="315" src="https://www.youtube.com/embed/n0w099fw4lw" frameborder="0" allowfullscreen></iframe>',title:'rick james and charlie murphy',description:'segment from chappelle show'},
{name:'minions',url:'<iframe width="560" height="315" src="https://www.youtube.com/embed/IuMzCcX_o9g" frameborder="0" allowfullscreen></iframe>',title:'minions stuff',description:'a video my son enjoyed'},
{name:'killing them softly',url:'<iframe width="560" height="315" src="https://www.youtube.com/embed/ofnSojq-vqI" frameborder="0" allowfullscreen></iframe>',title:'killing them softly',description:'dave chappelle stand up'},
{name:'new Circle Training',url:'<iframe width="420" height="315" src="https://www.youtube.com/embed/36n93jvjkDs" frameborder="0" allowfullscreen></iframe>', title:'circle Training', description:' something very unfunny'}

];
console.log('array length',videoArray.length);

var addVideo = function(name, url, title,description,rating) {
	videoArray.push(new Video(name,url,title,description,rating));
}

// console.log('array length after push',videoArray.length);

module.exports = {
	addVideo: addVideo,
	videoArray: videoArray,
	videoCounter : videoCounter

}