
/*****
	SQL(Structured Query Language) / ANSI SQL
    - DMBS에 저장된 데이터를 CRUD 작업을 수행하는 언어
    1. DDL(Data Definition Language : 데이터 정의어)
    - 데이터베이스 관리자 논리적인 저장공간을 정의하는 언어
    create(생성), alter(수정), drop(삭제), truncate(일부데이터삭제)
    2. DML(Data Manipulation Language : 데이터 조작어)
    - 저장된 논리적인 공간에 저장할 데이터를 CRUD를 수행하는 언어
    insert(C), select(R), update(U), delete(D)...
    3. DCL(Data Control Language : 데이터 제어어)
    - 데이터베이스에 접근할 수 있는 권한을 제어하는 언어
    grant(권한부여), revoke(권한해제) 
    4. TCL(Transaction Control Language : 트랜잭션 제어어)
    - 데이터베이스 작업의 단위를 트랙잭션이라 하며, 작업을 데이터베이스에 영구히 적용하거나  취소하는 경우 commit(작업완료),rollback(작업취소),savepoint(작업저장)을 사용
*/ 
/*
	테이블의 구조 확인 : DESC
    형식 
*/
-- insert명령어 사용시에는 중복된 데이터 사용불가 
desc employee;
/* 사원은 반드시 하나의 부서에 소속된다.*/
desc department;
-- key값에 PRI (Primary)로 되어있으면 그 값이 부모역할
desc unit;
desc vacation;
/* 데이터 사용 : USE 데이베이스명; */

USE  hrdb2019;
SELECT DATABASE();

/* 
   단순 조회 (R: select) 
   형식 : select [컬럼리스트] from [테이블명];
*/
-- employee 테이블에 있는 사원id를 조회, 사원명, 이메일을 조회
select emp_id, emp_name, email from employee;
-- insert 메서드 실행될 때 가장 가까운 , 근처에있는 곳에 찾아서 넣기 때문에 순서에 상관없이 데이터가 나옴 
-- 조회할 때 columns 명을 정확히 알아야함 
-- employee 테이블에 있는 모든 컬럼을 조회
select * from employee;
-- department 테이블의 모든 컬럼을 조회
select * from department;
-- 업무할 때는 아스타기호 사용은 협업시 좋지않다, 협업시에는 컬럼명을 직접 넣어서 사용하는게 좋음
-- employee 테이블 emp_id 컬럼명을 사원번호로 변경 후 조회
select emp_id as '사원 번호' from employee;
-- 공백이 추가가 될 경우에는 ''로 묶어서 한 단어로 만들어서 사용
-- employee 테이블의 모든 사원의 연봉, 보너스(연봉10%) 조회
select salary, salary*0.1 as 'bonus' from employee;
-- 현재 날짜를 가져오는 함수에 별칭 사용
select CURDATE() as mdate ;
/* 조건별 조회 (R: select) 
   형식 : select [컬럼리스트] 
		   from [테이블명]
           where 컬럼명 = [조건절];
*/
-- 사원id가 S0007에 해당하는 사원정보를 모두 조회
select * from employee where emp_id = 'S0007';
-- 문자가 포함되어있는 경우에는 반드시 ''로 묶어서 조회한다.
-- 사원명이 일지매인 사원의 모든 정보를 출력
select * from employee where emp_name = '일지매'; 
-- 홍길동 사원의 사원아이디, 성별, 폰번호, 이메일, 연봉 조회
select emp_name, emp_id, gender, email, salary from employee where emp_name = '홍길동'; 

-- 총무부에 속한 모든 사원의 정보를 조회
select * from department;
select * from employee where dept_id = 'GEN';

-- 모든 남자사원의 사원명, 입사일, 폰번호, 연봉
select emp_name, hire_date, phone, salary from employee where gender = 'M'; 

-- NULL 은 현재 숫자가 들어가지 않은 미지수의 개념이다.
-- eng_name이 현재 정의되지 않은 사원들을 모두 조회
select * from employee where eng_name is null;
-- 현재 정의되지않은 Null로 인식하려면 is 키워드로 찾아내주어야한다.
-- eng_name이 null이 아닌 사원들을 모두 조회
select * from employee where eng_name is not null;

/*
	NULL 값을 다른 값으로 대체하는 함수 : ifnull()
    형식 : ifnull(null포함 컬럼명, 변경하는값)
*/

select ifnull(eng_name,'홍길동') from employee;
-- 해당 select 메서드 실행할 때에만 eng_name이 '홍길동'으로 대체되어서 조회
-- retire_date가 null인 경우 현재기준 날짜로 대체하여 조회
select ifnull(retire_date, curdate()) as retire_date from employee;
-- 함수가 적용이 되어지는 컬럼은 그 함수 이름 자체가 컬럼이 되어버려서 res를 사용(as)하여 이름을 변경해준다.
-- 컬럼의 이름을 변경해주어야만 맵핑이 가능하다.

/*
 중복된 데이터를 배제하고 조회 : distinct 
 형식 : select {distinct} 컬럼리스트 from 테이블명
*/
-- 사원테이블에 존재하는 모든 부서번호를 조회
select dept_id from employee;
-- 중복된 값을 뺀 후 조회
select distinct dept_id from employee;

select emp_id from employee;
-- primary로 설정된 값들은 distinct를 사용할 필요가 없음

/*
	데이터 정렬 : order by
    형식 : select [컬럼리스트]
			from [테이블명]
            where [조건절]
            order by [컬럼명] ASC / DESC
*/

-- 사원id 기준으로 오름차순 정렬 후 모든 데이터 출력
select * from employee order by emp_id;
-- 입사일이 가장 빠른 순서대로 사원들을 모두 조회
select * from employee order by hire_date;
-- 연봉이 가장 높은 순으로 사원들을 모두 조회
select * from employee order by salary DESC;
-- eng_name이 null인 사원들 중 입사일이 가장 빠른 순서대로 조회
select * from employee where eng_name is null order by hire_date;

-- 정보시스템 부서 사원 중 입사일이 가장 빠르고, 급여를 많이 받는 
-- 순서로 정렬하여 조회

select * from department;
select * from employee where dept_id = 'SYS' order by hire_date asc , salary DESC;

SELECT
  department.dept_name,
  employee.emp_name,
  employee.salary
FROM
  department
INNER JOIN
  employee
ON
  department.dept_id = employee.dept_id
WHERE
  department.dept_id = 'SYS'
ORDER BY
  employee.salary DESC;
  /*
	실습 데이터베이스 연결 : myshop2019
    실습 내용 - 기본적인 데이터 조회
  */
-- Q01 ) customer 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는 살펴보세요
  -- Q02 ) employee 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는 살펴보세요
  -- Q03 ) product 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는 살펴보세요
  -- Q04 ) order_header 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는 살펴보세요
  -- Q05 ) order_detail 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는 살펴보세요
  -- Q06 ) 모든 고객의 아이디, 이름, 지역, 성별, 이메일 , 전화번호를 조회하세요.
  -- Q07 ) 모든 직원의 이름, 사원번호, 성별, 입사일, 전화번호를 조회하세요.
  -- Q08) 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
  -- Q09 ) '울산' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
  
 select * from order_header;
 select * from order_detail2017;
 select * from category;
 select * from customer;
 select * from order_detail;
 select * from order_header;
 select * from sub_category;
 
 /* 데이터 사용 : USE 데이터베이스명;   */
USE hrdb2019;
SELECT DATABASE();





  













 


