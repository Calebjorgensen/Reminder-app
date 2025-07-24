import { Injectable } from '@angular/core';
import { Reminder } from './reminder.model';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  private reminders: Reminder[] = [];
  private apiUrl = 'http://localhost:3000/api/reminders';

  getReminders(): Observable<Reminder[]>{
    return of(this.reminders);
  }

  addReminder(reminder: Reminder): Observable<Reminder> {
    reminder._id = (Math.random() * 10000).toFixed(0);
    reminder.createdAt = new Date(). toISOString();
    this.reminders.push(reminder);
    return of(reminder);
  }

    updateReminder(updated: Reminder): Observable<Reminder> {
    this.reminders = this.reminders.map(r => r._id === updated._id ? updated : r);
    return of(updated);
  }

    deleteReminder(id: string): Observable<void> {
    this.reminders = this.reminders.filter(r => r._id !== id);
    return of();
  }

  constructor(private http: HttpClient) { }
}
