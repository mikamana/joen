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
