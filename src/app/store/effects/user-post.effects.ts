import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { of } from 'rxjs';

import {UserPostService} from '../../user-post.service'
import { GetPostAction, GetPostActionFailure, GetPostActionSuccess, GetUsersAction, GetUsersActionFailure, GetUsersActionSuccess, UserPostActionTypes } from '../actions/user-post.actions';

@Injectable()

export class UserPostEffects {

    loadUsers$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType<GetUsersAction>(UserPostActionTypes.GET_USERS),
            mergeMap(
                () => this.userPostService.getUsers()
                .pipe(
                    map(data => new GetUsersActionSuccess(data)),
                    catchError(error => of(new GetUsersActionFailure(error)))
                )
            )
        )
    })

    loadPost$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType<GetPostAction>(UserPostActionTypes.GET_POST),
            mergeMap(
                (action) => this.userPostService.getPost(action.payload)
                .pipe(
                    map(data => new GetPostActionSuccess(data)),
                    catchError(error => of(new GetPostActionFailure(error)))
                )
            )
        )
    })


    constructor(private actions$: Actions, private userPostService: UserPostService ) {}
}