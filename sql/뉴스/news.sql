create table news (
	nid int auto_increment primary key,
    title varchar(15) not null,
    info varchar(500),
    url varchar(100),
    date date
);
drop table news;
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

insert into news_list (title,contents,url) value("오늘의 뉴스 제목입니다.","뉴스 내용입니다", "https://imgnews.pstatic.net/image/origin/001/2023/11/11/14323772.jpg?type=nf132_90");
select * from news_list;
drop table news_list;
create table news_list (
	nid int auto_increment primary key,
    title varchar(15) not null,
    contents varchar(500),
    url varchar(200)
);



