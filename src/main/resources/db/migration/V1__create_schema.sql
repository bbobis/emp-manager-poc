create table Title
(
    id   int unsigned auto_increment primary key,
    name varchar(100) not null
);

create table Department
(
    id   int unsigned auto_increment primary key,
    name varchar(100) not null
);

create table Employee
(
    id        int unsigned auto_increment primary key,
    firstName varchar(100) not null,
    lastName  varchar(100) not null,
    birthDate date         not null,
    hireDate  date         not null,
    title_id  int unsigned not null,
    constraint `fk_employee_title` foreign key (title_id) references title (id)
);

create table Employee_Department
(
    department_id int unsigned not null,
    employee_id   int unsigned not null,
    constraint `pk_employee_department_id` primary key (department_id, employee_id)
);

create table Salary
(
    id          int unsigned auto_increment primary key,
    employee_id int unsigned not null,
    amount      bigint       not null,
    fromDate    date         not null,
    toDate      date         null,
    constraint `fk_employee_salary` foreign key (employee_id) references Employee (id)
);

