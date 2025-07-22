import { Component, EventEmitter, Output } from '@angular/core';
import { Reminder } from '../reminder.model';

@Component({
  selector: 'app-reminder-form',
  standalone: false,
  templateUrl: './reminder-form.component.html',
  styleUrl: './reminder-form.component.css'
})
export class ReminderFormComponent {

  @Output() onAdd = new EventEmitter<Reminder>();

  newReminder: Reminder = {
    title: '',
    description: '',
    dueDate: '',
    completed: false
  };

  addReminder() {
    if (!this.newReminder.title || !this.newReminder.dueDate) return;
    this.onAdd.emit({ ...this.newReminder });
    this.newReminder = {
      title: '',
      description: '',
      dueDate: '',
      completed: false
    };
  }
}
