import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-song-cart',
  templateUrl: './song-cart.component.html',
  styleUrls: ['./song-cart.component.css']
})
export class SongCartComponent implements  OnInit {
  constructor(private router:Router,private songData:SongService ){

  }

  @Input() photoThumbnail!:string;

  @Input() title!:string;

  @Input() description!:string;

  @Input() song_id!:string|number;
  
  @Input() songLink!:string;

  ngOnInit(): void {
    
  }
  onPlaySong(id:string|number){
   this.router.navigateByUrl(`song/${id}`)
   this.songData.songdata.next({
    photoThumbnail:this.photoThumbnail,
    title:this.title,
    description:this.description,
    song_id:this.song_id,
    songLink:this.songLink
   })
  }

}
