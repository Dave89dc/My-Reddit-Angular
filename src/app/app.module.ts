import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RedditCardComponent } from './components/reddit-card/reddit-card.component';
import { GridCardComponent } from './components/grid-card/grid-card.component';
import { IfImagePipe } from './pipes/if-image.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        RedditCardComponent,
        IfImagePipe,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatGridListModule,
        GridCardComponent,
        MatSelectModule,
        FormsModule
    ]
})
export class AppModule { }
