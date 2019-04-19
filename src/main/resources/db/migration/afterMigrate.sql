# Cleanup
delete from Salary;
delete from Employee_Department;
delete from Employee;
delete from Department;
delete from Title;

#Inserts
insert into Title
values (1, 'Staff'),
       (2, 'Engineer'),
       (3, 'Manager'),
       (4, 'Senior Staff');

insert into Department
values (1, 'IT'),
       (2, 'Finance');

insert into Employee
values (1, 'John', 'Doe', '1989-05-10', '2005-04-12', 2),
       (2, 'Jane', 'Doe', '1990-08-04', '2010-07-28', 1);

insert into Employee_Department
values (1, 1),
       (2, 2);

insert into Salary (id, employee_id, amount, from_date)
values (1, 1, 50000, '2005,04-12'),
       (2, 2, 50000, '2010-07-28')