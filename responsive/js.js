function CreatSongs(songName,album,artist,duration){
    this.songName=songName
    this.album=album
    this.artist=artist
    this.duration=duration
    
    this.albumcover= function(){
        console.log('Song name - ', this.songName);
        console.log('Album name - ', this.album);
        console.log('Artist name - ', this.artist);
        console.log('Duration - ', this.duration);
    }
}

let song1 = new CreatSongs("Run to You","Run to you","Brayn Adams",3.5);
let song2 = new CreatSongs("Blinding Lights","Lights","Weeknd",4.3);

console.log(song1)
console.log(song2)