import { UserPostState } from "../reducers/user-post.reducer";

export interface AppState {
    readonly userPost: UserPostState
}