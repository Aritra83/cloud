namespace EmployeeData;

entity Employee {
        @title: 'Id'
    key id         : String(15);
        @title: 'Name'
        name       : String(255);
        @title: 'Email'
        email_id   : String(128);
        @title: 'Department'
        department : String(50);
}
