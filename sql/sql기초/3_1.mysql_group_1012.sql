
/*
	내장 함수 사용 : 숫자함수, 문자함수, 집계함수, 날짜함수...
    형식 : 컬럼리스트, 조건절 
*/
-- 함수 테스트 테이블 : Dual
-- 123, -123 절대값 출력 : abs() 함수 사용

select abs(-123) as '절대값출력', abs(123) as '절대값출력' from dual;
-- MYSQL에서는 from dual 생략 가능
select abs(-123) as '절대값출력1', abs(123) as '절대값출력2';

-- 소수점 버리기
select floor(1.23) as '소수점버리기';
-- 자리수 지정해서 소수점 버리기 
select truncate(123.456,0) as '자리수 지정 후 소수점버리기', truncate(123.456,2) as '자릿수 지정해서 소수점버리기';
-- 임의의 숫자 1~3자리수 생성 : rand(), 자리수 지정해서 소수점버리기
select truncate(rand() * 1000,2) as '랜덤숫자 소숫점2자리까지';
-- 랜덤한 숫자 1~3자리수 뽑기
select floor(rand() * 1000) as '랜덤숫자';
-- 나머지 연산 : mod()
select mod(100,6) as '나머지값';
-- 랜덤한 숫자 짝수
select mod(floor(rand()*1000),2) as '짝수값'; 
-- 랜덤한 숫자 중 짝수구하기
-- select truncate(rand(mod(rand(),2))*1000, 1);
-- 문자함수
-- 문자열 결합 : concat()
select concat('my','s','q','l') as '문자열합치기';
-- 홍길동(S001)
select concat(emp_name,'(',emp_id,')') as emp_name, hire_date, salary from employee;
-- 홍길동 사원만 조회
select concat(emp_name,'(',emp_id,')') as emp_name, hire_date, salary from employee where concat(emp_name,'(',emp_id,')') = '홍길동(S0001)';
-- 문자열 추출 : substring(문자열, 위치, 문자열수)
select substring(emp_name, 1, 2) from employee;
select substring('대한민국 홍길동', 6, 3);

-- 2014년에 입사한 모든 사원의 사원아이디, 사원명, 입사년도,입사월,입사일, 폰번호, 이메일 조회
select emp_id, emp_name,substring(hire_date,1,4) as year,substring(hire_date,6,2) as mm,substring(hire_date,9,2) as dd,phone,email from employee where left(hire_date,4) >= '2014';
-- 2015년에 입사자들 모두 조회
select * from employee where substring(hire_date, 1, 4) = '2015';
-- 1월에 입사한 사원들 조회
select * from employee where substring(hire_date, 6,2) = '01';
-- 2018년도에 입사한 정보시스템 부서 사원 조회
select * from employee where substring(hire_date,1,4) = '2018' && dept_id = 'sys'; 
-- 오른쪽, 왼쪽 기준 문자열 추출 : left('문자열',숫자), right('문자열')
select left(emp_name,2) from employee;
-- 대,소문자 변경 : upper('문자열'), lower('문자열')
select upper('abc'), lower('QWE');
-- 
select * from employee where emp_id = 's0001';
-- MySQL에서만 s0001 대문자로 자동 변경해주고 다른 툴에서는 타입을 명확히 정해주어야함.

-- 검색하는 데이터가 소문자로 전달된 경우 : sys
select * from employee where dept_id = upper('sys');

-- 공백 삭제 : trim('공백포함 문자열')
select trim('   가나다라마바사');
-- 앞에있는 문자들 중 '!' 삭제하는 방법
select trim(leading '!' from '!!!!!대한민국   ');
-- 뒤에있는 문자들 중 '!' 삭제하는 방법
select trim(trailing '!' from '!!대한민국!!!!!!!') as '뒤문자 !제거';
-- 문자열 포맷
select format(12345678,1);

-- 연봉을 3자리로 구분하여 출력
select emp_id, emp_name, left(hire_date,4) as hire_date, format(salary,0) as salary from employee;
select emp_id, emp_name, concat(left(hire_date,4),'년도') as hire_date, concat(format(salary,0),'만원') as salary from employee;

-- 날짜 함수 : curdate() = 년월일만 반환, sysdate() = 년월일시분초 반환, now() = 년월일시분초 반환 insert할 때 많이 사용됌 (장바구니에 넣은 날짜, 게시판에 등록한 날짜 등)
select curdate(); -- 년월일 반환;
select sysdate();-- 년월일시분초 반환, oracle에서는 sysdate()만 사용;
select now(); -- 년월일시분초 반환;
select sysdate(), sleep(2), sysdate();
-- sysdate()는 실행되는 기준이 함수 기준이다.
select now(), sleep(2), now();
-- now()는 실행되는 기준이 쿼리 기준이다.(한쿼리에 두개의 now가 같이 있기때문에 같은 초가 나옴)

-- 형변환 함수 : cast(변환하고자 하는 데이터 as 변환데이터타입), convert()
-- MySQL에서는 형변환을 하지않아도 자동으로 형변환이 되어버림
select cast(20231012 as char); -- 숫자 --> 문자 , 숫자를 문자열로 바꾸는 키워드 char
select cast(20231012 as date); -- 숫자 --> 날짜 , 숫자를 날짜타입으로 바꾸는 키워드 date
select cast('20231012' as date); -- 문자 --> 날짜 , 문자를 날짜타입으로 바꾸는 키워드 date

-- 123456789 숫자를 문자로 변환 후 3자리 숫자로 구분하기
select format(cast(123456789 as char),0);
select cast(format(123456789,0) as char);
select format(123456789,0);

-- 현재 날짜를 가져와서(년,월,일) 문자로 변경, 다시 날짜타입(datetime)으로 바꿔주기
select  cast(cast(now() as char) as datetime);

-- employee 테이블의 입사일이 저장될 때 무슨 함수를 사용했을까
select emp_name, cast(hire_date as datetime) from employee;

-- 입력폼에서 '20150101' 문자열 타입으로 전송되어진 경우, 해당일의 입사자를 모두 조회
select * from employee where hire_date = cast('20150101' as date);
-- MySQL에서는 자동으로 형변환이 돼서 select * from employee where hire_date = '20150101'; 이렇게 줄여서 사용 가능

desc employee;

/*

	그룹(집계)함수
    1. count(), sum(), avg(), max(), min()...
	2. Group by - 그룹 함수가 적용되기 전 그룹화하는 작업 기준
    3. Having - 그룹함수에 적용하는 조건절
	
*/

-- 1. 그룹함수 : 형식 - 컬럼리스트가 위치하는 곳에 함수 호출
-- null인 값은 그룹함수에서 제외된다.
select * from employee;
select count(*) from employee; -- 20
select count(salary) from employee; -- 19
-- 많은 양의 데이터를 확인할 때 count부터 확인

select emp_name, count(ifnull(salary, 500)) as salary from employee where salary is null;
select count(ifnull(salary, 500)) from employee;
select count(emp_id) from employee; -- 전체 데이터 기준 : *, 기본키컬럼(PK) : 비어있으면 안되고 중복된 데이터가 들어갈 수 없다.

-- sum(숫자데이터컬럼)
-- 컬럼의 데이터가 숫자인 경우, 합계를 내고싶은 경우
-- 총급여를 출력, 3자리로 구분, '만원';
select concat(format(sum(salary),0),'만원') as sum from employee;

-- avg(숫자데이터 컬럼)
-- 평균 급여를 출력, 3자리 구분, '만원' 단위 추가
-- 단, 소수점이 있는 경우 모두 절삭
-- 총급여, 평균급여 출력
select concat(format(floor(avg(salary)),0), '만원') as avg, concat(format(sum(salary),0),'만원') as sum from employee;

-- 총급여, 평균급여, 최대연봉, 최저연봉
select sum(salary) sum, avg(salary) avg, max(salary) max , min(salary) min from employee;

-- 가장 빠른 입사일
select min(hire_date),max(hire_date) from employee;
SELECT CAST(TO_CHAR(NOW(), 'YYYYMMDD') AS INTEGER) AS numeric_date;

-- 부서별 총연봉, 평균연봉, 최대연봉, 최저연봉
select dept_id, sum(salary) sum, avg(salary) avg, max(salary) max , min(salary) min from employee Group by dept_id having dept_id = 'sys' order by dept_id ;
select dept_id, sum(salary) sum, avg(salary) avg, max(salary) max , min(salary) min from employee Group by dept_id; -- group by 기준 컬럼순으로 내부 정렬이 진행된다.
-- order by dept_id ;
-- groub by 다음에 사용이 된 컬럼은 그룹화한 함수와 같이 사용가능하다.
select dept_id, sum(salary) sum, avg(salary) avg, max(salary) max , min(salary) min from employee Group by hire_date having substring(hire_date,1,4);


-- 입사년도별 총연봉, 평균연봉, 최대연봉, 최저연봉
select substring(hire_date,1,4) as hire_date, dept_id, count(*) , concat(format(sum(salary),0),'만원') sum, concat(format(floor(avg(salary)),0),'만원') avg, concat(format(max(salary),0),'만원') max , concat(format(min(salary),0),'만원') min from employee Group by substring(hire_date,1,4), dept_id;
-- group by에 추가가 되어지지않은 일반 컬럼은 그룹함수와 함께 사용이 불가하다.


select * from department inner join employee;

select substring(hire_date,1,4) as hire_date, dept_id, count(*) , concat(format(sum(salary),0),'만원') sum, concat(format(floor(avg(salary)),0),'만원') avg, concat(format(max(salary),0),'만원') max , concat(format(min(salary),0),'만원') min from employee  Group by substring(hire_date,1,4), dept_id;

-- 입사월별 사원수, 총연봉, 평균연봉, 최대연봉, 최저연봉
select concat(substring(hire_date, 6,2),'월') as 입사월 , dept_id as 부서, concat(count(*),'명') as 사원수, concat(format(sum(salary),0),'만원') as 총연봉, concat(format(floor(avg(salary)),0),'만원') 평균연봉, concat(format(max(salary),0),'만원') 최대연봉 , concat(format(min(salary),0),'만원') 최저연봉 from employee group by concat(substring(hire_date, 6,2),'월'), dept_id order by concat(substring(hire_date, 6,2),'월') asc;

-- 부서별 사원수가 2명인 부서만 출력
select dept_id, count(*) as 사원수 from employee group by dept_id having 사원수 = '2';
-- having 절에서는 res(as다음에 나오는 대체값)가 적용이 된다.

-- 입사년도별 평균급여가 5000이상인 해당년도만 출력
select concat(left(hire_date,4),'년도') as 입사년도, concat(floor(avg(salary)),'만원') 평균급여 from employee group by 입사년도 having 평균급여 >= 5000;

-- 부서별 최고급여가 6000 이상 7000 미만인 부서 출력
select dept_id as 부서, concat(max(salary),'만원') as 연봉 from employee group by 부서 having 연봉 between 6000 and 6999;
-- format을 사용하면 문자열로 형변환이 되는건가?

-- rollup 함수를 사용하여 총합계, 소계를 출력
-- 부서별 총합계를 출력, 3자리로 구분
select dept_id, format(sum(salary),0) from employee where salary is not null group by dept_id   with rollup;

-- 년도별, 각 부서의 사원수와 총연봉을 출력
select concat(left(hire_date,4),'년도') as 입사년도, dept_id as 부서, count(*) as 사원수 , concat(format(sum(salary),0),'만원') as 총연봉 from employee where salary is not null group by 입사년도, 부서 with rollup;   
-- where절은 그룹핑에 상관없이 원소스에 대한 것

-- 부서별, 사원수(성별구분)를 출력
select dept_id as 부서, gender,count(*) from employee  group by dept_id, gender with rollup;

-- 부서별 총연봉 출력
select if(grouping(dept_id),'총합계', ifnull(dept_id,'-')) as 부서, concat(format(sum(salary),0),'만원') as 총합계 from employee where salary is not null group by dept_id with rollup ;
-- 컬럼리스트에 함수가 들어가는 경우는 메모리 효율성이 떨어져 많이 사용하지않는다.

select * from employee;