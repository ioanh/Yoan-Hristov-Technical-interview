import { UserPostAction, UserPostActionTypes } from "../actions/user-post.actions";
import { PostItem } from "../models/post.model";
import { UserItem } from "../models/user.model";

export interface UserPostState {
    users: UserItem[],
    post: PostItem,
    loading: boolean,
    error: Error
}

const initialState: UserPostState = {
    users: [],
    post : undefined,
    loading: false,
    error: undefined
}

export function UserPostReducer(state: UserPostState = initialState, action: UserPostAction){
    switch(action.type){
        case UserPostActionTypes.GET_USERS:
            return {
                ...state, 
                loading: true
            }
        case UserPostActionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case UserPostActionTypes.GET_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case UserPostActionTypes.GET_POST:
            return{
                ...state,
                loading: true
            }
        case UserPostActionTypes.GET_POST_SUCCESS:
            return{
                ...state,
                post: action.payload,
                loading: false
            }
        case UserPostActionTypes.GET_POST_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
    }
}