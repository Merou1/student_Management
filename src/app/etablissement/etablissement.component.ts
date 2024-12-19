import { Component, OnInit } from '@angular/core';
import { StudentService, Student } from '../services/student.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etablissement',
  template: `
    <h2>Etablissement Management</h2>
    <form (submit)="assignStudent()">
      <label for="etablissement">Etablissement:</label>
      <select id="etablissement" [(ngModel)]="selectedEtablissement" name="etablissement">
        <option *ngFor="let etablissement of etablissements" [value]="etablissement">
          {{ etablissement }}
        </option>
      </select>

      <label for="student">Student:</label>
      <select id="student" [(ngModel)]="selectedStudent" name="student">
        <option *ngFor="let student of students" [value]="student">{{ student.fullName }}</option>
      </select>

      <button type="submit">Assign</button>
    </form>

    <h3>Assignments</h3>
    <ul>
      <li *ngFor="let assignment of assignments">
        {{ assignment.student.fullName }} -> {{ assignment.etablissement }}
      </li>
    </ul>
  `,
  styleUrls: ['./etablissement.component.css'],
  imports: [FormsModule, CommonModule],
})
export class EtablissementComponent implements OnInit {
  etablissements: string[] = ['EIDIA', 'EMADU', 'Biomedical', 'Génie Civil'];
  students: Student[] = [];
  assignments: { student: Student; etablissement: string }[] = [];

  selectedEtablissement = '';
  selectedStudent!: Student;

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    // Subscribe to the students observable to get updated students
    this.studentService.students$.subscribe((students) => {
      console.log('Students:', students);  // Check if students are being emitted
      this.students = students; // Update the students array
    });
  }

  assignStudent() {
    if (this.selectedEtablissement && this.selectedStudent) {
      // Add the assignment to the list
      this.assignments.push({
        student: this.selectedStudent,
        etablissement: this.selectedEtablissement,
      });
      // Reset selection
      this.selectedEtablissement = '';
      this.selectedStudent = undefined!;
    }
  }
}
