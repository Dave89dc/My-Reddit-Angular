import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Post } from 'src/app/models/base-model';
import { RedditServiceService } from 'src/app/services/reddit-service.service';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.scss'],
  standalone: true,
  imports: [MatGridListModule],
})
export class GridCardComponent {

  @Input() post?: Post;
  posts: Post[] = [];

  constructor(private redditService: RedditServiceService){
  }

}
