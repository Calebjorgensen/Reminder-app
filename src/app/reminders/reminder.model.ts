export interface Reminder {
  _id?: string;
  title: string;
  description: string;
  dueDate: string; // ISO string
  completed: boolean;
  createdAt?: string;
}
