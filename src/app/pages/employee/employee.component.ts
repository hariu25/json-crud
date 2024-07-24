import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  depart: any[] = [];
  isView: boolean = true;
  employeeList:any[]=[];
  isEditing: boolean = false; // Indicates if form is in edit mode
  filterObj: any;
  searchTerm:string='';

  employeeObj:any={
    "firstName":"",
    "lastName":"",
    "departmentId":"",
    "gender":"",
    "department":"",
    "email":"",
    "phoneNo":""
  }

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.loadDept();
    this. loadEmployee()
  }

  loadDept() {
    this.http.get('assets/department.json').subscribe((res: any) => {
      this.depart = res.data;
    });
  }

  loadEmployee(){
    this.http.get('assets/getEmployee.json').subscribe((res:any)=>{
      this.employeeList=res.data
    })
  }


  onEdit(data:any){
    debugger
   this.employeeObj=data
   this.isView=false
   this.isEditing=false
  }

  submit() {
    const postUrl = 'https://api.example.com/employees'; // Correct endpoint URL

    this.http.post(postUrl, this.employeeObj).subscribe(
      (response) => {
        console.log('Employee submitted successfully', response);
        alert('Employee data submitted successfully');

      },
      (error) => {
        console.error('Error submitting employee', error);
        alert('Error submitting employee data');
      }
    );
  }
  onDelete(res:any){

  }

  applyFilter(){
 if(this.searchTerm){
  this.filterObj=  this.employeeList.filter(employee =>{
    employee.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    employee.lastName.toLowerCase().includes(this.searchTerm.toLowerCase())


  })
 }
  }
}
