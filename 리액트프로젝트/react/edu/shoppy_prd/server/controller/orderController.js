import * as repository from '../repository/orderRepository.js';


/**
 *  새로운 주문 추가
 */
export async function insertOrder(req, res){
  const newOrderList = req.body;
  const result = await repository.insertOrder(newOrderList);
  res.json(result); //{data : 'ok'}
}

