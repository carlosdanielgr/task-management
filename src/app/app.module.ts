import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskFilterComponent } from './components/task-filter/task-filter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './state/app.state';
import { ViewTaskComponent } from './components/task/view-task/view-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskFilterComponent,
    ViewTaskComponent,
  ],
  imports: [
    BrowserModule,
    TaskComponent,
    NgbModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
