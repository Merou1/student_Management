import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Student {
  fullName: string;
  studentId: string;
  rib: string;
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private studentsSubject = new BehaviorSubject<Student[]>([]);  // Default empty array
  students$ = this.studentsSubject.asObservable();

  addStudent(student: Student) {
    const currentStudents = this.studentsSubject.value;
    this.studentsSubject.next([...currentStudents, student]); // Update the students list
  }
}
