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



class MakeStudents{
    constructor(fname,lname,contact,isVerified){
        this.fname=fname;
        this.lname=lname;
        this.contact=contact;
        this.isVerified=isVerified;


    this.showProfile=function(){
        if(this.isVerified==true){
            console.log(`Name: ${this.fname} ${this.lname}, Contact: ${contact}`);
        }
        else{
            console.log('User does not exist');
        }
    }
}
}

MakeStudents.__proto__.showProfile = showProfile

let s1 =new MakeStudents('Jesse', 'Simes', 95082, true)
let s2 =new MakeStudents('Joy', 'Simes', 95082, false)

console.log(s1)
console.log(s2)

s1.showProfile()
s2.showProfile()


let papa={
    fname:'Pravir',
    lname:'Simes',
    love:'Music'
}

let beta={
    fname:'Jesse',
    lname:'Simes'
}

beta.__proto__ = papa

console.log(beta.love)