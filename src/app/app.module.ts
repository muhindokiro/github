import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { GithubService } from "./githubsearch.service";

import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
import { SearchFormComponent } from "./search-form/search-form.component";


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchFormComponent
  ],
  
  imports: [ 
    BrowserModule,
    HttpClientModule
    ],
  
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule {}
