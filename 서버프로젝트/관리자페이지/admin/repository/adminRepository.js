import { db } from "../db/database.js";

export async function getAll() {

  return db.execute("select customer_id,customer_name,gender,phone,email,city,birth_date,register_date,point from customer")
    .then((result) => result[0]);

}

export async function employeeGetAll() {

  return db.execute("select employee_id,employee_name,gender,phone,email,hire_date,retire_date from employee")
    .then((result) => result[0]);

}

export async function join(name, id, gender, phone, email, city, birthday, register_date) {

  return db.execute("insert into customer(customer_id,customer_name,gender,phone,email,city,birth_date,register_date,point) values(?,?,?,?,?,?,?,?,0)", [id, name, gender, phone, email, city, birthday, register_date])
    .then((result) => "success");

}

export async function ejoin(id, name, gender, phone, email, hire_date, retire_date) {

  return db.execute("insert into employee(employee_id,employee_name,gender,phone,email,hire_date,retire_date) values(?,?,?,?,?,?,?)", [id, name, gender, phone, email, hire_date, retire_date])
    .then((result) => "success");

}

export async function empUpdate(name, phone, email, id) {

  return db.execute("update employee set employee_name = ?, phone = ?, email = ? where employee_id = ? ", [name, phone, email, id])
    .then((result) => "success")
    
}
export async function unregister(id) {

  return db.execute("delete from customer where customer_id = ?", [id])
    .then((result) => "success");
}

export async function createProduct(id, name, category) {

  return db.execute("insert into product(product_id ,product_name, sub_category_id) values(?,?,?)", [id, name, category])
    .then((result) => "success");

}

export async function getProduct() {

  return db.execute("select product_id, product_name, sub_category_id from product")
    .then((result) => result[0])

}

export async function updateProduct(name, category, id) {

  return db.execute("update product set product_name = ?, sub_category_id = ? where product_id = ? ", [name, category, id])
    .then((result) => "success");

}

export async function getOrder() {

  return db.execute("select order_id, customer_id, employee_id, order_date,sub_total,delivery_fee,total_due from order_header")
    .then((result) => result[0])

}

export async function getDetail() {

  return db.execute("select order_id, drder_detail_id, product_id, order_qty, unit_price, discount,line_total from order_detail")
    .then((result) => result[0])

}

export async function getSales() {

  return db.execute("select order_id, customer_id, employee_id, order_date,sub_total,delivery_fee,total_due from order_header")
    .then((result) => result[0])

}

export async function getYear() {

  return db.execute("select left(order_date,4) as order_date,  count(*) as count from order_header group by left(order_date,4)")
    .then((result) => result[0])

}

export async function getPrd() {

  return db.execute("select product_name,count(*) as count, sum(total_due) as total_due from order_header oh inner join order_detail od on oh.order_id = od.order_id inner join product pd on od.product_id = pd.product_id group by product_name")
  .then((result) => result[0])
  
}

export async function getCategory() {

  return db.execute("select cg.category_name,count(*) as count, sum(total_due) as line_total from category cg inner join sub_category scg on cg.category_id = scg.category_id inner join product pd on scg.sub_category_id = pd.sub_category_id inner join order_detail od on od.product_id = pd.product_id group by cg.category_name")
  .then((result) => result[0])

}

export async function getCustomer() {

  return db.execute("select customer_name, count(*) as count, sum(total_due) as line_total from customer c inner join order_header oh on c.customer_id = oh.customer_id inner join order_detail od on oh.order_id = od.order_id group by customer_name")
  .then((result)=> result[0])

}

export async function deleteProduct(id){

  return db.execute("delete from product where product_id = ? ", [id])
  .then((result)=>"success");

}


