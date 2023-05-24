import { Component } from '@angular/core';

import { Post } from 'src/app/models/base-model';
import { RedditServiceService } from 'src/app/services/reddit-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  selectedArgument = 'all';
  isLight: boolean = true;

  posts: Post[] = [];

  constructor(private redditService: RedditServiceService){
    this.loadPosts();
  }

  changeThemes(){
    document.body.classList.toggle('dark-mode');
    this.isLight = ! this.isLight;
  }

  loadPosts(){
    this.redditService.getRedditPosts(this.selectedArgument).subscribe({
      next: data => this.posts = data,
      error: err => console.log('Errore: ', err)
    });
  }

}
