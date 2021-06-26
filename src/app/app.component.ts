import { Component } from '@angular/core';
import { UserPostState } from './store/reducers/user-post.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserItem } from './store/models/user.model';
import { OnInit } from '@angular/core';
import { GetUsersAction } from './store/actions/user-post.actions';
import { AppState } from './store/models/app-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  users$: Observable<Array<UserItem>>;

  ngOnInit(){
    this.users$ = this.store.select( store => store.userPost.users)
    this.store.dispatch(new GetUsersAction())
  }

  constructor(private store: Store<AppState>) {}
}
