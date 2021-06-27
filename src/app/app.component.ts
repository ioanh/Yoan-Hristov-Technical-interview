import { Component } from '@angular/core';
import { UserPostState } from './store/reducers/user-post.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserItem } from './store/models/user.model';
import { OnInit } from '@angular/core';
import { GetPostAction, GetUsersAction } from './store/actions/user-post.actions';
import { AppState } from './store/models/app-state.model';
import { PostItem } from './store/models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  users$: Observable<Array<UserItem>>;
  usersLoading$: Observable<boolean>;
  post$: Observable<Array<PostItem>>;
  postLoading$: Observable<boolean>;

  ngOnInit(){
    this.users$ = this.store.select( store => store.userPost.users)
    this.post$ = this.store.select(store => store.userPost.post)
    this.postLoading$ = this.store.select(store => store.userPost.postLoading)
    this.usersLoading$ = this.store.select(store => store.userPost.usersLoading)
    this.store.dispatch(new GetUsersAction())
  }

  constructor(private store: Store<AppState>) {}

  getPost(id){
    this.store.dispatch(new GetPostAction(id))
  }
}
