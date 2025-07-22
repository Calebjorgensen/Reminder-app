import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReminderListComponent } from './reminders/reminder-list/reminder-list.component';
import { ReminderFormComponent } from './reminders/reminder-form/reminder-form.component';
import { ReminderComponent } from './reminders/reminder/reminder.component';

@NgModule({
  declarations: [
    AppComponent,
    ReminderListComponent,
    ReminderFormComponent,
    ReminderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
