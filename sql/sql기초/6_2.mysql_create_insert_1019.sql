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
-- 테이블 목록 조회

select * from information_schema.tables where table_schema = 'hrdb2019';
desc information_schema.tables;
-- 오라클 테이블 목록 조회 명령어 : user_tables 로 시작하는 데이터 딕셔너리 테이블

-- 툴에 의존하지 않는 기술을 가진다.
-- 테이블 생성
-- 형식 : create table [테이블명] (
--           컬럼명    데이터타입(크기) [제약사항], 
-- 			 ...  )
desc employee;
-- emp 테이블 생성 : emp_id(문자,10), emp_name(문자,20), hire_date(date), salary(숫자)
-- 숫자타입은 크기가 4byte로 잡힌다. 
create table emp(
	emp_id char(10), -- 고정형 문자데이터 타입 10byte 짜리 배열이 만들어진다. : 무조건 4글자가 들어가는 경우, 예(성별이나 이름 등) 사용
    emp_name varchar(20), -- 가변형 문자데이터 타입 -- 최대 20글자까지 넣을 수 있지만 실제 넣은 글자수만큼 데이터크기가 잡히게된다. (메모리낭비를 줄인다)
    hire_date date,
    salary int -- 최대 4byte이다.
);

select * from information_schema.tables where table_schema = 'hrdb2019';
desc emp;

-- 테이블 생성(복제)
-- 형식 : Create table [테이블명] 
--       As
--       Select ~~
-- ** 복제한 테이블에는 원본의 제약사항은 포함되지 않는다.
-- employee 테이블의 구조만 복제하여 emp_copy 테이블을 생성
select * from information_schema.tables where table_schema = 'hrdb2019';
select * from emp_copy2;
desc emp_copy; -- 
desc employee;
create table emp_copy as select * from employee where 1 = 0;

-- employee 테이블의 구조+내용 복제하여 emp_copy 테이블을 생성
create table emp_copy2 as select * from employee;

-- 정보시스템 부서의 사원들만 employee_sys 테이블에 저장
select * from information_schema.tables where table_schema = 'hrdb2019';
select * from employee_sys;
create table employee_sys as (select * from employee where dept_id = (select dept_id from department where dept_name = '정보시스템'));

-- 테이블 삭제
-- drop table [테이블명];
drop table emp;
drop table emp2;
drop table emp3;

select * from information_schema.tables where table_schema = 'hrdb2019';
desc emp;
-- 데이터 생성(추가)
-- 형식 : insert into [테이블명] {(컬럼리스트)}
--       values(데이터리스트);

insert into emp (emp_id,emp_name,hire_date,salary)
values ('hong','홍길동',curdate(), 1234);
-- desc로 순서 확인
-- 컬럼리스트는 {}로 생략이 가능하다.
-- 컬럼리스트의 순서에 따라서 데이터리스트를 정의한다.
-- 유령데이터 상태 : commit을 통해 트렌젝션이 일어나야 비로소 emp에 저장됨
select * from emp commit; -- 트렌젝션 완료
select * from emp;
insert emp (emp_id,emp_name,hire_date,salary)
values ('hong','홍길동',curdate(), 1234);
select * from emp commit; -- 트렌젝션 완료

-- commit을 하면 추가한 DML로 추가한 모든 insert나 update들의 트랜젝션이 일어남
insert emp (emp_name,hire_date,salary, emp_id)
values ('테스트',curdate(),8500,'test');
select * from emp ; -- 트렌젝션 완료
commit;

-- 컬럼리스트가 생략되면 만들 때의 구조 (desc)를 내부적으로 체크해서 그 구조대로 타입체크를 해서 비교한다.
insert emp values ('테스트', curdate(), 8500, 'test'); -- 컬럼리스트 생략시 desc 구조로 체크 (오류)

insert emp values ('test2', '테스트', curdate(), null); -- 값이 정해져있지 않을 경우 null을 추가
select * from emp;
-- rollback; -- set autocommit(true);
commit;

-- constraint(제약사항) : insert, update, delete
-- db에 들어가도록 체크하는 primary키
-- 중복 체크 : unique
-- null 체크 : not null
-- 기본키 제약(unique + not null) : primary key
-- 참조키 제약 : foreign key - 관련있는 다른 테이블의 primary key를 참조하는 제약
-- default, check

-- 테이블 생성 시 제약사항 추가
-- emp2 테이블에 제약사항 : emp_id(문자 4자리, 기본키 제약), emp_name(문자10자리, not null)
create table emp2(
	emp_id char(4) primary key,
    emp_name varchar(10) not null,
    hire_date date,
    salary int
);

desc emp2;
select * from information_schema.tables where table_schema = 'hrdb2019';
select * from emp2;

-- 홍길동 데이터 insert
insert emp2(emp_name,emp_id,hire_date,salary)
values('홍','tt',curdate(), 1234);
select * from emp3 ;
desc emp3;

-- 제약사항 조회
desc information_schema.table_constraints;
select * from information_schema.table_constraints where table_name = 'emp2';
-- 테이블을 만들 때 이름을 지정해줄 수 있는데, 지정을 안해줄경우 기본값으로 primary가 들어간다.
-- 웬만하면 테이블 이름과 제약사항에도 이름을 지정해주는게 좋다.
-- emp3 테이블에 제약사항 : 
-- 제약사항 이름 규칙 : 테이블명_컬럼명_제약사항명

CREATE TABLE emp3 (
    emp_id CHAR(4),
    emp_name VARCHAR(10) NOT NULL,
    hire_date DATE,
    salary INT,
    CONSTRAINT emp3_emp_id_pk PRIMARY KEY (emp_id)
);

desc emp3;
select * from information_schema.table_constraints where table_name = 'emp3';
commit;
insert into emp3 values('choi', '최', curdate(),3000);
select * from emp3;

-- 참조키 제약 설정 : 두개 이상의 참조관계가 설정되어 있는 경우
-- 형식 : constraint [제약명] foreign key(참조컬럼) references 참조할 테이블명 (참조컬럼:PK)
-- 데이터베이스 설계할 때 사용 
-- [학사관리 시스템 설계]
-- 학생은 반드시 하나 이상의 과목을 수강해야한다.
-- 교수는 반드시 하나 이상의 과목을 강의해야한다.
-- 학생테이블과 교수테이블, 과목테이블 필요
select * from information_schema.table_constraints;

-- 과목 테이블 생성 : subject
-- 컬럼 : 과목id(sub_id), 과목명(sub_name), 등록일자(sdate)
-- 과목id를 기본키로 설정
-- 참조하려는 테이블이 있어야 테이블 생성이 가능, 과목테이블 먼저 생성

-- 학생 테이블 생성 : student
-- 컬럼 : 학번(sid:문자4), 학생명(sname), 학과(dept), 과목id(sub_id), 이메일(email)
-- 학번은 기본키로 설정, 수강과목은 과목테이블을 참조한다.
create table student(
    sid char(4),
    sname varchar(20) not null,
    dept varchar(20),
    sub_id char(4),
	email varchar(20),
    constraint student_sid_pk primary key (sid),
    constraint student_sub_id_fk foreign key (sub_id) references subject(sub_id)
    -- sub_id 가 pk(유니크한)값인 것이 좋다. 
);


-- 교수 테이블 생성 : professor
-- 컬럼 : 교수id(pid), 교수명(pname), 폰번호(phone), 과목id(sub_id)

create table professor(

	pid char(4),
    pname varchar(10) not null,
    phone char(13),
    sub_id char(4),
	constraint professor_pid_pk primary key (pid),
    constraint professor_sub_id_fk foreign key (sub_id) references subject(sub_id)
);


create table subject(
	sub_id char(4),
    sub_name varchar(30) not null,
    sdate date,
    constraint subject_sub_id_pk primary key (sub_id)
);
drop table subject;


select * from information_schema.tables where table_schema = 'hrdb2019';
select * from information_schema.table_constraints where table_name = 'subject';
select * from information_schema.table_constraints where table_name = 'student';
desc student;
desc professor;
select * from subject;
desc subject;

-- 참조관계에서의 데이터 생성(추가)
-- 가장 먼저 데이터가 추가되어져야 하는 테이블
insert into subject value('S001', '수학', curdate());
insert into subject value('S002', 'HTML', curdate());
insert into subject value('S003', 'SQL', curdate());
insert into subject value('S004', 'React', curdate());
insert into student value('A001', '아무개', '철학', 'S001', 'try226@naver.com');
insert into student value('A002', '홍길동', '경영학', 'S002', 'sfas@naver.com');
insert into student value('A003', '미얀마', '컴퓨터공학', 'S003', 'sda@naver.com');
insert into student value('A004', '홍길동', '심리학', 'S004', 'test@naver.com');
insert into student value('A005', '아리나', '심리학', 'S004', 'test@naver.com');

drop table student;

select * from student;
select * from subject;



insert into professor values('P001', '공유', '010-1234-5678','S001');
insert into professor values('P002', '이브', '010-1234-5678','S002');
insert into professor values('P003', '강인', '010-1234-5678','S003');
-- insert into professor values('P003', '강인', '010-1234-5678','S009'); 참조키 값이 존재하지않으므로 오류
select * from professor;

select * from student s inner join subject j inner join professor p on s.sub_id = j.sub_id and s.sname = '홍길동' ;

-- 홍길동 학생이 수강하고 있는 과목의 교수명을 출력
select * from professor p inner join subject j inner join student s on p.sub_id = j.sub_id and s.sname = '홍길동';
select p.pname, st.sname, su.sub_name from subject su,student st, professor p where su.sub_id = st.sub_id and su.sub_id = p.sub_id and st.sname = '홍길동'; 

-- 테스트 학생이 수강하고 있는 과목을 모두 출력
-- 서브쿼리와 inner join 사용 할 경우 구분, sub_name만 출력할 경우에는 서브쿼리 사용 가능
select sub_name, s.sub_id from subject s where sub_id in (select sub_id from student j where sname = '미얀마');
-- 서브쿼리와 inner join 사용 할 경우 구분, 과목명과 학생명도 출력할 경우에는 조인 사용
select * from student st, subject su where st.sub_id = su.sub_id and sname = '미얀마';
-- 제니 교수가 강의하는 과목의 학생들을 모두 출력
select * from student st where sub_id in (select s.sub_id from subject s inner join professor p on s.sub_id = p.sub_id and p.pname = '이브');
select * from professor p, subject su, student st where p.sub_id = su.sub_id and su.sub_id = st.sub_id and p.pname = '이브';

select s.sub_id from subject s inner join professor p on s.sub_id = p.sub_id and p.pname = '이브';

select * from student s, subject j where s.sub_id = j.sub_id; 

-- 과목별 수강인원 , 과목명 , 교수명 출력
select sub_name,sub_id,count(*) from subject s group by sub_id; 
select p.pname, s.sub_id, j.sub_name, count(s.sub_id) 수강인원 from student s inner join subject j on s.sub_id = j.sub_id left outer join professor p on p.sub_id = j.sub_id group by s.sub_id, p.pname;
-- mysql에서 outer join을 사용 할 경우에는 위처럼 ansi-sql 문법으로 작성해야함
select pname, sub_name, 수강인원 from (select s.sub_id, j.sub_name, count(s.sub_id) 수강인원 from student s inner join subject j on s.sub_id = j.sub_id group by s.sub_id) ss left outer join professor p on ss.sub_id = p.sub_id;
select count(*) from subject;

-- 하나의 뉴스는 반드시 하나 이상의 댓글을 포함된다.


