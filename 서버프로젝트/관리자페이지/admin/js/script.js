document.addEventListener("DOMContentLoaded", () => {

    adminButton('customerDate')
    // 시작하자마자 호출
    document.querySelector(".admin_btn").addEventListener("click", e => {

        adminButton('customerDate')

    })// 고객관리
    function adminButton(customer) {

        const url = "/" + customer
        fetch(url)
            .then((response) => response.json())
            .then((customerList) => {
                console.log(customerList);
                const countAll = "총 회원수 = " + customerList.length
                const createOutput = `
                <p class="count_all"></p>
                <a class="member_create" href="./template/cjoin.html">회원추가</a>
                <a class="delete_btn customer_delete_btn" href="#">회원탈퇴</a>
                `
                const headTable = `
                <tr>
                    <th>아이디</th>
                    <th>회원명</th>
                    <th>성별</th>
                    <th>핸드폰</th>
                    <th>이메일</th>
                    <th>지역</th>
                    <th>생일</th>
                    <th>가입날짜</th>
                    <th>포인트</th>
                </tr>`
                const output = `
            ${customerList.map((customer) => `

                <tr> 
                    <td>${customer.customer_id}</td>
                    <td>${customer.customer_name}</td>
                    <td>${customer.gender}</td>
                    <td>${customer.phone}</td>
                    <td>${customer.email}</td>
                    <td>${customer.city}</td>
                    <td>${customer.birth_date}</td>
                    <td>${customer.register_date}</td>
                    <td>${customer.point}</td>
                </tr>
            `).join('\n')}
            `;

                document.querySelector(".function_wrap").innerHTML = createOutput
                document.querySelector(".count_all").innerHTML = countAll
                document.querySelector(".body_table").innerHTML = output;
                document.querySelector(".head_table").innerHTML = headTable;

                document.querySelector(".customer_delete_btn").addEventListener("click", e => {

                    deleteToggle()

                })//회원탈퇴토글클릭

                function deleteToggle() {

                    const unregisterForm = document.querySelector(".unregister_form");
                    const display = unregisterForm.style.display

                    if (display === "none") {
                        unregisterForm.style.display = "block";
                    } else {
                        unregisterForm.style.display = "none";
                    }

                }// 회원탈퇴토글

                document.querySelector(".unregister_form").addEventListener("submit", e => {

                    const id = document.querySelector("#id").value

                    fetch(this.action, {
                        method: 'delete',
                        headers: { 'Content-type': 'application/json' },
                        body: { id: id }
                    }).then((result) => {

                        if (result === 204) {

                            alert("삭제성공")

                            window.location.reload()

                        }

                    })// 회원탈퇴기능


                })// 회원탈퇴기능
            }).catch(console.error())
    }//  고객관리기능 customer R(Reading),D(Delete)

    document.querySelector(".employee_btn").addEventListener("click", e => {

        employeeButton('employeeDate')

    })// 사원관리
    function employeeButton(employee) {

        const url = "/" + employee
        fetch(url)
            .then((response) => response.json())
            .then((employeeList) => {
                const countAll = "총 회원수 = " + employeeList.length
                const createOutput = `
                <p class="count_all"></p>
                <a class="employee_create" href="./template/ejoin.html">사원추가</a>
                <a class="delete_btn employee_delete_btn" href="#">사원탈퇴</a>
                <a class="update_btn employee_update_btn" href="#">사원업데이트</a>
                `
                const headTable = `
                <tr>
                    <th>아이디</th>
                    <th>사원명</th>
                    <th>성별</th>
                    <th>핸드폰</th>
                    <th>이메일</th>
                    <th>입사일</th>
                    <th>퇴사일</th>
                </tr>`
                const output = `
            ${employeeList.map((employee) => `

                <tr> 
                    <td>${employee.employee_id}</td>
                    <td>${employee.employee_name}</td>
                    <td>${employee.gender}</td>
                    <td>${employee.phone}</td>
                    <td>${employee.email}</td>
                    <td>${employee.hire_date}</td>
                    <td>${employee.retire_date}</td>
                </tr>
            `).join('\n')}
            `;

                document.querySelector(".function_wrap").innerHTML = createOutput
                document.querySelector(".count_all").innerHTML = countAll
                document.querySelector(".body_table").innerHTML = output;
                document.querySelector(".head_table").innerHTML = headTable;


                document.querySelector(".employee_delete_btn").addEventListener("click", e => {

                    deleteToggle()

                })//회원탈퇴토글클릭

                document.querySelector(".update_btn").addEventListener("click", e => {

                    updateToggle()

                })//업데이트토글클릭

                function deleteToggle() {

                    const retireForm = document.querySelector(".retire_form");
                    const display = retireForm.style.display

                    if (display === "none") {
                        retireForm.style.display = "block";
                    } else {
                        retireForm.style.display = "none";
                    }

                }//회원탈퇴토글

                document.querySelector(".retire_form").addEventListener("submit", e => {

                    const id = document.querySelector("#id").value

                    fetch(this.action, {
                        method: 'delete',
                        headers: { 'Content-type': 'application/json' },
                        body: { id: id }
                    }).then((result) => {

                        if (result === 204) {

                            alert("삭제성공")

                            window.location.reload()

                        }

                    })//회원탈퇴기능


                })//회원탈퇴기능

                function updateToggle() {

                    const updateForm = document.querySelector(".update_form")
                    const display = updateForm.style.display

                    if (display === "none") {
                        updateForm.style.display = "block"
                    } else {
                        updateForm.style.display = "none"
                    }

                }//업데이트토글

                document.querySelector(".update_form").addEventListener("submit", e => {

                    const id = document.querySelector("#id").value
                    const name = document.querySelector("#name").value
                    const gender = document.querySelector("#gender").value
                    const phone = document.querySelector("#phone").value
                    const email = document.querySelector("#email").value

                    fetch(this.action, {
                        method: 'update',
                        headers: { 'Content-type': 'application/json' },
                        body: { id: id, name: name, gender: gender, phone: phone, email: email }
                    }).then((result) => {

                        if (result === 204) {

                            alert("업데이트 성공")

                            window.location.reload()

                        }

                    })


                })// 업데이트기능

            }).catch(console.error())
    }// 사원관리기능 employee C(Create),R(Reading),U(Update),D(Delete)

    document.querySelector(".product_btn").addEventListener("click", e => {

        product("createProduct")


    })//상품관리토글클릭

    function product(product) {
        const url = "/" + product
        fetch(url)
            .then((response) => response.json())
            .then((productList) => {

                const headerOutput = `
                <tr>
                    <th>상품코드</th>
                    <th>상품이름</th>
                    <th>카테고리아이디</th>
                </tr>
                `
                const output = `

                ${productList.map((product) => `

                <tr>
                    <td>${product.product_id}</td>
                    <td>${product.product_name}</td>
                    <td>${product.sub_category_id}</td>
                </tr>

                `
                ).join("\n")}`

                document.querySelector(".function_wrap").innerHTML = `
                <p class="count_all">총 상품수 = ${productList.length}</p>
                <a class="product_create" href="#">상품추가</a>
                <a class="product_update" href="#">상품수정</a>
                <a class="product_delete" href="#">상품삭제</a>
                `
                document.querySelector(".head_table").innerHTML = headerOutput
                document.querySelector(".body_table").innerHTML = output

                document.querySelector(".product_create").addEventListener("click", e => {

                    productToggle()

                })// 상품추가토글클릭

                function productToggle() {

                    const productForm = document.querySelector(".product_form")
                    const display = productForm.style.display

                    if (display === "none") {
                        productForm.style.display = "block"
                    } else {
                        productForm.style.display = "none"
                    }

                }//상품추가토글

                document.querySelector(".product_update").addEventListener("click", e => {

                    prdUpdateToggle()

                })//상품업데이트토글클릭

                function prdUpdateToggle() {

                    const prdForm = document.querySelector(".prd_update_form")
                    const display = prdForm.style.display

                    if (display === "none") {

                        prdForm.style.display = "block";

                    } else {

                        prdForm.style.display = "none";

                    }

                }//상품업데이트토글

                document.querySelector(".prd_update_form").addEventListener("submit", e => {

                    const prdId = document.querySelector(".prd_id").value
                    const prdName = document.querySelector(".prd_name").value

                    fetch(this.action, {

                        method: "update",
                        headers: { 'Content-type': 'application/json' },
                        body: JSON.stringify({ id: prdId, name: prdName })

                    }).then((result) => {

                        if (result === 204) {
                            alert("업데이트 성공")
                        }

                    })

                })//상품업데이트기능

                document.querySelector(".product_delete").addEventListener("click",e=>{

                    prdDeleteToggle()

                })//상품삭제토글클릭

                function prdDeleteToggle(){

                    const prdDeleteForm = document.querySelector(".prd_delete_form")
                    const display = prdDeleteForm.style.display

                    if(display === "none"){
                        prdDeleteForm.style.display = "block";
                    }else{
                        prdDeleteForm.style.display = "none";
                    }

                }//상품삭제토글

                document.querySelector(".prd_delete_form").addEventListener("submit",e=>{

                    const id = document.querySelector("#prd_delete_id").value
                    const name = document.querySelector("#prd_delete_name").value
                    
                    fetch(this.action,{

                        method : 'delete',
                        headers : {'Content-type':'application/json'},
                        body : JSON.stringify({id:id, name:name})

                    }).then((result)=>{

                        if(result===204){

                            window.location.reload()
                            
                        }

                    })


                })// 상품삭제기능

            })

    }//상품조회, 상품추가, 상품수정, 상품삭제기능

    document.querySelector(".order_btn").addEventListener("click", e => {

        orderHeader("orderHeader")

    })//주문관리

    function orderHeader(order) {
        const url = "/" + order
        fetch(url)
            .then((response) => response.json())
            .then((orderList) => {
                const createOutput = `
                    <p class="count_all"></p>
                    <a class="year_btn" href="#">연도별</a>
                    <a class="prd_btn" href="#">상품별</a>
                    <a class="ctg_btn" href="#">카테고리별</a>
                    <a class="cus_btn" href="#">고객별</a>
                    <a class="age_btn" href="#">연령별</a>
                `
                const headerOutput = `
                
                <tr>
                    <th>주문코드</th>
                    <th>고객아이디</th>
                    <th>담당사원코드</th>
                    <th>주문일시</th>
                    <th>배송비제외금액</th>
                    <th>배송비</th>
                    <th>총액</th>
                </tr>

                `
                const output = `
                
                ${orderList.map((order) => `
                
                <tr>
                    <td>${order.order_id}</td>
                    <td>${order.customer_id}</td>
                    <td>${order.employee_id}</td>
                    <td>${order.order_date}</td>
                    <td>${order.sub_total}</td>
                    <td>${order.delivery_fee}</td>
                    <td>${order.total_due}</td>
                </tr>

                `).join("\n")}

                `
                document.querySelector(".function_wrap").innerHTML = createOutput
                document.querySelector(".count_all").innerHTML = `총 주문 수 = ${orderList.length}`
                document.querySelector(".head_table").innerHTML = headerOutput
                document.querySelector(".body_table").innerHTML = output

                document.querySelector(".year_btn").addEventListener("click", e => {

                    fnYear("ohYear")

                })//연도별

                function fnYear(year) {
                    const url = "/orderHeader" + "/" + year
                    fetch(url)
                        .then((response) => response.json())
                        .then((yearList) => {

                            const headerOutput =
                                `
                                <tr>
                                    <th>년도</th>
                                    <th>주문수량</th>
                                </tr>
                            `
                            const output = `
                
                            ${yearList.map((year) => `
                            
                            <tr>
                                <td>${year.order_date}</td>
                                <td>${year.count}</td>
                            </tr>
            
                            `).join("\n")}
            
                            `

                            document.querySelector(".head_table").innerHTML = headerOutput
                            document.querySelector(".body_table").innerHTML = output

                        })
                }// 연도별 기능

                document.querySelector(".prd_btn").addEventListener("click",e=>{

                    fnPrd("ohPrd")

                })// 상품별

                function fnPrd(prd){
                    const url = "/orderHeader" + "/" + prd
                    fetch(url)
                    .then((response)=>response.json())
                    .then((prdList)=>{
                        const headerOutput = `
                            <tr>
                                <th>상품이름</th>
                                <th>개수</th>
                                <th>총주문금액</th>
                            </tr>
                        `
                        const output = `
                            ${prdList.map((prd)=>`
                                <tr>
                                    <td>${prd.product_name}</td>
                                    <td>${prd.count}</td>
                                    <td>${prd.total_due}</td>
                                </tr>
                            `).join("\n")}
                        `

                        document.querySelector(".head_table").innerHTML = headerOutput
                        document.querySelector(".body_table").innerHTML = output

                    })



                }// 상품별기능

                document.querySelector(".ctg_btn").addEventListener("click",e=>{

                    fnCategory("ohCategory")

                })//카테고리별

                function fnCategory(category){

                    const url = "/orderHeader" + "/" + category

                    fetch(url)
                    .then((response)=>response.json())
                    .then((categoryList)=>{

                        const headerOutput = `
                        <tr>
                            <th>카테고리명</th>
                            <th>카테고리별 총판매개수</th>
                            <th>카테고리별 총주문금액</th>
                        </tr>
                    `
                    const output = `
                        ${categoryList.map((category)=>`
                            <tr>
                                <td>${category.category_name}</td>
                                <td>${category.count}</td>
                                <td>${category.line_total}</td>
                            </tr>
                        `).join("\n")}
                    `

                    document.querySelector(".head_table").innerHTML = headerOutput
                    document.querySelector(".body_table").innerHTML = output


                    })

                }// 카테고리별기능

                document.querySelector(".cus_btn").addEventListener("click",e=>{

                    fnCustomer("ohCustomer");

                })//고객별

                function fnCustomer(customer){

                    const url = "orderHeader" + "/" + customer

                    fetch(url)
                    .then((response)=>response.json())
                    .then((customerList)=>{

                        const headerOutput = `
                        <tr>
                            <th>고객명</th>
                            <th>고객별 총판매개수</th>
                            <th>고객별 총주문금액</th>
                        </tr>
                    `
                    const output = `
                        ${customerList.map((customer)=>`
                            <tr>
                                <td>${customer.customer_name}</td>
                                <td>${customer.count}</td>
                                <td>${customer.line_total}</td>
                            </tr>
                        `).join("\n")}
                    `

                    document.querySelector(".head_table").innerHTML = headerOutput
                    document.querySelector(".body_table").innerHTML = output

                    })

                }//고객별기능
            
            })

    }// 주문관리기능 order_header CRUD

    document.querySelector(".ordetail_btn").addEventListener("click", e => {

        orderDetail("orderDetail")

    })//판매관리

    function orderDetail(detail) {

        const url = "/" + detail
        fetch(url)
            .then((response) => response.json())
            .then((detailList) => {
                const createOutput = `
                    <p class="count_all"></p>
                    <a class="year_btn" href="#">연도별</a>
                    <a class="prd_btn" href="#">상품별</a>
                    <a class="ctg_btn" href="#">카테고리별</a>
                    <a class="cus_btn" href="#">고객별</a>
                    <a class="age_btn" href="#">연령별</a>
                `
                const headerOutput = `
                    <tr>
                        <th>주문코드</th>
                        <th>주문상세코드</th>
                        <th>상품코드</th>
                        <th>개수</th>
                        <th>상품가격</th>
                        <th>할인</th>
                        <th>할인후가격</th>
                    </tr>

                `

                const output = `
                
                ${detailList.map((detail) => `
                    
                    <tr>
                        <td>${detail.order_id}</td>
                        <td>${detail.drder_detail_id}</td>
                        <td>${detail.product_id}</td>
                        <td>${detail.order_qty}</td>
                        <td>${detail.unit_price}</td>
                        <td>${detail.discount}</td>
                        <td>${detail.line_total}</td>
                    </tr>
                    
                `)}

                `
                document.querySelector(".function_wrap").innerHTML = createOutput
                document.querySelector(".count_all").innerHTML = `총 주문 수 = ${detailList.length}`
                document.querySelector(".head_table").innerHTML = headerOutput
                document.querySelector(".body_table").innerHTML = output
            })

    }// 판매관리기능

    document.querySelector(".sales_btn").addEventListener("click", e => {

        sales("sales")

    })//매출관리

    function sales(sale) {
        const url = "/" + sale
        fetch(url)
            .then((response) => response.json())
            .then((saleList) => {

                const createOutput = `
                <p class="count_all"></p>
                <a class="year_btn" href="#">연도별</a>
                <a class="prd_btn" href="#">상품별</a>
                <a class="ctg_btn" href="#">카테고리별</a>
                <a class="cus_btn" href="#">고객별</a>
                <a class="age_btn" href="#">연령별</a>
            `

                const headerOutput = `
                
                <tr>
                    <th>주문코드</th>
                    <th>고객아이디</th>
                    <th>담당사원코드</th>
                    <th>주문일시</th>
                    <th>배송비제외금액</th>
                    <th>배송비</th>
                    <th>총액</th>
                </tr>

                `
                const output = `
                
                ${saleList.map((sale) => `
                
                <tr>
                    <td>${sale.order_id}</td>
                    <td>${sale.customer_id}</td>
                    <td>${sale.employee_id}</td>
                    <td>${sale.order_date}</td>
                    <td>${sale.sub_total}</td>
                    <td>${sale.delivery_fee}</td>
                    <td>${sale.total_due}</td>
                </tr>

                `)}

                `

                document.querySelector(".function_wrap").innerHTML = createOutput
                document.querySelector(".count_all").innerHTML = `총 주문 수 = ${saleList.length}`
                document.querySelector(".head_table").innerHTML = headerOutput
                document.querySelector(".body_table").innerHTML = output

            })

    }//매출관리기능

})