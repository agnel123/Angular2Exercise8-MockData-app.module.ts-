import { Component,Directive, OnInit} from '@angular/core';
import { Student } from './Student';
import { StudentService } from './Student.service';

@Component({
  selector: 'student-info',
  templateUrl:`app/Student.component.html`,
   styleUrls: ['app/Student.component.css']
  })

export class StudentComponent implements OnInit{

    constructor (private studentser:StudentService){}
   title = 'Hello world Student information';

   studentInfo: Student[];
   serviceTitle:string;
   selectedStudent : Student;


   getTitlelocal():void{this.studentser.getTitle().then(serviceTitle => this.serviceTitle = serviceTitle)}
   getStudentsLocal():void{this.studentser.getStudents().then(studentInfo => this.studentInfo = studentInfo)}

   ngOnInit():void{
       this.getTitlelocal();
       this.getStudentsLocal();}

  onSelect(student:Student):void {
     this.selectedStudent = student;
 }

  
}

