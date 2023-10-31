/*

	두개 이상의 테이블에 대한 쿼리
	- 조인(Join), 서브쿼리(SubQuery)
    
*/

-- 조인(Join)
-- 1. CROSS JOIN(테이블의 합집합 : *) <오라--클> CARTESIAN JOIN
-- CROSS JOIN: 두 테이블의 모든 행을 결합하여 조회합니다.
-- 2. INNER JOIN(교집합) <오라클--> EQUI-JOIN
-- INNER JOIN : 두 테이블의 공통되는 부분만 조회합니다.
-- 3. OUTER JOIN (교집합 + 교집합에 제외된 데이터)<오라클--> OUTER JOIN
-- 4. SELF JOIN <--> SELF JOIN --->> Subquery로 처리되는 것이 효율적임
-- SELF JOIN 테이블을 나누지않고 하나의 테이블에서 관리하는 것

-- A - 빨강색구슬, 노랑색
-- B - 파랑색구슬, 보라색
-- A,B에 담긴 구슬 중 같은 색깔의 구슬만 꺼냄 : 빨강색 -->  
-- A,B에 담긴 구슬 중 같은 색깔 구슬은 1씩 꺼내고, 다른 색깔도 함께 꺼냄, B주머니에서만 --> 빨강색(1), 파랑색, 보라
-- A,B에 담긴 구슬(A기준) 중 같은 색깔 구슬은 1씩 꺼내고, 다른 색깔도 함께 꺼냄, B주머니에서만 --> 빨강색(1), 노랑
-- crossJoin은 실시간에서는 되도록이면 피하는게 좋음
-- innerJoin이 가장 많이 쓰임 ()
-- 연관성이 있는 데이터로 설계해야함 (데이터모델링)
-- 한 고객은 하나이상의 상품을 주문할 수 있다라고 정의하는 조건이 필요 --> 이조건으로 데이터모델링을 해야함
-- relationship 데이터구조 : 관계가 있는 데이터구조
-- hrdb2019 데이터베이스의 모든 테이블 조회
-- 형식 : select [컬럼리스트] from information_schema.tables
-- where table_schema = '데이터베이스명'
select * from information_schema.tables where table_schema = 'hrdb2019';
desc department;
select * from department;
desc employee;
select * from employee;
desc unit;
select * from unit;
desc vacation;
select * from vacation;

-- E(엔티티)RD란?
-- 데이터베이스 테이블간의 구조를 그림으로 설명해놓은 것을 파악하는 것
-- E (테이블간의 관계) 데이터를 모델링할때는 엔티티라고 부름

select * from department inner join employee;

-- 정보시스템 부서에 속한 홍길동 사원이 사용한 휴가일수를 조회
-- 순서에 따라서 성능에 영향이 생긴다.

-- 1. CROSS JOIN : 테이블 * 테이블 * 테이블 ... 
-- employee 테이블과 dept 테이블을 크로스조인
-- 형식 : select * from 테이블명 JOIN 테이블명; 
-- 워크벤치 툴에서 데이터베이스 기준 ERD 생성
-- Database --> reverse Engineer

select * from employee;
select * from department;
select * from employee cross join department;
select * from vacation;
select count(*) from employee join department; -- 20 * 7 = 140;
select count(*) from employee; -- 20
select count(*) from department; -- 20
-- department 부서와 vacation 부서를 조인
desc department;
desc vacation;
select count(*) from department;
select count(*) from vacation;
select count(*) from department join vacation;
select count(*) from department, vacation;

-- department 부서와 vacation 부서, employee를 조인
select count(*) from department as d join vacation as v join employee as e; -- 14280
select count(*) from department d, vacation v,employee e; -- 오라클형식, 14280
-- 오라클 형식의 cross join

select count(*) from (select * from department join vacation) as a
	join
    (select * from department join vacation) as b;
	
-- 부서(dept_id:PK) <---- 사원 (dept_id : FK)
-- 사원은 하나의 부서에 반드시 포함된다.

-- 과목(sub_id:PK) <----- 학생(sub_id:FK)
-- 한학생은 하나의 과목을 반드시 수강해야한다.

-- 한명의 고객은 하나이상의 상품을 주문 할 수 있다.
-- 고객() <-----  주문() -----> 상품()

-- unit(unit_id:PK) <---- Department(unit_id:FK)
-- 부서는 하나의 유닛에 반드시 포함된다.

-- Employee(emp_id:PK) <--- Vacation(emp_id:FK)

-- 2. INNER 조인 : 테이블간의 기본키와 참조관계가 정의된 경우 사용
-- 형식 : select * from 테이블1 INNER JOIN 테이블2
-- where 테이블1.기본키(참조키) ON 테이블2.참조키(기본키);
-- 형식(오라클) :  SELECT * from 테이블1, 테이블2 where 테이블1.기본키 = 테이블2.참조키;
-- employee 테이블과 department 테이블을 INNER 조인
select * from employee inner join department  -- 20 
on employee.dept_id = department.dept_id where dept_name = '회계';
-- 오라클 형식 
select * from employee e,department d -- 20
where e.dept_id = d.dept_id;

select emp_id, emp_name, d.dept_id, dept_name, start_date from employee e inner join department d on e.dept_id = d.dept_id order by emp_id asc;
select emp_id, emp_name, d.dept_id, dept_name, start_date from employee e, department d where e.dept_id = d.dept_id order by emp_id asc;

-- 홍길동 사원이 속한 부서의 이름과 부서 id , 입사일, 연봉을 조회
select * from employee;
select * from department;
select dept_name, emp_name, employee.dept_id, hire_date, salary from employee inner join department on employee.dept_id = department.dept_id where emp_name = '홍길동';
select dept_name, emp_name, employee.dept_id, hire_date, salary from employee inner join department on employee.dept_id = department.dept_id and emp_name = '홍길동';
-- 영업부에 속해 있는 사원들의 사원명, 입사일, 연봉일 조회
select emp_name, hire_date, salary, dept_name, department.dept_id from employee inner join department on employee.dept_id = department.dept_id and dept_name = '영업';
-- 인사과에 속한 모든 사원의 정보를 조회
select * from employee inner join department on employee.dept_id = department.dept_id and dept_name = '인사';
-- join을 할 떄에는 해당 테이블의 데이터셋을 최대한 작게 만들어놓고 join을 해야 성능이 좋다.
select * from employee cross join department;
select department.dept_name, employee.emp_name from department cross join employee;
select * from employee;
select * from department;
select * from employee inner join department;

-- 인사과에 속한 사원들 중에 휴가를 사용한 사원들의 리스트를 모두 조회
select * from vacation;
select * from employee;
select * from department d inner join employee e inner join vacation v on d.dept_id = e.dept_id and e.emp_id = v.emp_id and dept_name = '인사'  ;
select * from department d inner join employee e, vacation v where d.dept_id = e.dept_id and e.emp_id = v.emp_id and dept_name = '인사';

-- 인사과에 속한 사원들 중에 휴가를 사용한 사원들별로 휴가사용횟수 출력 (서브쿼리)
select * from department d inner join employee e inner join vacation v;

-- 휴가 사용 이유가 '두통'인 사원들 중에 영업부서인 사원의 사원명, 부서명, 휴가사용 이유 조회
-- 영업 부서가 속한 본부를 추가로 조회
select emp_name, e.phone , dept_name, v.reason from department d inner join employee e inner join vacation v on d.dept_id = e.dept_id and e.emp_id = v.emp_id and d.dept_name = '영업' and v.reason = '두통';
-- C퀄, MS 방식
select u.unit_id, u.unit_name ,emp_name, e.phone ,dept_name, v.reason
from department d 
inner join unit u inner join employee e inner join vacation v 
on d.dept_id = e.dept_id and e.emp_id = v.emp_id and d.dept_name = '영업' and v.reason = '두통' and u.unit_id = d.unit_id;
-- 오라클 방식
select u.unit_id, u.unit_name ,emp_name, e.phone ,dept_name, v.reason
from department d
inner join unit u on u.unit_id = d.unit_id
inner join employee e on d.dept_id = e.dept_id 
inner join vacation v on e.emp_id = v.emp_id
where d.dept_name = '영업' and v.reason = '두통'; 

-- C퀄, MS 방식
select u.unit_id, u.unit_name ,emp_name, e.phone ,dept_name, v.reason
from department d 
inner join unit u inner join employee e inner join vacation v 
on d.dept_id = e.dept_id and e.emp_id = v.emp_id and d.dept_name = '영업' and v.reason = '두통' and u.unit_id = d.unit_id;


select * from unit;
select * from department;
select * from employee;
select * from unit;
-- 2014년도부터 2015년까지 입사한 사원들 중에서 퇴사하지 않은 사원들의
-- 사원아이디, 사원명, 부서명, 입사일, 소속본부를  조회
select emp_id, emp_name, dept_id, hire_date,retire_date from employee;
select emp_id, emp_name, dept_id, hire_date from employee where retire_date is null;
select emp_id, emp_name, dept_id, hire_date from employee where substring(hire_date,1,4)>='2014' and substring(hire_date,1,4)<='2015' and retire_date is null;
-- ANSI SQL 문법
select e.emp_id 사원아이디, e.emp_name 사원이름 , d.dept_id 부서아이디 , d.dept_name 부서명 , hire_date 입사일, u.unit_name 소속본부명 from employee e inner join department d inner join unit u on e.dept_id = d.dept_id and d.unit_id = u.unit_id and substring(hire_date,1,4)>='2014' and substring(hire_date,1,4)<='2015' and e.retire_date is null;
-- ANSI SQL , Between 사용
select e.emp_id 사원아이디, e.emp_name 사원이름 , d.dept_id 부서아이디 , d.dept_name 부서명 , hire_date 입사일, u.unit_name 소속본부명 from employee e inner join department d on e.dept_id = d.dept_id and substring(hire_date,1,4) between '2014' and '2015' and e.retire_date is null;
-- 오라클 문법
select e.emp_id 사원아이디, e.emp_name 사원이름 , d.dept_id 부서아이디 , d.dept_name 부서명 , hire_date 입사일, u.unit_name 소속본부명 from employee e, department d, unit u where e.dept_id = d.dept_id and u.unit_id = d.unit_id and substring(hire_date,1,4) between '2014' and '2015' and e.retire_date is null;

-- OUTER JOIN : 교집합 (INNER JOIN) + INNER JOIN에서 제외된 데이터를 함께 출력
-- 형식 : SELECT [컬럼리스트] from 테이블1 INNER JOIN 테이블2 left outer join / right outer join on 조인컬럼
-- 형식(inner join 생략): SELECT [컬럼리스트] from 테이블1 left outer join / right outer join on 조인컬럼
-- from 옆에 나오는 테이블은 left, inner join 옆에 나오는 테이블은 right
-- 오라클 방식 : left outer join 은 왼쪽 컬럼에 (+)가 붙고 e.emp_id(+) = v.emp_id , right outer join은  e.emp_id = v.emp_id(+) (+)가 오른쪽에 붙는다.

-- 모든 부서의 정보와 소속 본부명을 함께 조회
-- *** outer join 사용시에는 반드시 누락되는 데이터가 없도록 확인!!
select dept_id, dept_name, u.unit_id, u.unit_name, start_date from department d left outer join unit u on d.unit_id = u.unit_id;
select dept_id, dept_name, u.unit_id, u.unit_name, start_date from department d inner join unit u on d.unit_id = u.unit_id;

-- 오라클 문법 (MS안에서 지원 X)
-- select dept_id, dept_name, u.unit_id, u.unit_name, start_date from department d, unit u where d.unit_id(+) = u.unit_id;
select * from employee;
select * from department;
-- 2017년부터 2018년도까지 입사한 사원들의 사원명, 입사일, 연봉, 부서명 조회 단 퇴사한 사원들도 모두 조회
-- 소속본부를 모두 조회
select emp_name, emp_id, e.hire_date, retire_date, salary, d.dept_id, d.dept_name, u.unit_name, u.unit_id
from employee e 
inner join department d 
on e.dept_id = d.dept_id left outer join unit u on u.unit_id = d.unit_id where hire_date between '2017-01-01' and '2018-12-31'; 

select emp_name, emp_id, e.hire_date, retire_date, salary, d.dept_id, d.dept_name, u.unit_name, u.unit_id
from employee e 
inner join department d 
on e.dept_id = d.dept_id inner join unit u on u.unit_id = d.unit_id and hire_date between '2017-01-01' and '2018-12-31'; 



-- join 메커니즘 확인 연습용

-- inner join

select emp_name, hire_date
from employee e 
inner join department d 
on e.dept_id = d.dept_id and hire_date between '2017-01-01' and '2018-12-31';

-- left outer join
select emp_name, emp_id, e.hire_date, retire_date, salary, d.dept_id
from employee e 
left outer join department d 
on e.dept_id = d.dept_id and hire_date between '2017-01-01' and '2018-12-31';

/*
select emp_name, emp_id, e.hire_date, retire_date, salary, d.dept_id, d.dept_name, u.unit_name, u.unit_id
from employee e, department d, unit u
inner join department d 
where e.dept_id = d.dept_id
and u.unit_id = d.unit_id(+) 
and hire_date between '2017-01-01' and '2018-12-31'; 
*/





