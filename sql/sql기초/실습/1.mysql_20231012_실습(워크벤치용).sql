/* 데이터 사용 : USE 데이터베이스명;   */
USE hrdb2019;
SELECT DATABASE();

-- employee 테이블 구조 확인

-- department 테이블 구조 확인

-- employee 테이블에 있는 사원id, 사원명, 이메일를 조회

-- employee 테이블에 있는 모든 컬럼을 조회

-- department 테이블의 모든 컬럼을 조회

-- employee 테이블 emp_id 컬럼명을 사원번호 로 변경 후 조회
select emp_id as 사원번호 from employee ;
-- employee 테이블의 모든 사원의 연봉, 보너스(연봉10%) 조회 > floor로 소수점 버리기
select salary, ifnull(floor(salary * 0.1), 50) as bonus from employee;
-- 현재 날짜를 가져오는 함수에 별칭 사용
select curdate() as date;
-- 사원id가 S0007에 해당하는 사원정보를 모두 조회
select * from employee where emp_id = "S0007";
-- 사원명이 일지매인 사원의 모든 정보를 조회
select * from employee where emp_name = "일지매";
-- 홍길동 사원의 사원아이디, 성별, 폰번호, 이메일, 연봉 조회
select emp_id, gender, phone, email, salary from employee;
-- 총무부에 속한 모든 사원의 정보를 조회
select * from employee e inner join department d on e.dept_id = d.dept_id where dept_name = "총무";
-- 모든 남자사원의 사원명, 입사일, 폰번호, 연봉 조회
select emp_name, hire_date, phone, salary from employee where gender = "M";
-- NULL은 미지수의 개념으로 이해!! 
-- eng_name이 현재 정의되지 않은 사원들을 모두 조회
select * from employee where eng_name is null;
-- eng_name이 null이 아닌 사원들을 모두 조회
select * from employee where eng_name is not null;
/*
	NULL 값을 다른값으로 대체하는 함수 : ifnull()
    형식 : ifnull(null포함 컬럼명, 변경하는값)
*/    
-- eng_name이 null값을 '홍길동'으로 대체한 후 조회
select ifnull(eng_name,'홍길동') from employee;
-- retire_date가 null인 경우 현재기준 날짜로 대체하여 조회
select ifnull(retire_date,curdate()) from employee;
-- 사원테이블에 존재하는 모든 부서번호를 중복을 배제하고 조회
select distinct emp_id from employee;
-- 사원id 기준으로 오름차순 정렬 후 모든 데이터 출력
select * from employee order by emp_id asc;
-- 입사일이 가장 빠른 순서대로 사원들을 모두 조회
select * from employee order by hire_date desc;
-- 연봉이 가장 높은 순으로 사원들을 모두 조회
select * from employee order by salary desc;
-- eng_name이 null인 사원들 중 입사일이 가장 빠른순서대로 조회
select * from employee where eng_name is null order by hire_date desc;
-- 정보시스템 부서 사원 중 입사일이 가장 빠르고, 급여를 많이 받는
-- 순서로 정렬하여 조회
select * from employee where dept_id = 'sys' order by hire_date asc, salary desc; 
-- 연봉이 5000 이상인 사원들만 연봉이 높은순으로 조회
select * from employee where salary >= 5000 order by salary desc;
-- 2015년 1월 1일 이후 입사자들을 입사일이 빠른 순으로 조회
select * from employee where hire_date >= "2015-01-01" order by hire_date desc;
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

-- 입사년도가 2015년(2015-01-01 ~ 2015-12-31)인 사원들만 조회 : between and 사용

-- 정보시스템 부서와 영업부서의 사원들만 조회 : in 사용

-- 사원들 중 김씨 성을 가진 모든 사원 조회

-- 폰번호가 010으로 시작하는 영업부의 모든 사원 조회

-- 이메일주소 두번째 자리에 'a'가 들어가는 사원 조회

-- 이메일 아이디가 4자리인 사원 조회

-- 사원명에 '삼'자가 들어가는 모든 사원 조회

-- 3843.384349534 값의 소수점 버리고 정수만 추출
	select floor(3843.384349534);
-- 3843.384349534 값의 소수점 3자리와 정수 추출
	select truncate(3843.384349534,3);
-- 정수 5자리 숫자를 임의로 생성하고, 3자리씩 구분하여 출력, 이때 소수점 자릿수는 없음
	select format(floor(rand() * 100000),0);
-- 사원아이디가 짝수인 사원들만 조회 : 사원아이디 S0001의 숫자만 추출하여 나머지 함수를 적용
	select * from employee where mod(substring(emp_id,2,5),2) = 0;
-- 사원이름과 사원아이디를 결합하여 홍길동(S0001) 형식으로 출력
	select concat(emp_name,'(',emp_id,')') from employee;
-- 사원이름과 사원아이디를 결합하여 [홍길동(S0001)], 연봉 컬럼을 [8,500만원(보너스10%)] 형식으로 출력 출력
	select concat(emp_name,'(',emp_id,')'), concat(salary,'(',salary*0.1,')') as bonus from employee;
-- 문자열 추출 : substring(문자열, 위치, 문자열수)
-- 사원아이디, 사원명, 입사년도, 폰번호, 이메일 조회
	
 -- 2015년도 입사자들 모두 조회
  
 -- 1월에 입사한 사원들 조회
 
 -- 2018년도에 입사한 정보시스템 부서 사원 조회
 
-- 오른쪽, 왼쪽 기준 문자열 추출 : left('문자열',숫자), right('문자열',숫자)
 
-- 2018년도에 입사한 정보시스템 부서 사원 조회
 
 -- 대,소문자 변경 : upper('문자열'), lower('문자열')
 
 -- 검색하는 데이터가 소문자로 전달된 경우 : sys
 
 -- '             대 한 민 국           ' 문자열의 앞,뒤 공백 삭제
	select trim('   대한민국   ');
 -- '&&&&&&&&&&&&&&&&&&&&&&&&&대 한 민 국           ' 문자열의 앞에 있는 & 기호 삭제
	select trim(leading '&' from '&&&&&대한민국');
  -- '대 한 민 국$$$$$$$$$$$$$$$$$$$$$$$$' 문자열의 앞에 있는 $ 기호 삭제
	select trim(trailing '$' from '대한민국$$$$$$$$$$');
 -- 숫자 452147895412 문자열 포맷을 사용하여 3자리로 구분하고, 소수점 자리수 2자리까지 출력
	select format(452147895412,2);
 -- 사원아이디, 사원명, 입사년도, 연봉을 3자리로 구분하여 출력
 

-- 날짜 함수 : curdate(), sysdate(), now()

-- 123456789 숫자를 문자로 변환 후 3자리숫자로 구분

-- 현재 날짜를 가져와서(년,월,일) 문자로 변경, 다시 날짜타입(datetime)으로 변경

-- 현재 날짜를 가져와서(년,월,일,시,분,초) 문자로 변경, 다시 날짜타입(datetime)으로 변경

-- employee 테이블의 입사일이 저장될때 무슨 함수를 사용했을까요?

-- 입력폼에서 '20150101' 문자열 타입으로 전송되어진 경우, 해당일의 입사자를 모두 조회









