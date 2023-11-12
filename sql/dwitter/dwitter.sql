select database();
use hrdb2019;

/*
	dwitter 테이블 생성
    -id, name, date, content
*/ 

create table dwitter(
	ID varchar(20) primary key,
    NAME varchar(20) not null,
    date date,
    content varchar(200)
);

-- realtimeuser
create table realtimeuser(
	id varchar(20) primary key,
    password varchar(100) not null
);

drop table realtimeuser;
select * from realtimeuser;
drop table dwitter;

create table dwitter(
	ID varchar(20) primary key,
    PASSWORD varchar(100) not null, -- 암호화된 HASH
    NAME varchar(20) not null,
    date date,
    content varchar(200)
);
-- sort의 자리수가 얼만지에 따라서 password가 길어질 수 있다.
select password from dwitter;
select * from dwitter;
delete from realtimeuser;
select id,name,date,content from dwitter;

select * from information_schema.tables where table_name = 'dwitter';
desc dwitter;
select * from dwitter;
select * from dwitter;
select id,name,left(date,10) as date, content from dwitter where id='test';
commit;
/*
	News & News_Reply 테이블 생성
	-- newsList.push({nid,title,info,url,date})

*/




create table bestsellerlist(
	bid int auto_increment primary key,
    bname varchar(20) not null,
    bname_comment varchar(50),
    author varchar(15),
    translator varchar(15),
    publisher varchar(15),
    blist int,
    pdate date,
    price int,
    dc int
);

alter table bestsellerlist
	add constraint bestsellerlist_blist_fk foreign key(blist) references booklist(blist);

create table booklist(
	blist int auto_increment primary key,
	btitle varchar(20)
);

select * from information_schema.table_constraints where table_name = 'bestsellerlist';
desc bestsellerlist;
select * from booklist;

insert into bestsellerlist(bname,bname_comment,author,translator,publisher,pdate,price,dc) values("파견자들","미안한 마음과 감사한 마음","아짐캐","임은미","상상스퀘어",curdate(),1850,10);
insert into booklist(btitle) values("베스트셀러");
insert into booklist(btitle) values("국내도서 실시간 베스트");
insert into booklist(btitle) values("국내도서 일별 베스트");
insert into booklist(btitle) values("국내도서 월별 베스트");
insert into booklist(btitle) values("국내도서 특가 베스트");
insert into booklist(btitle) values("국내도서 스테디셀러");

update bestsellerlist set blist = 3 where bid=3;




