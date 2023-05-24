import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, map, tap } from 'rxjs';

import { Post } from '../models/base-model';

@Injectable({
  providedIn: 'root'
})
export class RedditServiceService {

  constructor(private http: HttpClient) { }

  getRedditPosts(argument: string): Observable<Post[]>{
    return this.http.get<any>('https://www.reddit.com/r/' + argument + '/hot.json?limit=100')
      .pipe(
        tap((obj) => console.log('Sono dentro al primo tap: ', obj)),
        map((obj) => obj.data),
        tap((data) => console.log('Sono nel secondo tap: ', data)),
        map((data) => data.children),
        tap((children) => console.log('Sono nel terzo ta: ', children)),
        map((childrenData) => childrenData.map((child: any) => child.data)),
        tap((childrenData) => console.log(childrenData))
      )
  }

}
