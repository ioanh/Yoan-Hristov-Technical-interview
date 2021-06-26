import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { delay } from "rxjs/operators";
import {UserItem} from './store/models/user.model'
import {PostItem} from './store/models/post.model'

@Injectable({
    providedIn: 'root'
})

export class UserPostService {
    constructor(private http: HttpClient) {}

    getUsers(){
        return this.http.get<Array<UserItem>>('http://jsonplaceholder.typicode.com/users')
    }

    getPost(id: string){
        return this.http.get<PostItem>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    }
}