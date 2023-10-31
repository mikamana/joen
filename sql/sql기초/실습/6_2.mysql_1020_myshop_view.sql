use myshop2019;
select database();

select * from information_schema.tables where table_schema = 'myshop2019';
select * from customer;
select * from order_header;
select * from product;
select * from category;
select * from order_detail;

select * from customer where customer_id = 'mdpark';
select * from order_header where customer_id = 'mdpark';
-- 박마당 고객이 어떤 상품 주문했는지 조회


select * from order_header oh inner join customer c on oh.customer_id = c.customer_id and customer_name = '박마당';

select count(*)
from (select c.customer_id, c.customer_name,oh.order_id, p.product_name from order_header oh, customer c, order_detail od, product p, category cg, sub_category sc
	where c.customer_id = oh.customer_id
		and oh.order_id = od.order_id
        and od.product_id = p.product_id
        and p.sub_category_id = sc.sub_category_id
        and sc.category_id = cg.category_id
        and c.customer_name = '박마당') a;
        
create view d_nm
as
select * from order_detail od inner join product p on od.product_id = p.product_id;
-- 상품의 카테고리 포함


-- 고객아이디, 고객명, 상품이름, 
select * from mgm_product where customer_name = '최천사';
create view mgm_product
as
select c.customer_id, c.customer_name,oh.order_id, p.product_name, sc.sub_category_name, cg.category_name, e.employee_id, e.employee_name
 from order_header oh, customer c, order_detail od, product p, category cg, sub_category sc, employee e
	where c.customer_id = oh.customer_id
		and oh.order_id = od.order_id
        and od.product_id = p.product_id
        and p.sub_category_id = sc.sub_category_id
        and sc.category_id = cg.category_id
        and oh.employee_id = e.employee_id;
        -- and c.customer_name = '박마당'
-- 주문을 관리하는 사원정보 포함
select * from customer;
select * from information_schema.views where table_name = 'mgm_product';
-- 고객별 상품 주문한 건수
-- over()안에서 alias 사용불가 확인
select row_number() over(order by count(*) desc) as RNO, customer_name,count(*) ORD_COUNT
	from mgm_product 
	group by customer_id, customer_name;
