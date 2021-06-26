import {Action} from '@ngrx/store'
import { UserItem } from '../models/user.model'
import { PostItem } from '../models/post.model'

export enum UserPostActionTypes{
    GET_USERS = '[USER] Get Users',
    GET_USERS_SUCCESS = '[USER] Get Users Success',
    GET_USERS_FAILURE = '[USER] Get Users Failure',
    GET_POST = '[USER] Get Post',
    GET_POST_SUCCESS = '[USER] Get Post Success',
    GET_POST_FAILURE = '[USER] Get Post Failure'
}

export class GetUsersAction implements Action {
    readonly type = UserPostActionTypes.GET_USERS
}

export class GetUsersActionSuccess implements Action {
    readonly type = UserPostActionTypes.GET_USERS_SUCCESS

    constructor(public payload: UserItem[]){}
}