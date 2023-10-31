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
create table news (
	nid int auto_increment primary key,
    title varchar(15) not null,
    info varchar(500),
    url varchar(100),
    date date
);
select * from information_schema.tables where table_name = 'news';
desc news;
select * from news;
delete from news;



/*
	NEWS_REPLY : RID(기본키),content,nid,redate
    -- 주문시, 주문하는 정보(몇건의주문이 일어났는지), 주문 전체 건수처리시, 주문테이블을 자체적으로 접근할 수 있기때문에 
    -- 참조관계에서 fk를 가지는 테이블이 기본키를 가질때는 기본키가 필요함
    -- 뉴스를 통해서 만들어지는 것은 기본키가 필요없음
    -- 단, 뉴스기사가 삭제되면 댓글도 함께 삭제한다.
    -- 기본키는 넣어주는 것을 권장
        -- 댓글내용 NID REDATE
*/
create table news_reply(
	RID int auto_increment primary key,
    CONTENT varchar(200) not null,
    nid int not null,
    redate datetime
);
select * from news_reply;
select * from information_schema.tables where table_name = 'news_reply';
select * from information_schema.table_constraints where table_name like 'news%';
alter table news_reply
	add constraint news_reply_nid_fk foreign key(nid) references news(nid) on delete cascade;


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




