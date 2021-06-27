import { UserPostAction, UserPostActionTypes } from "../actions/user-post.actions";
import { PostItem } from "../models/post.model";
import { UserItem } from "../models/user.model";

export interface UserPostState {
    users: UserItem[],
    post: PostItem[],
    usersLoading: boolean,
    postLoading: boolean,
    error: Error
}

const initialState: UserPostState = {
    users: [],
    post : [],
    usersLoading: false,
    postLoading: false,
    error: undefined
}

export function UserPostReducer(state: UserPostState = initialState, action: UserPostAction){
    switch(action.type){
        case UserPostActionTypes.GET_USERS:
            return {
                ...state, 
                usersLoading: true
            }
        case UserPostActionTypes.GET_USERS_SUCCESS:
            console.log(`${action.type} was succesfull!`)
            return {
                ...state,
                users: [...action.payload],
                usersLoading: false
            }
        case UserPostActionTypes.GET_USERS_FAILURE:
            console.log(`${action.type} failed`)
            return {
                ...state,
                usersLoading: false,
                error: action.payload
            }
        case UserPostActionTypes.GET_POST:
            return{
                ...state,
                postLoading: true
            }
        case UserPostActionTypes.GET_POST_SUCCESS:
            console.log(`${action.type} was succesfull!`)
            return{
                ...state,
                post: [action.payload],
                postLoading: false
            }
        case UserPostActionTypes.GET_POST_FAILURE:
            console.log(`${action.type} failed`)
            return{
                ...state,
                postLoading: false,
                error: action.payload
            }
    }
}