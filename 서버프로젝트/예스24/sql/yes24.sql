create table booklist(
	bid int auto_increment primary key,
    cid varchar(20),
    img_url varchar(200),
    bname varchar(20) not null,
    bname_comment varchar(50),
    author varchar(15),
    translator varchar(10),
    publisher varchar(15),
    pdate date,
    price varchar(20),
    dc int
);
drop table booklist;
create table bookcategory(
	cid varchar(20) primary key,
    category_name varchar(50) not null
);
drop table bookcategory;
alter table booklist 
	add constraint booklist_cid_fk foreign key (cid) references bookcategory(cid);

insert into bookcategory(cid,category_name) values("BS","국내도서 종합 베스트");
insert into bookcategory(cid,category_name) values("DBS","국내도서 실시간 베스트");
insert into bookcategory(cid,category_name) values("HPBS","국내도서 일별 베스트");
insert into bookcategory(cid,category_name) values("MWBS","국내도서 월별 베스트");
insert into bookcategory(cid,category_name) values("RTBS","국내도서 특가 베스트");
insert into bookcategory(cid,category_name) values("SS","국내도서 스테디셀러");
insert into booklist(cid,bname,bname_comment,author,translator,publisher,pdate,price,dc) values(1,"퓨처셀프","현재와 미래가 달라지는 놀라운 혁명","벤저민 하디","최은아","상상스퀘어",curdate(),"19800",10);

select * from information_schema.table_constraints where table_name = 'booklist';
select b.cid,bname,bname_comment,author,translator,publisher,left(pdate,10) as pdate,category_name ,price,dc from booklist b inner join bookcategory bcg on b.cid = bcg.cid;
select * from bookcategory;
select * from booklist;




