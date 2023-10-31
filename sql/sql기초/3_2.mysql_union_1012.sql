/*
	테이블 합치기 : UNION(DISTINCT), UNION ALL
    형식 : SELECT 쿼리
		  UNION / UNION ALL
          SELECT 쿼리
	- 쿼리 실행시에만 하나의 테이블로 출력됨 (물리적인 테이블 생성X)
    - 하나로 합쳐지는 컬럼명과 타입이 동일해야함
*/

-- 영업부, 정보시스템 부서의 사원아이디, 사원명, 부서아이디, 입사일을 출력
select emp_id, emp_name, dept_id, hire_date, concat('id : ', dept_id) did from employee where dept_id = 'sys' 
union
select emp_id, emp_name, dept_id, hire_date,concat('id : ', dept_id) did from employee where dept_id = 'mkt';

select emp_id, emp_name, dept_id, hire_date, concat('id : ', dept_id) did from employee where dept_id = 'sys' 
union all
select emp_id, emp_name, dept_id, hire_date,concat('id : ', dept_id) did from employee where dept_id = 'mkt'
union all
select emp_id, emp_name, dept_id, hire_date,concat('id : ', dept_id) did from employee where dept_id = 'sys';
-- union all 보다 union을 사용했을 때 성능이 더 떨어진다.
-- 실무에서는 union이나 union all의 사용을 권장하지 않는다.

-- 서브쿼리(스칼라 서브쿼리/인라인뷰/서브쿼리) 맛보기
-- select 컬럼리스트 from 테이블명 where 조건절;
-- 		  (스칼라 서브쿼리) (인라인뷰)    (서브쿼리)
-- 홍길동 사원이 속한 부서의 이름을 조회
select * from department where dept_id = (select dept_id from employee where emp_name = '홍길동');
select dept_id from employee where emp_name = '홍길동';
select dept_id from employee union select dept_id from department;