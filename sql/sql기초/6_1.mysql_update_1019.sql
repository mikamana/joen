/*

	데이터 수정 : UPDATE ~ SET
    형식 : UPDATE [테이블명] SET [컬럼명=새로운데이터],[컬럼명=새로운데이터]...
		  where [update 조건절]
          
	** WHERE 절이 생략되면 전체 테이블에 업데이트 적용
    
*/

-- EMP로 시작하는 모든 테이블 조회
use hrdb2019;
select database();
select * from information_schema.tables where table_name like 'emp%' ;

-- emp_copy 테이블 삭제
drop table emp;

-- employee 테이블을 복제하여 employee_copy 테이블 생성
select * from employee;
create table employee_copy as select * from employee;
-- 서브쿼리를 실행하는 sql에서는 서브쿼리를 먼저 실행해보는 것이 좋음
select * from employee_copy; -- 복제본 테이블에는 원본의 constraint은 복제되지 않음!
desc employee_copy;
-- 홍길동의 연봉을 8700으로 인상
update employee_copy set salary = 8700 where emp_name = '홍길동';
-- workbench는 safemode가 잠겨있어서 update/delete 시에는 safemode를 먼저 해제시켜준 후 반드시 reconnect 한 후 실행
-- edit > preferences > sql editor - 하단의 safe 모드 해제 
-- auto commit이 실행되어있어 물리적인 데이터가 자동으로 수정된다.
commit;
-- employee_copy 테이블의 전체 사원들의 연봉을 10% 인상
select emp_id, emp_name, salary , salary * 0.1 , salary * 1.1 from employee;
update employee_copy set salary = salary * 1.1;
rollback;
select * from employee_copy;
-- 김삼순 사원의 사원명을 '김희진'으로 수정
select * from employee_copy where emp_name = '김삼순';
select * from employee_copy where emp_name = '김희진';
update employee_copy set emp_name = '김희진' where emp_name = '김삼순';

-- 서브쿼리를 이용한 데이터 수정
-- 형식 : UPDATE [테이블명] SET [컬럼명=(서브쿼리)].. where [업데이트 조건절]
-- 김희진 사원의 부서를 영업부에서 정보시스템 부서로 전배
select * from employee_copy;
select * from employee_copy where emp_name = '김희진';
update employee_copy set dept_id = (select dept_id from department where dept_name = '정보시스템') where emp_name = '김희진';
-- 스칼라서브쿼리 방식(컬럼에 들어가는 서브쿼리)은 쿼리를 실행하는 속도가 느려져서 사용권장X 
rollback;
select dept_id from department where dept_name = '정보시스템';

-- 박여사 사원과 같은 부서의 직원들 연봉을 10% 인상
update employee_copy set salary = salary * 1.1 where dept_id = (select d.dept_id from department d inner join employee e on d.dept_id = e.dept_id and e.emp_name = '홍길동');
update employee_copy set salary = salary * 1.1 where dept_id = 'hrd';
select * from employee;
update employee_copy set salary = salary * 1.1 where dept_id = (select dept_id from employee_copy where emp_name = '박여사');
select * from employee_copy where emp_name = '박여사'; 

-- 영업부 소속의 사원들 연봉을 10% 삭감
update employee_copy set salary = salary * 0.9 where dept_id = (select dept_id from department d where dept_name = '정보시스템');

-- mysql , ansi-sql
-- 같은 테이블의 조건을 사용하는 경우 서브쿼리를 이용해서 다른 테이블의 이블로 alias(as(생략가능)로 이름지정)로 만들어 진행해주어야함
update employee_copy set salary = salary * 0.9 where dept_id = (select dept_id from  (select ec1.dept_id from employee_copy ec1, employee_copy ec2  where ec1.emp_id = ec2.emp_id and ec1.emp_name = '박여사')E);

-- 오라클에서는 사용이 가능하지만, MYSQL 실행안됨
-- 자신의 테이블을 SELF 참조할 수 없기 때문
update employee_copy set salary = salary* 1.1 where dept_id = (select dept_id from employee_copy where emp_name = '박여사');

select e1.emp_name, e1.dept_id, e1.salary, e2.salary from employee e1, employee_copy e2 where e1.emp_id = e2.emp_id and e1.dept_id = (select dept_id from department d where dept_name = '정보시스템');

-- 안경태 사원과 같은 부서의 사원들의 입사일을 현재날짜로 수정
select * from employee_copy;
update employee_copy 
	set hire_date = curdate() 
		where dept_id = 
			(select dept_id from 
				(select ec1.dept_id from employee_copy ec1, employee_copy ec2 where ec1.emp_id = ec2.emp_id and ec1.emp_name = '안경태')E);

-- 참조관계에서의 데이터 수정
	select * from subject;
	select * from student;
    select * from professor;
-- HTML과목의 SUB_ID 값을 S009로 수정
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`hrdb2019`.`professor`, CONSTRAINT `professor_sub_id_fk` FOREIGN KEY (`sub_id`) REFERENCES `subject` (`sub_id`))	0.016 sec
-- 업데이트 불가 : 위 에러는 STUDENT , PROFESSOR 테이블에서 참조하고 있기 때문에 update 불가하다는 에러
-- 솔루션 : Student, Professor 테이블을 생성 시 참조관계 설정시 subject가 수정, 삭제시
-- 참조하는 Student, Professor 테이블도 수정, 삭제가 가능하도록 설정
select * from student;
select * from professor;
update subject set sub_id = 'S009' where sub_name = 'HTML';

drop table student;
drop table professor;

create table subject(
	sub_id char(4),
    sub_name varchar(30) not null,
    sdate date,
    constraint subject_sub_id_pk primary key (sub_id)
);

insert into subject value('S001', 'MYSQL', curdate());
insert into subject value('S002', 'HTML', curdate());
insert into subject value('S003', 'SQL', curdate());
insert into subject value('S004', 'React', curdate());
insert into subject value('S007', 'git', curdate());
insert into subject value('S006', 'navtive', curdate());


create table student(
    sid char(4),
    sname varchar(20) not null,
    dept varchar(20),
    sub_id char(4),
	email varchar(20),
    constraint student_sid_pk primary key (sid),
    constraint student_sub_id_fk foreign key (sub_id) references subject(sub_id)
    on update cascade on delete cascade
    -- sub_id 가 pk(유니크한)값인 것이 좋다. 
    -- subject의 sub_id 가 업데이트되면 같이 업데이트 되게하는 속성 (cascade)
);
insert into student value('A001', '박길동', '철학', 'S003', '5ry226@naver.com');
insert into student value('A002', '최길동', '컴퓨터공학', 'S005', 'dfsdsasdasdas');
insert into student value('A003', '우길동', '경영학', 'S009', 'sfas@naver.com');
insert into student value('A004', '미얀마', '컴퓨터공학', 'S016', 'sda@naver.com');
update subject set sub_id = 'S016' where sub_name = 'React';

create table professor(

	pid char(4),
    pname varchar(10) not null,
    phone char(13),
    sub_id char(4),
	constraint professor_pid_pk primary key (pid),
    constraint professor_sub_id_fk foreign key (sub_id) references subject(sub_id)
	on update cascade
);

desc professor;
select * from student;
desc student;
select * from subject;
select * from professor;
insert into professor values('P001', '공유', '010-1234-5678','S001');
insert into professor values('P002', '이브', '010-1234-5678','S009');
insert into professor values('P003', '강인', '010-1234-5678','S003');



drop table student;

select * from student;
select * from subject;

-- 수학 과목의 id를 S005로 수정
update subject set sub_id = 'S005' where sub_name = '수학';
select sub_id from subject where sub_name = '수학';

-- 조인으로 subject, student, professor sub_id를 조회
select sj.sub_id 과목, st.sub_id 수강과목, p.sub_id 강의과목 from subject sj left outer join  student st   on st.sub_id = sj.sub_id left outer join professor p on sj.sub_id = p.sub_id;
select sub_id from(select sub_id from subject where sub_name='수학') s;


-- 테이블 변경 : alter table 
-- 컬럼(제약) 추가 : ADD column [컬럼명 데이터타입(크기)]
-- 컬럼 변경 : modify column [변경하는 컬럼 크기 설정]
-- 컬럼 삭제 : drop column [삭제할 컬럼명]
-- ** 컬럼 변경/삭제시 데이터가 존재한다면.. 반드시 데이터 유실부분을 체크하도록 한다. 데이터 유실 가능성이 있으면 싫행이 안됌
-- 

select * from emp;
-- emp 테이블에 부서id추가 
alter table emp ADD column dept_id varchar(10);
-- 추가하는 테이블에 기존 데이터가 존재하는 경우에는 추가 컬럼의 제약사항을 null 허용으로 설정해야함
desc emp;
-- emp 테이블의 dept_id 컬럼의 크기를 문자형, 5변경
alter table emp modify column dept_id char(5);
alter table emp modify column dept_id varchar(10);

select * from emp;
desc emp;

-- EMP 테이블의 EMP_ID 컬럼의 크기를 CHAR, 4
alter table emp modify column emp_id char(4); -- Error Code: 1265. Data truncated for column 'emp_id' at row 4	0.047 sec -- 데이터 변경시 데이터 크기가 줄어들게되면 데이터 유실 가능성이 생겨 오류 발생
-- 데이터 변경시 데이터 크기가 줄어들게되면 데이터 유실 가능성이 생겨 오류 발생
-- EMP 테이블의 EMP_ID 컬럼의 크기를 CHAR, 12
alter table emp modify column emp_id char(12);
-- 데이터 변경시 데이터 크기가 커지게되면 데이터 유실 가능성이 없어 바로 실행가능

-- EMP 테이블에 phone 컬럼을 추가
alter table emp add column phone varchar(10) not null;
-- not null이 들어가게되면 빈공간이 하나 생겨 들어가게되는 형태
select * from emp;
-- EMP 테이블에 bonus 컬럼을 추가, int 데이터타입 ,null은 허용하지 않음
alter table emp add column bonus int not null;
-- EMP 테이블의 DEPT_ID 컬럼 삭제
alter table emp drop column dept_id;
DESC EMP;
-- 전체 테이블 목록 조회
select * from information_schema.tables where table_schema = 'hrdb2019';
-- 테이명 변경 : RENAME 
-- EMP 테이블의 이름을 EMP_EMP 수정
alter table employee rename EMP_EMP;

-- 전체 제약사항 목록 조회
select * from information_schema.table_constraints where table_schema ='hrdb2019';

desc emp_emp;
drop table employee_copy;
-- emp로 시작하는 테이블 이름 조회
select * from information_schema.tables where table_name like 'emp%';

-- employee 테이블을 복제하여 employee_copy 테이블 생성
-- 단, 2017, 2018년 입사자 기준
select * from emp_copy;
select * from employee where hire_date between '2017-01-01' and '2018-12-31';
create table emp_copy as select * from emp_emp where hire_date between '2017-01-01' and '2018-12-31';
desc emp_copy;
-- DEPARTMENT 테이블을 복제하여 dept_copy 테이블 생성
create table dept_copy as select * from department;
desc dept_copy;
select * from department;
select * from dept_copy;

-- emp_copy, dept_copy 테이블에 제약사항 추가
-- 제약 사항 추가 : alter table [테이블명] add constraint
-- primary key로 설정되는 값은 한글이나 특수기호를 설정하면 안됨.
-- employee_copy 테이블의 emp_id 컬럼에 기본키 제약을 추가
alter table emp_copy 
	add constraint emp_copy_emp_id_pk primary key(emp_id);
    alter table emp_copy 
	add constraint emp_copy_emp_id_pk primary key(gender); -- 에러발생 : 중복된 데이터를 가진 GENDER 컬럼은 기본키로 부적합
alter table emp_copy 
	drop primary key;
desc emp_copy;

-- dept_copy 테이블의 dept_id 컬럼에 기본키 제약 추가
alter table dept_copy add constraint dept_copy_dept_id_pk primary key(dept_id);
desc dept_copy;
select * from information_schema.table_constraints where table_schema = 'hrdb2019';

-- employee_copy 테이블의 dept_id 컬럼에 dept_copy 테이블의 dept_id 컬럼을 
-- 참조하는 참조키 제약을 추가
alter table emp_copy add constraint emp_copy_dept_id_fk foreign key (dept_id) references dept_copy(dept_id);
desc emp_copy;
select * from dept_copy;
-- DEPT_COPY 테이블의 회계부서 아이디를 'ACD'로 수정
update dept_copy set dept_id = 'ACD' where dept_name = '회계';
-- EMPLOYEE_COPY 테이블에 추가된 참조키 제약을 삭제하고 ON UPDATE CASCADE 옵션을 추가하여 
-- 다시 실행
-- 제약 사항 삭제 : alter table 테이블명 drop constraint [제약명]
--              alter table 테이블명 drop foreign key [제약명]
select * from information_schema.table_constraints where table_name = 'emp_copy';
alter table emp_copy drop constraint emp_copy_dept_id_fk;

-- on update cascade 옵션 추가하여 참조키 설정
alter table emp_copy add constraint emp_copy_dept_id_fk foreign key (dept_id) references dept_copy(dept_id) on update cascade on delete cascade ;
select * from emp_copy;

-- 데이터추가 
alter table emp2 add column bonus char(4);
alter table emp2 add column fda varchar(10); 

-- 데이터 삭제 : DELETE
-- 형식 : DELETE FROM [테이블명] - 테이블에 존재하는 모든 데이터 삭제
-- 		 DELETE FROM [테이블명] where [조건절] - 테이블에 존재하는 조건에 해당하는 데이터 삭제

-- 모든 테이블 목록 조회
select * from information_schema.tables where table_schema = 'hrdb2019';

-- EMP_EMP 테이블의 데이터를 조회
select * from emp2;
select * from employee_contraint;

-- emp2 테이블의 emp_id 가 hong인 사원을 삭제
delete from emp2 where emp_id = 'hong';
-- emp_name이 홍길동인 모든 사원을 삭제
delete from emp2 where emp_name = '홍길동';
delete from emp2;

-- 테이블 삭제
drop table emp2;
-- emp로 시작하는 테이블 확인
select * from information_schema.tables where table_name like 'emp%';
-- 테이블명이 emp_sys인 employee의 dept_id가 sys인 사원들의 정보 복제생성
create table emp_sys
as
select * from employee where dept_id = 'sys';
-- emp_sys 테이블 조회
select * from emp_sys;
-- emp_id 가 S0001인 사원들의 정보 삭제 
delete from emp_sys where emp_id ='S0009';
-- set auto commit 설정 해제가 되어있어야 rollback 가능
rollback;
commit; -- 현재의 작업까지 완료 --> db에 저장 (커밋 전까지는 메모리에 있는 상태) 
-- 최사모 사원의 입사일을 현재날짜로 수정
update emp_sys set hire_date = curdate() where emp_name = '최사모';
rollback;
-- rollback은 첫 업데이트 하기전 상태로 돌아감 (첫 업데이트 하기 전 상태로 롤백)
select * from emp_sys;

-- 테이블의 데이터 절삭 : truncate table [테이블명];
select * from emp_sys;
commit;
delete from emp_sys;
rollback;
commit;
-- truncate table로 절삭하게되면 데이터베이스에 바로 적용되기 때문에 rollback이 '무조건' 안됨
truncate table emp_sys;


-- ** DML에 속하는 insert(C), select(R),update(U), delete(D) 쿼리는 set auto commit 설정에 영향을 받으므로
-- CRUD의 많은 예제는 게시판에 있음 -- 사수가 생각하는 게시판과 내가 생각하는 게시판이 다를 수 있음, 게시판 짜는 미션이 주어졌을 때 먼저 탐색질문을 통해서 어떤 기능이 들어갈지, 기간은 언제까지인지 니즈를 잘 파악해야함
-- 현재 트랜젝션 설정을 확인 (툴마다 다름)