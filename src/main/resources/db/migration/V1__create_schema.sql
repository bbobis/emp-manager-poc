create table title
(
    id   int unsigned auto_increment primary key,
    name varchar(100) not null
);

create table department
(
    id   int unsigned auto_increment primary key,
    name varchar(100) not null
);

create table employee
(
    id        int unsigned auto_increment primary key,
    first_name varchar(100) not null,
    last_name  varchar(100) not null,
    birth_date date         not null,
    hire_date  date         not null,
    title_id  int unsigned not null,
    constraint `fk_employee_title` foreign key (title_id) references title (id)
);

create table employee_department
(
    department_id int unsigned not null,
    employee_id   int unsigned not null,
    constraint `pk_employee_department_id` primary key (department_id, employee_id)
);

create table salary
(
    id          int unsigned auto_increment primary key,
    employee_id int unsigned not null,
    amount      bigint       not null,
    from_date    date         not null,
    to_date      date         null,
    constraint `fk_employee_salary` foreign key (employee_id) references Employee (id)
);

