import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/base-model';

@Component({
  selector: 'app-reddit-card',
  templateUrl: './reddit-card.component.html',
  styleUrls: ['./reddit-card.component.scss']
})
export class RedditCardComponent {

  @Input() post?: Post;
  
}
