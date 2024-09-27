import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskFilterComponent } from './components/task-filter/task-filter.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, TaskFilterComponent],
  imports: [BrowserModule, TaskComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
