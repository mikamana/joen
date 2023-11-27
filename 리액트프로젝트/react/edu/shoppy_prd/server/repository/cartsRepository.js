import {db} from '../db/database.js';

/**
 * updateQty : 장바구니 수량 업데이트
 */
export async function updateQty({id, cid, checkFlag}){
      let sql = ``;

      if(checkFlag === 'plus'){
            sql = 'update shoppy_cart set qty = qty +1 where cid=?';
      }else{
            sql = 'update shoppy_cart set qty = qty -1 where cid=?';
      }

      return db
            .execute(sql, [cid])
            .then((result) => 'ok');
}


/**
 * removeCart : 장바구니 상품 삭제
 */
export async function removeCart(cid){
      const sql = `delete from shoppy_cart where cid = ?`;

      return db
            .execute(sql, [cid])
            .then((result) => 'ok');
}

/**
 * getPageList : 회원 장바구니 리스트 - 페이징 처리 추가
 */
export async function getPageList({id, startIndex, endIndex}){
      const sql = `
            select rno, image, name, price, qty, size, tprice, pid, id, cid, cnt
            from
            (select row_number() over (order by sc.cdate) as rno, 
                  sp.image, 
                  sp.name, 
                  sp.price, 
                  sc.qty, 
                  sc.size, 
                  sp.price*sc.qty as tprice, 
                  sp.pid, 
                  sm.id,
                  sc.cid,
                  cnt
            from  shoppy_member sm, 
                  shoppy_products sp, 
                  shoppy_cart sc,
                  (select count(*) as cnt from shoppy_cart where id=?) cart
            where sm.id = sc.id 
                  and sp.pid = sc.pid
                  and sc.id = ? ) cartList
            where rno between ? and ?; 
`;

return db
      .execute(sql, [id, id, startIndex, endIndex])
      .then((rows) => rows[0]);
}

/**
 * getList : 회원 장바구니 리스트
 */
export async function getList(id){
      const sql = `
          select 
                row_number() over (order by sc.cdate) as rno, 
                sp.image, 
                sp.name, 
                sp.price, 
                sc.qty, 
                sc.size, 
                sp.price*sc.qty as tprice, 
                sp.pid, 
                sm.id,
                sc.cid
          from  shoppy_member sm, 
                shoppy_products sp, 
                shoppy_cart sc
          where sm.id = sc.id 
                and sp.pid = sc.pid
                and sc.id = ?
      `;
    
      return db
            .execute(sql, [id])
            .then((rows) => rows[0]);
    }

/**
 * insertCart : 장바구니에 새로운 상품 추가
 */
export async function insertCart({id, pid, size, qty}){
  const sql = `insert into shoppy_cart(qty, size, id, pid, cdate)  
                  values(?,?,?,?,sysdate())`;

  return db
        .execute(sql, [qty, size, id, pid])
        .then((result) => 'ok');
}
