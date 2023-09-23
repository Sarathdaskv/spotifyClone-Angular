import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {
isSearchBarVisible:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  constructor() { }
}
