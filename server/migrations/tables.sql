create table employee (
	ssn char(9) primary key not null,
    fname varchar(45) not null,
    lname varchar(45) not null,
    bdate date,
    address varchar(45),
    sex char(1),
    salary int,
    super_ssn char(9),
    dno int
);

create table department (
	dname varchar(45) unique not null,
    dnumber int primary key not null,
    mgr_ssn char(9) not null,
    mgr_start_date date,
    foreign key (mgr_ssn) references employee(ssn)
);

create table dept_locations (
	dnumber int not null,
    dlocation varchar(15) not null,
    primary key (dnumber, dlocation),
    foreign key (dnumber) references department(dnumber)
);

create table project (
	pname varchar(15) not null unique,
    pnumber int primary key not null,
    plocation varchar(15),
    dnum int not null,
    foreign key (dnum) references department(dnumber)
);

create table works_on (
	essn char(9) not null,
    pno int not null,
    hours decimal(3) not null,
    primary key (essn, pno),
    foreign key (essn) references employee(ssn),
    foreign key (pno) references project(pnumber)
);
