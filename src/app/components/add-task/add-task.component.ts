import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  // Add properties for each field in form
  text: string;
  day: string;
  reminder = false;

  onSubmit() {
    if (!this.text) {
      alert("Please add a task!")
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    // Emit event
    this.onAddTask.emit(newTask);

    // Reset form
    this.text = "";
    this.day = "";
    this.reminder = false;

    
  }

}
