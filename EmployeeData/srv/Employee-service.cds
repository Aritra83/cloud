using { EmployeeData as db  } from  '../db/data-model';

service EmployeeService@(path:'/EmployeeService')
{
    entity Employee as select from db.Employee;
}