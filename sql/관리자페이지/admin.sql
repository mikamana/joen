select * from information_schema.tables where table_schema = "myshop2019";
select * from employee;
select customer_id,customer_name,gender,phone,email,city,birth_date,register_date,point from customer;
select * from order_detail;
select * from order_header;
select * from product;
select * from sub_category;
select * from category;
select * from customer;

select * from information_schema.table_constraints where table_name = 'order_detail';
ALTER TABLE `order_header` 
  ADD CONSTRAINT `order_customer_fk` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `order_detail` DROP FOREIGN KEY `order_detail_ibfk_1`;

alter table order_detail add constraint order_detail_product_id_fk foreign key (product_id) references product(product_id) on delete cascade on update cascade;

alter table order_detail drop foreign key order_detail_ibfk_2;

select * from order_header;
select * from order_detail;

select product_name,count(*), sum(line_total) from order_header oh inner join order_detail od on oh.order_id = od.order_id inner join product pd on od.product_id = pd.product_id group by product_name;

select cg.category_name,count(*) as count, sum(line_total) as line_total from category cg inner join sub_category scg on cg.category_id = scg.category_id inner join product pd on scg.sub_category_id = pd.sub_category_id inner join order_detail od on od.product_id = pd.product_id group by cg.category_name;

select customer_name, count(*) as count, sum(line_total) as line_total from customer c inner join order_header oh on c.customer_id = oh.customer_id inner join order_detail od on oh.order_id = od.order_id group by customer_name;

select substring(birth_date,3,2) as bd from customer c inner join order_header oh on c.customer_id = oh.customer_id group by bd having bd = 79;
select substring(birth_date,3,2) as bd from customer c inner join order_header oh on c.customer_id = oh.customer_id group by bd HAVING bd between 70 and 80;
select substring(birth_date,3,2) as birth_date , sum(total_due) from customer c inner join order_header oh on c.customer_id = oh.customer_id where substring(birth_date,3,2) between "70" and "80" group by substring(birth_date,3,2) order by substring(birth_date,3,2);
select substring(birth_date,3,2) as birth_date , sum(total_due) from customer c inner join order_header oh on c.customer_id = oh.customer_id group by substring(birth_date,3,2) order by substring(birth_date,3,2);
select substring(birth_date,3,2) bd from customer c,order_header o where c.customer_id = o.customer_id group by bd having bd between 60 and 62 order by bd asc;

select * from customer;
-- groub by 다음에 사용이 된 컬럼은 그룹화한 함수와 같이 사용가능하다.
select dept_id, sum(salary) sum, avg(salary) avg, max(salary) max , min(salary) min from employee Group by hire_date having substring(hire_date,1,4);

select * from category;
select * from customer;
select * from order_header;
select * from order_detail;
select * from sub_category;
delete from product where product_id = "AD001";

select cg.category_name,count(*) as count, sum(line_total) as line_total from category cg inner join sub_category scg on cg.category_id = scg.category_id inner join product pd on scg.sub_category_id = pd.sub_category_id inner join order_detail od on od.product_id = pd.product_id group by cg.category_name;




