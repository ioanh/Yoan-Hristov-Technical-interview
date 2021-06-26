import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { UserPostReducer } from './store/reducers/user-post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserPostEffects } from './store/effects/user-post.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({userPost: UserPostReducer}),
    EffectsModule.forRoot([UserPostEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
