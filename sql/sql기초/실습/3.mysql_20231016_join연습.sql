
USE myshop2019;
select database();
select * from information_schema.tables where table_schema = 'myshop2019';
-- 테이블 종류 조회, 그 중 'myshop2019' 안에 있는 테이블만 조회

/*

	테이블 조인
    EER Diagram 보면서 하기
    
*/

-- 필요한 데이터

/*

	myshop2019 테이블 안에서 필요한 컬럼을 조건에 맞게 조회
	하나의 테이블에서 조회가 어렵거나 합쳐야 하는 경우 cross join이나 inner join을 사용해서 조회
    EER Diagram 활용 : PK(기본값)값과 FK(참조값)값을 확인하여 EXCUTE 비교하면서 조회, cost가 낮으면 낮을 수록 좋음
    
*/
	select * from category;
    desc category;
    select * from customer;
    desc customer;
    select * from employee;
    desc employee;
    select * from order_detail;
    desc order_detail;
    select * from order_detail2016;
    desc order_detail2016;
    select * from order_detail2017;
    desc order_detail2017;
    select * from order_header;
    desc order_header;
    select * from order_header2016;
    desc order_header2016;
    select * from order_header2017;
    desc order_header2017;
    select * from product;
    desc product;
    select * from sub_category;
    desc sub_category;
-- Q01) 전체금액이 8,500,000 이상인 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 전체금액을 조회하세요.
	select order_id 주문번호, customer_id 고객아이디, employee_id 담당직원, order_date 주문일시, total_due 총주문금액 from order_header where total_due >= 8500000;
-- Q02) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름도 같이 조회되게 수정하세요.
	select order_id 주문번호, o.customer_id 고객아이디, employee_id 담당직원, order_date 주문일시 , total_due 총주문금액,customer_name 고객이름 from order_header o inner join customer c on c.customer_id = o.customer_id where total_due >= 8500000 ;
    -- customer --> customer_id PK(Primary)값 , order_header --> customer_id FK(reperence(참조))값 
-- Q03) Q01 쿼리를 복사해 붙여 넣은 후 직원이름도 같이 조회되게 수정하세요.
	select order_id 주문번호, customer_id 고객아이디, e.employee_id 담당직원, employee_name 직원이름,  order_date 주문일시, total_due 총주문금액 from order_header o inner join employee e on e.employee_id = o.employee_id where total_due >= 8500000 ;
-- Q04) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름, 직원이름도 같이 조회되게 수정하세요.
	select order_id 주문번호, customer_name 고객이름, c.customer_id 고객아이디, e.employee_id 담당직원, employee_name 직원이름,  order_date 주문일시, total_due 총주문금액 from order_header o inner join employee e inner join customer c on e.employee_id = o.employee_id and c.customer_id = o.customer_id and total_due >= 8500000 ;
-- Q05) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 고객만 조회되게 수정하세요.
	select order_id 주문번호, c.customer_id 고객아이디, employee_id 담당직원, order_date 주문일시, total_due 총주문금액, c.city from order_header o inner join customer c on c.customer_id = o.customer_id and c.city = '서울' and total_due >= 8500000;
-- Q06) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 '남자' 고객만 조회되게 수정하세요.
	select order_id 주문번호, c.customer_id 고객아이디, employee_id 담당직원, order_date 주문일시, total_due 총주문금액, c.city 지역, c.gender 성별 from order_header o inner join customer c on c.customer_id = o.customer_id and c.city = '서울' and total_due >= 8500000 and c.gender = 'F';
-- Q07) 주문수량이 30개 이상인 주문의 주문번호, 상품코드, 주문수량, 단가, 지불금액을 조회하세요.
		select count(*)  from order_header o join product p ;
        select count(*)  from order_header o inner join order_detail d inner join product p on o.order_id = d.order_id and p.product_id = d.product_id;
		select d.order_qty 주문수량, d.unit_price 단가,  d.product_id 상품코드, o.order_id 주문번호 , o.total_due 지불금액   from order_detail d inner join order_header o inner join product p on o.order_id = d.order_id and d.product_id = p.product_id and order_qty >= 30;
-- Q08) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 상품이름도 같이 조회되도록 수정하세요.
	select d.order_qty 주문수량, d.unit_price 단가, product_name 상품이름, d.product_id 상품코드, o.order_id 주문번호 , o.total_due 지불금액   from order_detail d inner join order_header o inner join product p on o.order_id = d.order_id and d.product_id = p.product_id and order_qty >= 30;
-- Q09) 상품코드, 상품이름, 소분류아이디를 조회하세요.
	select p.sub_category_id 소분류아이디 , product_id 상품코드, product_name 상품이름 from product p inner join sub_category sc on p.sub_category_id = sc.sub_category_id ;
-- Q10) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 소분류이름, 대분류아이디가 조회되게 수정하세요.
	select p.sub_category_id 소분류아이디 , sc.sub_category_name 소분류이름 ,product_id 상품코드, product_name 상품이름, c.category_id 대분류 from product p inner join sub_category sc inner join category c on p.sub_category_id = sc.sub_category_id and c.category_id = sc.category_id;
-- Q11) 다정한 사원이 2019년에 주문한 상품명을 모두 출력해주세요.
	select * from employee where employee_name = '다정한';
    select * from order_header where employee_id = 'D0006';
	-- order_header 안에서 employee_id 가 D0006인 다정한 사원이 주문한 상품명을 product 테이블 안에서 찾아서 출력해야함
    -- 1. employee_id 가 다정한사원이라는 것을 알기 위해서 employee 와 order_header 를 조인해야함 D0006
    -- 2. product_name(상품명)을 출력하기 위해 product를 조인해야함
    select o.order_id, product_name from order_header o inner join employee e inner join order_detail d inner join product p on o.employee_id = e.employee_id and substring(order_date,1,4) = '2019' and o.order_id = d.order_id and p.product_id = d.product_id and employee_name = '다정한';
-- Q12) 청소기를 구입한 고객아이디, 사원번호, 주문번호, 주문일시를 조회하세요.
	-- product에서 청소기상품코드를 확인 후에 order_detail 에서 product_id 조인, order_detail과 order_header 조인 후 고객아이디, 주문일시, 사원번호 출력
    select h.order_id, h.customer_id, h.employee_id, h.order_date, p.product_name from order_header h inner join order_detail d inner join product p on h.order_id = d.order_id and p.product_id = d.product_id and p.product_id in('ED007','ED008','ED009') ;
    select h.order_id, h.customer_id, h.employee_id, h.order_date, p.product_name from product p  inner join order_detail d inner join order_header h on h.order_id = d.order_id and p.product_id = d.product_id and p.product_id in('ED007','ED008','ED009') ; 
    

    