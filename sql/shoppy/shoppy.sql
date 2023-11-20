-- shoppy로 시작하는 모든 테이블 조회
select * from information_schema.tables where table_name like "shoppy%";

-- shoppy_products : 상품테이블
-- pid(제품아이디),name(상품명),image,price,info,pdate(등록날짜)

drop table shoppy_products;
create table shoppy_products(

	pid int auto_increment primary key,
    name varchar(50) not null,
    image varchar(300),
    price long,
    info varchar(300),
    pdate date

);

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

insert into shoppy_products(name,image,price,info,pdate) value("꽈배기니트","url주소","1000","포근한 느낌의 디자인",curdate());

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

select * from shoppy_cart;

select row_number() over (order by qty)sp.image,sp.name,sp.price,sc.qty,sc.size,sp.price*sc.qty as tprice from shoppy_cart sc inner join shoppy_products sp inner join shoppy_member sm on sc.pid = sp.pid and sm.id = sc.id;

-- 상품명,상품가격,수량,사이즈,총 가격



