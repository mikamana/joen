/*****
	SQL(Structured Query Language) / ANSI SQL
    - DBMS에 저장된 데이터를 CRUD 작업을 수행하는 언어
    1. DDL(Data Definition Language : 데이터 정의어)
    - 데이터베이스 관리자가 논리적인 저장공간을 정의하는 언어
    create, alter, drop, truncate
    
    2. DML(Data Manipulation Language : 데이터 조작어)
    - 저장된 논리적인 공간에 저장할 데이터를 CRUD를 수행하는 언어
    insert(C), select(R), update(U), delete(D)...
    
    3. DCL(Data Control Language : 데이터 제어어)
    - 데이터베이스에 접근할 수 있는 권한을 제어하는 언어
	grant(권한부여), revoke(권한해제)
    
    4. TCL(Transaction Control Language : 트랜잭션 제어어)
    - 데이터베이스 작업에 단위를 트랜잭션이라 하며, 작업을 데이터베이스에 영구히
      적용하거나 취소하는 언어
      commit(작업완료), rollback(작업취소), savepoint(작업저장)
 
/* 데이터 사용 : USE 데이터베이스명;   */
USE hrdb2019;
SELECT DATABASE();

/*
	테이블의 구조 확인 : DESC
    형식 : DESC 테이블명;
*/
desc employee;  /* 사원은 반드시 하나의 부서에 소속된다. */
desc department;  
desc unit;
desc vacation;

/* 
	단순 조회(R: select) 
   형식 : select [컬럼리스트] from [테이블명];
*/
-- employee 테이블에 있는 사원id, 사원명, 이메일를 조회
select emp_id, emp_name, email from employee;

-- employee 테이블에 있는 모든 컬럼을 조회
select * from employee;

-- department 테이블의 모든 컬럼을 조회
select * from department;

-- employee 테이블 emp_id 컬럼명을 사원번호 로 변경 후 조회
select emp_id as '사원 번호' from employee;

-- employee 테이블의 모든 사원의 연봉, 보너스(연봉10%) 조회
select salary, salary*0.1 as bonus from employee;

-- 현재 날짜를 가져오는 함수에 별칭 사용
select CURDATE() as mdate ;

/* 
	조건별 조회(R: select) 
    형식 : select [컬럼리스트] 
			from [테이블명]
            where 컬럼명 = [조건절];
*/
-- 사원id가 S0007에 해당하는 사원정보를 모두 조회
select * from employee where emp_id = 'S0007';

-- 사원명이 일지매인 사원의 모든 정보를 조회
select * from employee where emp_name = '일지매';

-- 홍길동 사원의 사원아이디, 성별, 폰번호, 이메일, 연봉 조회
select emp_id, gender, phone, email, salary
from employee
where emp_name = '홍길동';

-- 총무부에 속한 모든 사원의 정보를 조회
select * from department;
select * from employee where dept_id = 'GEN';

-- 모든 남자사원의 사원명, 입사일, 폰번호, 연봉 조회
select emp_name, hire_date, phone, salary
from employee
where gender = 'M';

-- NULL은 미지수의 개념으로 이해!! 
-- eng_name이 현재 정의되지 않은 사원들을 모두 조회
select * from employee where eng_name is null;
select * from employee;

-- eng_name이 null이 아닌 사원들을 모두 조회
select * from employee
	where eng_name is not null;

/*
	NULL 값을 다른값으로 대체하는 함수 : ifnull()
    형식 : ifnull(null포함 컬럼명, 변경하는값)
*/    
-- eng_name이 null값을 '홍길동'으로 대체한 후 조회
select ifnull(eng_name, '홍길동') from employee;

-- retire_date가 null인 경우 현재기준 날짜로 대체하여 조회
select ifnull(retire_date, curdate()) as retire_date
from employee;

/**
	중복된 데이터를 배제하고 조회 : distinct
    형식 : select {distinct} 컬럼리스트 from 테이블명
*/
-- 사원테이블에 존재하는 모든 부서번호를 조회
select distinct dept_id from employee;

/**
	데이터 정렬 : order by 
    형식 : select [컬럼리스트]
			from [테이블명]
            where [조건절]
            order by [컬럼명]  ASC / DESC
*/
-- 사원id 기준으로 오름차순 정렬 후 모든 데이터 출력
select *
	from employee
    order by emp_id desc;
    
-- 입사일이 가장 빠른 순서대로 사원들을 모두 조회
select * from employee
order by hire_date;

-- 연봉이 가장 높은 순으로 사원들을 모두 조회
select * from employee order by salary desc;

-- eng_name이 null인 사원들 중 입사일이 가장 빠른순서대로 조회
select * from employee where eng_name is null
order by hire_date;

-- 정보시스템 부서 사원 중 입사일이 가장 빠르고, 급여를 많이 받는
-- 순서로 정렬하여 조회
select * from department;
select * from employee 
	where dept_id='SYS'
    order by hire_date asc, salary desc;

/**
	특정데이터를 검색 : where 조건절 + 비교연산자
    형식 : select [컬럼리스트] from [테이블명] where [조건절 + 비교연산자]  
*/
-- 연봉이 5000 이상인 사원들만 연봉이 높은순으로 조회


-- 2015년 1월 1일 이후 입사자들을 입사일이 빠른 순으로 조회
-- 조회기준 연봉이 null인 직원의 값은 0으로 정의


-- 입사일이 2016년 1월 1일 이후 이고, 연봉이 6000 이상인 사원들을 조회
-- 최근 입사일 기준으로 정렬


-- 입사일이 2016년 1월 1일 이후 이거나, 연봉이 6000 이상인 사원들을 조회
-- 최근 입사일 기준으로 정렬


-- 정보시스템 부서 중 급여가 7000 이상인 사원들만 조회


-- 영업부 직원들의 사원아이디, 사원명, 성별, 입사일, 이메일
-- 연봉, 보너스(연봉의 20%) 조회
-- 연봉이 null인 사원은 기본값을 50으로 정의
-- 보너스가 1000 이상인 사원 조회


-- 범위 조회 - between ~ and
-- 형식 : where [컬럼명] between [시작] and [종료] - [시작] 이상 [종료] 이하
-- 연봉이 6000 이상, 7000 미만인 사원들만 조회



-- 입사년도가 2015년(2015-01-01 ~ 2015-12-31)인 사원들만 조회


-- 정보시스템 부서와 영업부서의 사원들만 조회
-- or 논리연산자 : in (값1, 값2...)
-- 형식 : where [컬럼명] in (값1, 값2...)  


/**
	문자열 검색 : 와일드 문자(%, _) - Like 연산자와 함께 사용
    형식 : where [컬럼명] like '검색문자 + 와일드문자'
*/
-- 사원들 중 김씨 성을 가진 모든 사원 조회


-- 폰번호가 010으로 시작하는 영업부의 모든 사원 조회


-- 이메일주소 두번째 자리에 'a'가 들어가는 사원 조회


-- 이메일 아이디가 4자리인 사원 조회


-- 사원명에 '삼'자가 들어가는 모든 사원 조회


/**
	내장 함수 사용 : 숫자함수, 문자함수, 집계함수, 날짜함수...
    형식 : 컬럼리스트, 조건절
*/
-- 숫자함수
-- 함수 테스트 테이블 : Dual
-- 123, -123 절대값 출력 : abs()


-- 소수점 버리기 : floor(), truncate()


-- 임의의 숫자 생성 : rand()


-- 나머지 연산 : mod()


-- 문자함수
-- 문자열 결합 : concat()


-- 홍길동(S0001) --> emp_name
-- 홍길동(S0001) 사원만 조회

 
-- 문자열 추출 : substring(문자열, 위치, 문자열수)


-- 사원아이디, 사원명, 입사년도, 폰번호, 이메일 조회

 
 -- 2015년도 입사자들 모두 조회

 
 -- 1월에 입사한 사원들 조회

 
 -- 2018년도에 입사한 정보시스템 부서 사원 조회

 
-- 오른쪽, 왼쪽 기준 문자열 추출 : left('문자열',숫자), right('문자열',숫자)

 
-- 2018년도에 입사한 정보시스템 부서 사원 조회

 
 -- 대,소문자 변경 : upper('문자열'), lower('문자열')

 
 -- 검색하는 데이터가 소문자로 전달된 경우 : sys

 
 -- 공백 삭제 : trim('공백포함 문자열')

 
 -- 문자열 포맷

 
 -- 사원아이디, 사원명, 입사년도, 연봉을 3자리로 구분하여 출력


-- 날짜 함수 : curdate(), sysdate(), now()

-- 형변환 함수 : cast(변환하고자하는 데이터 as 변환데이터타입)
-- 			, convert(변환하고자하는 데이터 as 변환데이터타입) 


-- 123456789 숫자를 문자로 변환 후 3자리숫자로 구분

-- 현재 날짜를 가져와서(년,월,일) 문자로 변경, 다시 날짜타입(datetime)으로 변경


-- 현재 날짜를 가져와서(년,월,일,시,분,초) 문자로 변경, 다시 날짜타입(datetime)으로 변경

-- employee 테이블의 입사일이 저장될때 무슨 함수를 사용했을까요?


-- 입력폼에서 '20150101' 문자열 타입으로 전송되어진 경우, 해당일의 입사자를 모두 조회
