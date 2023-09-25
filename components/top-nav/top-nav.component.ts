
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from 'src/app/services/search-bar.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  isSearchVisible: boolean = false;
  @Output() inputSearchRef: EventEmitter<string> = new EventEmitter<string>();


  constructor(private router: Router, private searchBar: SearchBarService) {
    this.searchBar.isSearchBarVisible.subscribe(status => {
      this.isSearchVisible = status;
    })
  }

  goPlaces() {
    this.router.navigate(['/', 'login']);
  }

  onInputSearch(searchValue: HTMLInputElement) {
    this.inputSearchRef.emit(searchValue.value);
  }
}

