import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



interface Student {
  fullName: string;
  studentId: string;
  rib: string;
}

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css'],
  imports: [FormsModule,CommonModule],
})
export class EtablissementComponent {
  etablissements: string[] = ['EIDIA', 'EMADU', 'Biomedical', 'Génie Civil'];
  students: Student[] = [
    // Sample students (should ideally come from a shared service)
    { fullName: 'John Doe', studentId: 'S123', rib: '123456' }
  ];
  assignments: { student: Student; etablissement: string }[] = [];

  selectedEtablissement = '';
  selectedStudent!: Student;

  assignStudent() {
    if (this.selectedEtablissement && this.selectedStudent) {
      this.assignments.push({
        student: this.selectedStudent,
        etablissement: this.selectedEtablissement
      });
      this.selectedEtablissement = '';
      this.selectedStudent = undefined!;
    }
  }
}
