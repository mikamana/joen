/*

	특정 데이터를 검색 : where 조건절 + 비교연산자
	형식 : select [컬럼리스트] from [테이블명] where [조건절+비교연산자]

*/ 

select database();

use hrdb2019;

-- 연봉이 5000 이상인 사원들만 조회
select * from employee where salary >= 5000 order by salary DESC;

-- 2015년 1월 1일 이후 입사자들을 입사일이 빠른 순서로 조회
-- 조회기준 연봉이 null인 직원의 값은 0으로 정의
select emp_name, hire_date, ifnull(salary, 0) as salary from employee where hire_date >= '2015-01-01' order by hire_date asc;

-- salary값이 null 인 값을 제외한 값을 조회
select emp_name, hire_date, ifnull(salary, 0) from employee where hire_date >= '2015-01-01' and not(salary is null) order by hire_date asc;
-- where 조건절에 날짜를 비교할 경우 ''로 감싸서 비교 > 비교할 땐 숫자로 인식해서 비교함

-- 입사일이 2016년 1월 1일 이후 이고, 연봉이 6000 이상인 사원들을 조회
-- 최근 입사일 기준으로 정렬
select * from employee where hire_date >= '2016-01-01' and salary >= '6000' order by hire_date DESC;

-- 입사일이 2016년 1월 1일 이후 이거나, 연봉이 6000 이상인 사원들을 조회
-- 최근 입사일 기준으로 정렬
select * from employee where hire_date >= '2016-01-01' or salary >= '6000' order by hire_date DESC;

-- 정보시스템 부서 중 급여가 7000이상인 사원들만 조회
select * from employee where dept_id = 'SYS' and salary >= 7000;

-- 영업부 직원들 중 2016-01-01 입사자들의 사원아이디, 사원명, 성별, 입사일, 이메일
-- 연봉, 보너스(연봉의 20%) 조회
-- 보너스가 1000 이상인 직원만 조회
-- 조건절에 들어가는 컬럼은 반드시 물리적으로 들어가는 컬럼이어야한다.
-- 연봉이 null인 사원은 기본값을 50으로 정의
select emp_id, emp_name, gender, hire_date, email, ifnull(salary, 50) as salary, ifnull(salary*0.2, 50) as bonus from employee where dept_id = 'MKT' and salary*0.2 >= 1000;

-- 범위 조회 - between ~ and
-- 형식 : where [컬럼명] between [시작] and [종료]
-- 연봉이 6000 이상, 7000 미만인 사원들만 조회
select * from employee where salary >= 6000 and salary < 7000;
select * from employee where salary between 6000 and 6999;    
-- 입사년도가 2015년인 사원들만 조회
select * from employee where hire_date >= '2015-01-01' and hire_date <= '2015-12-31';
select * from employee where hire_date between '2015-01-01' and '2015-12-31';

-- 정보시스템 부서와 영업부서의 사원들만 조회
-- or 논리연산자 : in(값1,값2,값3) 연산자로 사용 
-- 형식 : where [컬럼명] in (값1,값2,값3)
select * from employee where dept_id = 'sys' or dept_id = 'mkt';
select * from employee where dept_id in ('sys','mkt');

select * from employee;
select * from department;
select * from employee inner join department on employee.dept_id = department.dept_id where employee.dept_id = 'SYS' and salary >= 7000;
select * from employee inner join department;
select emp_name, employee.dept_id from employee inner join department on employee.dept_id = department.dept_id where department.dept_name = '정보시스템';
/*

	문자열 검색 : 와일드 문자(%, _) - like 연산자와 함께 사용

*/
-- 사원들 중 김씨 성을 가진 모든 사원 조회
select * from employee where emp_name Like '김%'; 

-- 폰번호가 010으로 시작하는 영업부의 모든 사원 조회
select * from employee where phone Like '010%';

-- 이메일주소 두번째 자리에 'a'가 들어가는 사원 조회
select * from employee where email Like '_a%';

-- 이메일 아이디가 4자리인 사원 조회
SELECT * FROM employee WHERE LENGTH(substring_index(email, '@', 1)) = 4;
select * from employee where email like '____@%';

-- 사원명에 '삼'자가 들어가는 모든 사원 조회
select * from employee where emp_name Like '%삼%';













