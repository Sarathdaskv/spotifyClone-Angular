import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  //songdata: Subject<object>=new Subject<object>();
  songdata:BehaviorSubject<object>=new BehaviorSubject<object>({});
  constructor() { }

}
