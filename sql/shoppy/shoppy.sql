-- shoppy로 시작하는 모든 테이블 조회
select * from information_schema.tables where table_name like "shoppy%";

-- shoppy_products : 상품테이블
-- pid(제품아이디),name(상품명),image,price,info,pdate(등록날짜)

drop table shoppy_products;
select * from oh_review;
create table shoppy_member(
	id varchar(20) primary key,
	name varchar(30) not null,
    pass varchar(200) not null,
    phone varchar(40),
    mdate datetime
);

insert into shoppy_member(id,name,pass,phone,mdate) value(?,?,?,?,sysdate());
drop table shoppy_member;

select * from shoppy_member;
insert into shoppy_member(id,name,pass,phone,mdate) value("try","김","2345","1234",curdate());

select count(pass) as cnt, ANY_VALUE(pass) as pass from shoppy_member where id='test';
-- 로그인을 진행할 때는 어떤 DB이든지 null로 체크보다는 카운트 함수를 써서 1, 0 으로 체크하는 것이 좋다.
-- 워크벤치에서는 버전에 맞춰서 결과가 나오게끔 해줘서 오류가 나지 않는다.
-- 

select * from shoppy_products;

drop table shoppy_products;

insert into shoppy_products(name,image,price,deli_price,info,pdate) value("꽈배기니트","7.webp","28000","2500","포근한 느낌의 디자인",curdate());

delete from shoppy_cart where cid = 4;

select * from shoppy_cart;

insert into shoppy_member(name,id,pass,phone,mdate) value("3","4","5","6",sysdate());

-- shoppy_cart 장바구니 테이블 생성 > 상태정보가 들어감 
-- 어떤 회원이 어떤 상품을 장바구니에 추가했는지의 상태정보만 저장
-- test 테스트 서울강남 01012345678 원피스 150 상세정보 상품등록날짜 3개 S사이즈
-- ---------회원정보테이블---------------- 상품정보테이블 ----------------
-- 회원아이디(pk), 상품아이디(pk), 수량, 사이즈, 장바구니등록 날짜 
-- 데이터의 중복을 최소화
-- 컬럼리스트 : cid(pk), qty(수량), size(사이즈), id
-- cdate  : 장바구니 등록날짜
select * from information_schema.tables ;

create table shoppy_cart(

			cid int auto_increment primary key,
            qty int,
            size varChar(10),
			id varchar(20) not null,
            pid int not null,
            cdate datetime
            
);

drop table shoppy_cart;
drop table shoppy_order;
select * from shoppy_cart;
select * from shoppy_member;
select * from shoppy_products;
select * from shoppy_order;

select rno,image,name,price,qty,size,cnt,id
from 
(select 
	row_number() over (order by sc.cdate) as rno,
    cid,
    qty,
    size,
    substring(cdate,1,10) as cdate,
    price,
    deli_price as deli,
    image,
    sc.id,
    sp.name,
    sp.info,
    (select count(*) as cnt from shoppy_cart where id="try226") cnt
from shoppy_cart sc 
inner join shoppy_products sp, shoppy_member sm 
where sc.pid = sp.pid
and sm.id = sc.id and sc.id="try226") cartList
where rno between 1 and 3;

select 
	row_number() over (order by sc.cdate) as rno,
    cid,
    qty,
    size,
    substring(cdate,1,10) as cdate,
    price,
    deli_price as deli,
    image,
    sc.id,
    sp.name,
    sp.info
from shoppy_cart sc   
inner join shoppy_products sp, shoppy_member sm 
where sc.pid = sp.pid and sm.id = sc.id and sc.id="try226";

select * from shoppy_cart;
select * from shoppy_products;




select row_number() over (order by qty) as rno, sp.image,sp.name,sp.price,sc.qty,sc.size,sp.price*sc.qty as tprice from shoppy_cart sc inner join shoppy_products sp inner join shoppy_member sm on sc.pid = sp.pid and sm.id = sc.id;

-- 상품명,상품가격,수량,사이즈,총 가격
delete from shoppy_products where pid=6;

select * from shoppy_cart where id="try226" and cid="";

-- 주문테이블 : 주문id(pk), 회원아이디, 상품아이디, 주문날짜,옵션(사이즈등), 수량,총 주문금액  *장바구니 내역 삭제* 

create table shoppy_order(
		
        oid int auto_increment primary key,
        id varchar(50) not null,
        pid int not null,
        size varchar(10) not null,
        qty int not null,
        totprice double not null,
        odate datetime
        
        
);
select so.id, so.oid, so.pid, so.size, so.qty, so.totprice, so.odate, sp.name, sp.image, sp.deli_price from shoppy_order so inner join shoppy_products sp where so.pid = sp.pid and id='try226';
select so.id,oid, so.pid, so.size, so.qty, so.totprice, so.odate, sp.name, sp.image, sp.deli_price from shoppy_order so inner join shoppy_products sp where so.pid = sp.pid and id='try226';

insert into shoppy_order(id,pid,size,qty,totprice,odate) value('try226','6','M','3','30000',curdate());

-- test/1/1 : 20 
-- cid만 알면 id,pid,qty를 다 사용할 수 있다. flag값만 추가해서 사용
-- 데이터의 방식에 따라(상품개수의 차이 등) 데이터를 가져오는 방법이 달라짐

update shoppy_cart set qty = 2 where cid = 20;

select * from shoppy_cart;
select * from shoppy_order;
drop table shoppy_order;


create table shoppy_products(

	pid int auto_increment primary key,
    name varchar(50) not null,
    image varchar(300),
    price long,
    deli_price varchar(20),
    info varchar(300),
    pdate date

);

create table shoppy_products(

	pid int auto_increment primary key,
    name varchar(50) not null,
    image varchar(300),
    price long,
    info varchar(300),
    pdate date

);

drop table shoppy_products;

insert into shoppy_products(name,image,price,deli_price,info,pdate)  
                  values(?,?,?,?,curdate());
                  
select * from shoppy_cart;
select * from shoppy_member;
select * from shoppy_products;





insert into shoppy_cart(qty, size, id, pid, cdate)  
                  values(?,?,?,?,sysdate());


		