import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reminder-app';
  currentView: 'list' | 'add' = 'list';

  showList(){
    this.currentView = 'list';
  }

  showAddForm(){
    this.currentView = 'add';
  }
}
