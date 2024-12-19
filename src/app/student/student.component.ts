import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


interface Student {
  fullName: string;
  studentId: string;
  rib: string;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  imports: [FormsModule,CommonModule],

})
export class StudentComponent {
  students: Student[] = [];
  newStudent: Student = { fullName: '', studentId: '', rib: '' };

  addStudent() {
    if (this.newStudent.fullName && this.newStudent.studentId && this.newStudent.rib) {
      this.students.push({ ...this.newStudent });
      this.newStudent = { fullName: '', studentId: '', rib: '' };
    }
  }
}
