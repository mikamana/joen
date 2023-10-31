/*

	DDL : Database Definition Language
    - 데이터베이스의 테이블 구조 생성, 삭제, 변경
    -- 트렌젝션 : 실제 MYSQL에 실시간으로 바로 반영되는 것. DDL은 트렌젝션이 적용된다.
    -- 삭제를 하게되면 되돌릴 수가 없다.
    테이블 생성 :create table
    테이블 삭제 : drop table
    테이블 변경 : alter table
    
    DML : Database Manuplation Language
    - 데이터 생성, 변경, 삭제
    -- 트렌젝션이 바로 적용되지 않고 commit을 통해 적용을 해야한다.
	데이터 생성 : insert into  -- C퀄 에서는 into 없어도됨
    데이터 변경 : update
    데이터 삭제 : delete 
    데이터 조회 : select
    
*/



-- 테이블 생성
create table emp_edu(
	emp_id char(4),
    emp_name varchar(10) not null,
    hire_date date,
    salary int
);
-- 테이블 목록 조회
select * from information_schema.tables where table_schema = 'hrdb2019';
select * from information_schema.table_constraints where table_schema = 'hrdb2019';
select * from information_schema.table_constraints where table_name = 'employee_contraint';
desc employee_contraint;
select * from emp_emp;
select * from emp_edu; -- 생성완료
desc emp_emp;
-- 테이블 생성(복제)
create table employee
as 
select * from emp_emp;
select * from employee; -- 생성완료 > 키설정 X
desc employee; -- 키설정 테이블 구조 확인
-- 테이블 삭제
drop table emp_edu;
desc emp_edu; -- 삭제완료
-- employee 테이블의 구조+내용 복제하여 emp_copy2 테이블을 생성
create table emp_copy2
as 
select * from employee;
-- 정보시스템 부서의 사원들만 employee_sys 테이블에 저장
drop table employee_sys;
select * from employee_sys;
create table employee_sys select * from employee where dept_id = (select dept_id from department where dept_name = '정보시스템');
-- 데이터 생성(추가)
insert into employee_sys values('S0002','김길동','gild','M',curdate(),null,'mkt','010-4237-4511','dkfj@dmd.co.kr',8200);
-- 테이블 생성 시 제약사항 추가
create table employee_contraint(
	emp_id char(4),
    emp_name varchar(8) not null,
    dept_id varchar(4),
    email varchar(20),
    constraint employee_constraint_emp_id_pk primary key(emp_id)
);
desc employee_contraint;
drop table employee_contraint;
-- employee 테이블에 홍길동 데이터 insert
select * from employee;
insert into employee value('S0021', '홍홍홍', 'hona', 'M', curdate(),null,'SYS','010-1234-5678', 'dfa@dakdj.co.kr',8400);

-- 과목 테이블 생성 : subject
-- 컬럼 : 과목id(sub_id), 과목명(sub_name), 등록일자(sdate)
-- 과목id를 기본키로 설정
-- 참조하려는 테이블이 있어야 테이블 생성이 가능, 과목테이블 먼저 생성
select * from information_schema.table_constraints where table_name = 'professor'; 
select * from information_schema.table_constraints where table_name = 'student'; 
select * from information_schema.table_constraints where table_name = 'subject'; 
-- subject 테이블 삭제시 체크사항
-- subject fk키에 subject의 pk키가 참조되어있어
-- student 테이블에 저장되어있던 fk키를 삭제해야 subject 테이블 삭제가 가능함
alter table subject drop constraint employee_constraint_emp_id_pk;
alter table student drop constraint student_sub_id_fk;
create table subject(
	sub_id char(4),
    sub_name varchar(10) not null,
    sdate date,
    constraint subject_sub_id_pk primary key(sub_id)
);

-- 학생 테이블 생성 : student
-- 컬럼 : 학번(sid:문자4), 학생명(sname), 학과(dept), 과목id(sub_id), 이메일(email)
-- 학번은 기본키로 설정, 수강과목은 과목테이블을 참조한다.
drop table student;
create table student(
	sid char(4),
    sname varchar(4),
    dept varchar(10),
    sub_id char(4),
    email varchar(15),
    constraint student_sid_pk primary key(sid),
    constraint student_sid_fk foreign key(sub_id) references subject(sub_id)
);
select * from information_schema.table_constraints where table_name = 'student';


-- 교수 테이블 생성 : professor
-- 컬럼 : 교수id(pid), 교수명(pname), 폰번호(phone), 과목id(sub_id)
drop table professor;
create table professor(
	pid char(4),
    pname varchar(10),
    phone varchar(15),
    sub_id char(4),
    constraint professor_pid_pk primary key(pid),
    constraint professor_sub_id_fk foreign key(sub_id) references subject(sub_id)
);

-- 테이블 변경 : alter table 
-- 컬럼(제약) 추가 : ADD column [컬럼명 데이터타입(크기)]
-- 컬럼 변경 : modify column [변경하는 컬럼 크기 설정]
-- 컬럼 삭제 : drop column [삭제할 컬럼명]
-- ** 컬럼 변경/삭제시 데이터가 존재한다면.. 반드시 데이터 유실부분을 체크하도록 한다. 데이터 유실 가능성이 있으면 싫행이 안됌

-- emp 테이블에 부서id추가 
select * from emp;
select * from information_schema.table_constraints where table_name = 'emp';
drop table emp;
create table emp(
	emp_id char(5),
    emp_name varchar(4),
    hire_date date
);
alter table emp add column dept_id char(3);
-- 추가하는 테이블에 기존 데이터가 존재하는 경우에는 추가 컬럼의 제약사항을 null 허용으로 설정해야함
-- emp 테이블의 dept_id 컬럼의 크기를 문자형, 5변경
alter table emp modify column dept_id char(5);
-- EMP 테이블의 EMP_ID 컬럼의 크기를 CHAR, 4
alter table emp modify column emp_id char(4); -- 데이터가 없어서 4로 변경 가능함
-- 데이터 변경시 데이터 크기가 줄어들게되면 데이터 유실 가능성이 생겨 오류 발생
-- EMP 테이블의 EMP_ID 컬럼의 크기를 CHAR, 12
-- EMP 테이블에 phone 컬럼을 추가
alter table emp add column phone char(4);
select * from emp;
-- not null이 들어가게되면 빈공간이 하나 생겨 들어가게되는 형태
-- EMP 테이블에 bonus 컬럼을 추가, int,null은 허용하지 않음
alter table emp add column bonus int not null;
-- EMP 테이블의 DEPT_ID 컬럼 삭제
alter table emp drop column dept_id;

-- 테이명 변경 : RENAME 
-- EMP 테이블의 이름을 EMP_EMP 수정
alter table emp rename emp_e;

-- employee 테이블을 복제하여 employee_copy 테이블 생성
-- 단, 2017, 2018년 입사자 기준

create table employee_copy
as
select * from employee where hire_date between '2017-01-01' and '2018-12-31';
select * from employee_copy;

