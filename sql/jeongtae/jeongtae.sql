-- hrdb 전체 테이블 확인
select * from information_schema.tables where table_schema = "hrdb2019";

-- 회원가입 스키마 확인
select * from information_schema.tables where table_name like "join%";
-- 회원가입 구조 확인
desc join_table;
-- 회원가입 데이터 확인
select * from join_table;
-- 회원가입 데이터 구조 생성
-- 이름, 아이디, 비밀번호, 비밀번호 확인, 생년월일, 주소123, 이메일, 수신체크, 핸드폰번호, 추천인아이디
create table join_table(
    name varchar(15) not null,
    id varchar(20) not null primary key,
    password varchar(20) not null,
    birthday varchar(20),
    address varchar(100),
    email varchar(50),
    receipt_check char(4),
    phone varchar(50),
    recommand varchar(50)
);
drop table join_table;
insert into join_table(name,id,password,password_check,birthday,address_first,address_second,address_third,email,phone,recommand) values("1","1","1","1","1","1","1","1","1","1","1");
select * from join_table;





