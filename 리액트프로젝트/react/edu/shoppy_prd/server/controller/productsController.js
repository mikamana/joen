import * as repository from '../repository/productsRepository.js';


/**
 * 상품 정보 상세 조회
 */
export async function getProduct(req, res){
  const pid = req.params.pid;
  const result = await repository.getProduct(pid);
  res.json(result);
}

/**
 * 전체 상품 리스트 조회
 */
export async function getAllProducts(req, res){
  const result = await repository.getAllProducts();
  res.json(result);
}

/**
 * 새로운 제품 등록
 */
export async function insertProduct(req, res){
  const {image,name,price,info} = req.body;
  const result = await repository.insertProduct({image,name,price,info});
  res.json(result);
}