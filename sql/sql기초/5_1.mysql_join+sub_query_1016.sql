
-- 서브쿼리 : 메인쿼리(출력되는 컬럼리스트)에 서브쿼리를 추가하여 실행하는 형식
-- 서브쿼리(스칼라 서브쿼리/인라인뷰/서브쿼리)
-- select 컬럼리스트       from 테이블명 where 조건절
--        (스칼라 서브쿼리)     (인라인뷰)      (서브쿼리)
-- 두개 이상의 테이블일 때 사용

-- 홍길동 사원이 속한 부서의 이름을 출력해주세요
select dept_name from department where dept_id = (select dept_id from employee where emp_name='홍길동');

-- 홍길동 사원이 사용한 휴가의 내역을 조회
select * from vacation v where emp_id = (select emp_id from employee where emp_name = '홍길동');

select * from vacation;
select * from unit;
select * from department;
-- 제 3본부에 속해있는 부서들을 조회
select unit_id 본부코드 , dept_id 부서코드, dept_name 부서 from department d where unit_id = (select unit_id from unit where unit_name = '제3본부');

-- 제 3본부에 속해있는 모든 사원들을 조회
select * from employee where dept_id in (select dept_id from department where unit_id = (select unit_id from unit where unit_name = '제3본부'));
-- 단일행 서브쿼리 : 서브쿼리를 실행한 결과가 1행 출력되는 경우 -- 단일행 서브쿼리일 때는 = 로 비교
-- 다중행 서브쿼리 : 서브쿼리를 실행한 결과가 2행 이상 출력되는 경우 -- 다중행 서브쿼리일 때는 in이나 between 등으로 비교


-- 가장 먼저 입사한 사원의 정보를 출력
select * from employee where hire_date = (select min(hire_date) from employee e);

-- 휴가를 간 적이 있는 정보시스템 부서의 사원들을 출력
select * from vacation;
select * from employee;
select * from employee e inner join department d inner join vacation v on e.dept_id = d.dept_id and v.emp_id = e.emp_id and dept_name = '정보시스템';
select * from employee e where dept_id = (select dept_id from department where dept_name = '정보시스템') and emp_id in(select DISTINCT emp_id from vacation);
-- Error Code: 1242. Subquery returns more than 1 row	0.000 sec : 다중행 출력 에러

-- 휴가를 간 적이 없는 정보시스템 부서의 사원들을 출력
select * from employee e where dept_id = (select dept_id from department where dept_name = '정보시스템') and emp_id not in(select DISTINCT emp_id from vacation);
-- 사원별 휴가사용 일수를 그룹핑하여, 사원아이디, 사원명, 입사일, 연봉, 휴가사용일수를 조회해주세요
-- 사원별로 group by
-- vacation에 있는 duration 값 알아야함 > inner join사용 
-- sum 함수 사용하여 휴가사용일수를 합해야함



select * from vacation;
-- 휴가사용 일수를 구하는 인라인뷰와 사원테이블을 조인
select count(*) from 
(select e.emp_id, e.emp_name,e.hire_date,e.salary,v.duration
	from employee e inner join (select emp_id, sum(duration) as duration from vacation group by emp_id) 
		as v on e.emp_id = v.emp_id) ev; -- 14

-- 휴가 사용일수와 사원정보, 단 모든 사원의 정보 조회
select e.emp_id, e.emp_name,e.hire_date,ifnull(e.salary,'0') salary,ifnull(v.duration,'0') as duration
	from employee e left outer join (select emp_id, sum(duration) as duration from vacation group by emp_id) as v 
		on e.emp_id = v.emp_id;
        
select emp_id, sum(duration) as duration from vacation group by emp_id;
-- 사원별 휴가내역의 내용과 어떤 사원이 그 휴가를 썼는지

select count(*) from employee; -- 20

-- myshop 

use myshop2019;
select database();

select * from category;
select * from sub_category;
select * from product;

-- category, sub_category, product inner join
select count(*) from category;
select count(*) from sub_category;
select count(*) from product;
-- 카테고리별 상품명을 조회
select c.category_name, c.category_id,sc.sub_category_id , p.product_name from category c inner join sub_category sc inner join product p on c.category_id = sc.category_id and sc.sub_category_id = p.sub_category_id;

-- 2018년 기준 상품별 주문건수 조회 - 주문날짜, 상품명, 총주문건수
select * from order_header;
select * from order_detail;
select left(oh.order_date,4) order_date , product_id 상품코드, sum(order_qty) 주문건수 from order_header oh inner join order_detail od on oh.order_id = od.order_id group by left(oh.order_date,4),product_id ; 


select row_number() over(order by order_date) as number , order_date, product_name, order_qty ;

select row_number() over(order by 주문년도) as number , 주문년도, 상품이름, 주문건수 from (select left(oh.order_date,4) 주문년도, p.product_name 상품이름, sum(od.order_qty) 주문건수 
	from order_detail od, order_header oh, product p 
    where od.order_id = oh.order_id and od.product_id = p.product_id and left(order_date,4) = '2018' group by left(oh.order_date,4), p.product_name) a;



select left(oh.order_date,4) 주문년도, p.product_name 상품이름, sum(od.order_qty) 주문건수 
	from order_detail od, order_header oh, product p 
    where od.order_id = oh.order_id and od.product_id = p.product_id and left(order_date,4) = '2018' group by left(oh.order_date,4), p.product_name;

-- 행번호 생성 함수
select row_number() over(order by customer_id) as number, customer_name from customer;
-- row_number 는 index를 차례대로 출력할 때 사용
-- over()는 누구를 기준으로 정할 것인지 설정 () 안에는 order by로 pk값을 정렬하는게 가장 좋음
select * from product;
select count(*) 
-- 정규화과정 > 테이블 안 데이터를 분리하여 저장하는 작업 > 스토리지를 아끼기 위해 > 
-- 반정규화 > 정규화된걸 다시 합치는 작업