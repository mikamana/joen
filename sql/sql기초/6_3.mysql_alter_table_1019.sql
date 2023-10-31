
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

-- ALTER TABLE `order_header` 
  -- ADD CONSTRAINT `order_customer_fk` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE;
  -- 부모 테이블이 삭제될때 참조키로 등록한 자식 테이블도 같이 삭제되게끔 하는 작업



ALTER TABLE `order_detail` DROP FOREIGN KEY `order_detail_ibfk_1`;


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