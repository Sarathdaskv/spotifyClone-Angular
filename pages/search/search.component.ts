import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Category } from 'src/app/searchCategories';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  individualCollection: Category[] = [];

  ngOnInit(): void {
    this.individualCollection = [
      {
        color: 'red',
        name: 'Podcasts'
      },
      {
        color: 'green',
        name: 'Made For You'
      },
      {
        color: 'purple',
        name: 'Charts'
      },
      {
        color: '#8ba832',
        name: 'Bollywood'
      },
      {
        color: '#59bec9',
        name: 'Malayalam'
      },
      {
        color: '#c4b52b',
        name: 'Tamil'
      },
      {
        color: '#b05f5a',
        name: 'Telugu'
      },
      {
        color: '#54f7cc',
        name: 'Punjabi'
      },
      {
        color: 'black',
        name: 'Marathi'
      },
      {
        color: '#572447',
        name: 'Hip-Hop'
      },
      {
        color: '#edbe24',
        name: 'Workout'
      },
      {
        color: '#d94a11',
        name: 'R&B'
      },
    ]
  }

  searchInputRef(result: string) {
    if (result === '') {
      
      return this.individualCollection;
    } else {
     
      const filteredCollection = this.individualCollection.filter((item) => {
        if(item.name.includes(result)){
          return item
        }
        else{
          return this.individualCollection;
        }
      });
  console.log(filteredCollection);
  
      
      return filteredCollection;
    }
  }
  
}
