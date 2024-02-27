using btp.emp as emp from '../db/data-model';

service EmployeeService {
    entity Employee1 as select from emp.Employee1;
}
