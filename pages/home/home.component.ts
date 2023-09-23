import { Component } from '@angular/core';
import { SearchBarService } from 'src/app/services/search-bar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

searchContent:boolean=false;
  songLists=[
    {
      song_id:1,
      photoThumbnail:'assets/atlanticPlayLists.jpg',
      title:'Atlantic',
      description:'New Songs from Drake,just launched',
      songLink:'assets/Dangerous.mp3'
    },
    {
      song_id:2,
      photoThumbnail:'assets/atlanticPlayLists.jpg',
      title:'Good Night',
      description:'New Songs from Drake,just launched',
      songLink:'assets/Dangerous.mp3'
    },
    {
      song_id:3,
      photoThumbnail:'assets/atlanticPlayLists.jpg',
      title:'Love Like Night',
      description:'New Songs from Drake,just launched',
      songLink:'assets/Dangerous.mp3'
    },
    {
      song_id:4,
      photoThumbnail:'assets/atlanticPlayLists.jpg',
      title:'Love Like Night',
      description:'New Songs from Drake,just launched',
      songLink:'assets/Dangerous.mp3'
    },
   
  ]

  constructor(private searchBar:SearchBarService){

  }
   
  onNavigates(params:string){
    if(params=='search'){
      this.searchBar.isSearchBarVisible.next(true);
      this.searchContent=true;
    }
    else{
      this.searchBar.isSearchBarVisible.next(false);
      this.searchContent=false;
    }
  }
}
