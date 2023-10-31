
-- board로 시작하는 테이블 조회
select * from information_schema.tables where table_name like 'board%';

/* 자동 행번호 생성 : auto_increment
   형식 : 테이블 생성 시 기본키 컬럼(중복X, NullX)에 데이터 타입 전 후에 입력
   - 기본키를 별도로 입력받지 않는 테이블에서 기본키의 역할을 하도록 정의
*/
-- 테이블 생성 : BOARD
select * from information_schema.tables where table_name like 'board%';
create table board(
	bid int primary key,
    btitle varchar(50) not null,
    bcontent varchar(200),
    bdate date
);
create table board(
	bid int auto_increment primary key ,
    btitle varchar(50) not null,
    bcontent varchar(200),
    bdate date
);

drop table board;

insert into board(btitle,bcontent,bdate)
	values('TEST','CONTENT TEST',curdate());

-- 마지막으로 auto_increment가 반영된 숫자 확인하는 함수
select last_insert_id() from board;
select * from board;
-- bid는 기본키로 활용할 수 있지만 화면상에 list로 사용은 X
delete from board where bid=4;

-- board 테이블의 bid 컬럼을 자동행번호 설정 후 기본키로 만들기
create table board(
	bid int auto_increment primary key ,
    btitle varchar(50) not null,
    bcontent varchar(200),
    bdate date
);
-- board 테이블 삭제
drop table board;
select * from board;

-- 데이터 추가, bid는 create할 때 타입을 int로 설정했기 때문에 자동으로 추가됌
insert into board(btitle,bcontent,bdate)
	values('TEST','CONTENT TEST',curdate());

-- 마지막으로 auto_increment가 반영된 숫자 확인하는 함수
select last_insert_id() from board;
select * from board;
-- bid는 기본키로 활용할 수 있지만 화면상에 list로 사용은 X
delete from board where bid=4;

create table board2(
	bid varchar(10) primary key,
    btitle varchar(50) not null,
    bcontent varchar(200),
    bdate date
);
-- 듀얼 테이블에서 자동으로 last_insert_id 를 사용하여 행번호를 넣어주는 방식
select concat('B',last_insert_id()+1) from dual;

create table board3(
	bid varchar(10) primary key,
    btitle varchar(50) not null,
    bcontent varchar(200),
    bdate date
);
-- board3_sequ 테이블을 생성하여 bid 마지막에 들어가는 숫자를 자동으로 반환하도록 함
create table board3_sequ(
	id int auto_increment primary key
);

select * from board3_sequ;
insert into board3_sequ values();

-- 트리거 안에서는 주석처리하면 안됌
-- MYSQL에서 프로시저 생성시 주석을 포함하지 않도록 주의하세요!!
-- bid를 문자열 + 숫자 : 'B001'
-- 방법 1 : concat을 사용하여 결합하는 방법
-- board3과 board_sequ 테이블을 연결하는 tg_board3_insert 트리거 프로시저를 생성
-- tg_board3_insert 트리거 프로시저를 생성
DELIMITER $$ 
CREATE TRIGGER tg_board3_insert
BEFORE INSERT ON board3
FOR EACH ROW
BEGIN
	INSERT INTO board3_sequ values(null);
    SET NEW.bid = CONCAT('B_', LPAD(LAST_INSERT_ID(), 4, '0'));
END$$
DELIMITER ;

insert into board3 (btitle,bcontent,bdate) values('title','content',curdate());
select * from board3;

show triggers;

commit;

-- 행번호 생성 : row_number() over(정렬 컬럼)
-- 오라클 : rownum과 order by를 함께 사용 불가
-- employee 테이블의 연봉 기준으로 정렬한 후 행번호를 함께 출력
select row_number() over(order by salary asc), emp_id,salary from employee where salary is not null order by salary asc;
-- 쿼리 마지막 order by는 생략가능
select row_number() over(order by salary asc) as RNO, emp_name,salary from employee where salary is not null order by salary asc;
-- 정보시스템 부서의 사원들의 아이디, 사원명, 입사일, 연봉, 그리고 소속 본부를 출력
select * from department;
select * from unit;
select * from employee;

-- 오라클은 row_number()을 서브쿼리로 사용해야함
select row_number() over(order by emp_id, salary desc) as RNO, e.emp_id, e.emp_name, e.hire_date, e.salary, u.unit_name, d.dept_id from employee e 
	inner join department d on e.dept_id = d.dept_id
	inner join unit u on d.unit_id = u.unit_id
    where d.dept_name = '정보시스템';
select * from employee where dept_id = (select dept_id from department d where dept_name = '정보시스템');

select row_number() over(order by emp_id, salary desc) as RNO,
	e.emp_id, e.emp_name, e.hire_date, e.salary, u.unit_name, d.dept_id 
    from employee e, department d, unit u 
    where  e.dept_id = d.dept_id
		and d.unit_id = u.unit_id
        and d.dept_name = '정보시스템';
        
-- 휴가 사용 이유가 '두통'인 사원들 중에 영업부서인 사원의 사원명,폰번호, 부서명, 휴가사용 이유 조회
select * from vacation;
select * from employee;
select * from department;
-- 최종 데이터 출력 시 행번호 추가
-- 오라클 버전
select row_number() over(order by emp_name asc) as RNO,e.emp_name, e.phone, d.dept_name, v.reason 
	from department d,employee e,vacation v 
		where e.dept_id = d.dept_id 
			and e.emp_id = v.emp_id
            and v.reason = '두통' 
            and d.dept_name in('영업','인사');
-- ansi-sql 버전
select row_number() over(order by emp_name asc) as RNO,e.emp_name, e.phone, d.dept_name, v.reason  from department d 
	inner join employee e on d.dept_id = e.dept_id 
    inner join vacation v on e.emp_id = v.emp_id
    where v.reason = '두통' and d.dept_name in('영업','인사');
-- 휴가를 간 적이 있는 정보시스템 부서의 사원들을 출력
-- 최종 데이터 출력시 행번호 출력
select * from employee;
select * from vacation;
-- 데이터셋을 만들때 row_number는 가장 마지막에 넣는다.
select row_number() over(order by emp_id) as RNO,emp_id, emp_name, phone, dept_id from (select * from employee where dept_id = (select dept_id from department d where dept_name = '정보시스템') and emp_id in (select emp_id from vacation v))a;
select * from employee where dept_id = (select dept_id from department d where dept_name = '정보시스템') and emp_id in (select emp_id from vacation v);
select row_number() over(order by emp_id) as RNO,emp_id, emp_name, phone from employee where emp_id in(select distinct emp_id from vacation);
-- 뷰(view) : 논리적인 테이블 (가상으로 만들어지는 테이블)로 SQL을 실행하여 생성되는 가상의 테이블
-- 형식 : create view [view 이름]
-- 		 as
-- 		 서브쿼리(select~~)
-- 모든 뷰의 목록을 조회
select * from information_schema.views where table_schema = 'hrdb2019';
select * from emp_view;
-- employee 테이블의 가상테이블 EMP_VIEW 생성
create view emp_view
as
select * from employee;
-- view로 생성하는게 아닌 cas로 생성하면 물리적인 스토리지가 많이 소모가되는 문제

-- 아래 코드를 실행한 SQL 쿼리를 ==>> SYS_VIEW 이름으로 생성
select * from sys_view;
create view sys_view 
as
select row_number() over(order by emp_id, salary desc) as RNO, e.emp_id, e.emp_name, e.hire_date, e.salary, u.unit_name, d.dept_id from employee e 
	inner join department d on e.dept_id = d.dept_id
	inner join unit u on d.unit_id = u.unit_id
    where d.dept_name = '정보시스템';
select * from employee where dept_id = (select dept_id from department d where dept_name = '정보시스템');

-- view로 만든 테이블 지우기
drop view emp_view;

-- 2014년부터 2015년까지 입사한 사원들 중에서 퇴사하지 않은 사원들
select * from information_schema.views;
select * from emp_view;
create view emp_view
as
select row_number() over(order by emp_id, salary desc) as RNO,
	e.emp_id, e.emp_name, e.hire_date, e.salary, u.unit_name, d.dept_id 
    from employee e, department d, unit u 
    where  e.dept_id = d.dept_id
		and d.unit_id = u.unit_id
        and hire_date between '2014-01-01' and '2015-12-31'
        and retire_date is null;

-- 원소스를 가져와서 조건을 넣어 수정하는 방식을 많이 사용
-- join으로 큰 세트만 가져와서 view로 저장 후에 소스를 select로 조회하여 사용
create view emp_view2
as
select row_number() over(order by emp_id, salary desc) as RNO,
	e.emp_id, e.emp_name, e.hire_date, e.salary, u.unit_name, d.dept_id 
    from employee e, department d, unit u 
    where  e.dept_id = d.dept_id
		and d.unit_id = u.unit_id;
        
-- 2014년부터 2015년까지 입사한 사원들 조회
select * from emp_view2 where hire_date between '2014-01-01' and '2015-12-31';






