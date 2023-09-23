import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  songdata!: any;

  
constructor(private songData:SongService){

}
  ngOnInit(): void {
    this.songData.songdata.subscribe((data)=>{
      this.songdata=data
    })
    
    console.log(this.songdata);
    
  }
  
  

 

}
