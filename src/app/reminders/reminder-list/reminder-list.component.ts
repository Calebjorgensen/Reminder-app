import { Component } from '@angular/core';
import { Reminder } from '../reminder.model';
import { ReminderService } from '../reminder.service';

@Component({
  selector: 'app-reminder-list',
  standalone: false,
  templateUrl: './reminder-list.component.html',
  styleUrl: './reminder-list.component.css'
})
export class ReminderListComponent {

    reminders: Reminder[] = [];

  constructor(private reminderService: ReminderService) {}

  ngOnInit(): void {
    this.loadReminders();
  }

  loadReminders() {
    this.reminderService.getReminders().subscribe(data => this.reminders = data);
  }

  addReminder(reminder: Reminder) {
    this.reminderService.addReminder(reminder).subscribe(() => this.loadReminders());
  }

  markCompleted(reminder: Reminder) {
    reminder.completed = true;
    this.reminderService.updateReminder(reminder).subscribe(() => this.loadReminders());
  }

  deleteReminder(id: string) {
    this.reminderService.deleteReminder(id).subscribe(() => this.loadReminders());
  }

  isDueSoon(dueDate: string): boolean {
    const due = new Date(dueDate);
    const now = new Date();
    const timeDiff = due.getTime() - now.getTime();
    return timeDiff > 0 && timeDiff <= 86400000;
  }
}
