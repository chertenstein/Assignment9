class MediaPlaylist{
  constructor(title, length){
    this._title = title;
    this._length = length;
}
  mediaDisplay(){
  console.log('Title:' + this._title + '/n' + 'length:' + this._length);
  }
}

class Music extends MediaPlaylist {
  constructor(title, length, artist){
    super(title, length);
    this._artist = artist;
  }
  mediaDisplay(){
  console.log('Title:' + this._title + '/n' + 'Artist:' + this._artist + '/n' + 'Length:' + this._length);
  }
}

class Movie extends MediaPlaylist{
  constructor(title, length, rating){
    super(title, length);
    this._rating = rating;
  }
  mediaDisplay(){
    console.log('Title:' + this._title + '/n' + 'Length:' + this._length + '/n' + 'Rating:' + this._rating);
  }
}

class Podcast extends MediaPlaylist{
  constructor(title, length){
    super(title, length);
  }
  // console.log('Title:' + this._title + '/n' + 'length:' + this._length);
}


class FullPlaylist {
  constructor(){
    this._playlist1 = [];
    this._currentMedia = 0;
}
  addMedia(addMedia){
    console.log(this._playlist1.push(addMedia));
  }
  playingMedia(){
    console.log(this._playlist1[this._currentMedia].mediaDisplay());
  }
  nextItem(){
    if(this._currentMedia < this._playlist1.length - 1){
      this._currentMedia++;
    }else{
      this._currentMedia = 0;
    }
  }
  sortMedia(){
    console.log(this._playlist1.sort());
  }
}

let song1 = new Music('Sober', 'Childish Gambino', 279);
let movie1 = new Movie('Justice League', 120, 'PG-13');
let podcast1 = new Podcast('Welcome To Night Vale', 20);

let playlist = new FullPlaylist();
playlist.addMedia(song1);
console.log(playlist.playingMedia());

playlist.addMedia(movie1);
playlist.nextItem();
console.log(playlist.playingMedia());

playlist.addMedia(podcast1);
playlist.nextItem();
console.log(playlist.playingMedia());
