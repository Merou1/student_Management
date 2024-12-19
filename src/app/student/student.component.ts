import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentService } from '../services/student.service';

interface Student {
  fullName: string;
  studentId: string;
  rib: string;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  imports: [FormsModule, CommonModule],
})
export class StudentComponent {
  newStudent: Student = { fullName: '', studentId: '', rib: '' };

  constructor(private studentService: StudentService) {}

  addStudent() {
    if (this.newStudent.fullName && this.newStudent.studentId && this.newStudent.rib) {
      // Add the student to the service (which will update the observable)
      this.studentService.addStudent({ ...this.newStudent });
      // Reset the form
      this.newStudent = { fullName: '', studentId: '', rib: '' };
    }
  }
}
