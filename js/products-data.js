// 铭锴纺织产品数据
// 从飞书网盘提取

const productsData = [
  // 涤纶
  {
    id: "536",
    name: "536# 涤纶格子布",
    category: "涤纶",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "涤纶",
    description: "高品质涤纶格子布，色彩鲜明，手感舒适",
    image: "images/products/product-536.jpg",
    tag: "热销"
  },
  {
    id: "896",
    name: "896# 涤纶格子布",
    category: "涤纶",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "涤纶",
    description: "经典涤纶格纹面料，适合多种用途",
    image: "images/products/product-896.jpg",
    tag: ""
  },
  {
    id: "685",
    name: "685# 涤纶格子布",
    category: "涤纶",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "涤纶",
    description: "优质涤纶面料，格纹清晰，色牢度好",
    image: "images/products/product-685.jpg",
    tag: ""
  },
  {
    id: "637",
    name: "637# 涤纶格子布",
    category: "涤纶",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "涤纶",
    description: "时尚涤纶格纹，适合服装及家居装饰",
    image: "images/products/product-637.jpg",
    tag: ""
  },
  {
    id: "547",
    name: "547# 涤纶格子布",
    category: "涤纶",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "涤纶",
    description: "经典涤纶格子布，品质稳定",
    image: "images/products/product-547.jpg",
    tag: ""
  },
  {
    id: "614",
    name: "614# 涤纶格子布",
    category: "涤纶",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "涤纶",
    description: "高品涤纶面料，格纹精致",
    image: "images/products/product-614.jpg",
    tag: ""
  },
  {
    id: "797",
    name: "797# 涤纶格子布",
    category: "涤纶",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "涤纶",
    description: "优质涤纶格纹，手感柔软",
    image: "images/products/product-797.jpg",
    tag: ""
  },
  {
    id: "689",
    name: "689# 涤纶格子布",
    category: "涤纶",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "涤纶",
    description: "时尚涤纶格子布，适合多种风格",
    image: "images/products/product-689.jpg",
    tag: ""
  },
  {
    id: "150D",
    name: "150D中厚四面弹",
    category: "涤纶",
    price: { small: "9", medium: "8", large: "4" },
    weight: "135",
    width: "150cm",
    composition: "97%聚酯纤维 3%氨纶",
    description: "中厚四面弹面料，弹性好，适合运动装及休闲装",
    image: "images/products/product-150D.jpg",
    tag: "推荐"
  },
  {
    id: "552",
    name: "552# 涤纶格子布",
    category: "涤纶",
    price: { small: "15", medium: "14", large: "10.5" },
    weight: "",
    width: "",
    composition: "涤纶",
    description: "高品质涤纶格纹面料",
    image: "images/products/product-552.jpg",
    tag: ""
  },
  {
    id: "686",
    name: "686# 涤纶格子布",
    category: "涤纶",
    price: { small: "15", medium: "14", large: "10" },
    weight: "220",
    width: "",
    composition: "涤纶",
    description: "厚款涤纶格子布，克重220，质感厚实",
    image: "images/products/product-686.jpg",
    tag: ""
  },
  {
    id: "843",
    name: "843# 涤纶格子布",
    category: "涤纶",
    price: { small: "15", medium: "14", large: "11" },
    weight: "200",
    width: "",
    composition: "涤纶",
    description: "中厚涤纶格纹，克重200，手感舒适",
    image: "images/products/product-843.jpg",
    tag: ""
  },

  // 涤棉混纺
  {
    id: "540",
    name: "540# 涤棉混纺格子布",
    category: "涤棉混纺",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "涤棉混纺",
    description: "涤棉混纺格纹面料，兼具棉的舒适和涤纶的耐用",
    image: "images/products/product-540.jpg",
    tag: "热销"
  },
  {
    id: "756",
    name: "756# 涤棉混纺格子布",
    category: "涤棉混纺",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "涤棉混纺",
    description: "经典涤棉格纹，适合衬衫、裙装",
    image: "images/products/product-756.jpg",
    tag: ""
  },
  {
    id: "746",
    name: "746# 涤棉混纺格子布",
    category: "涤棉混纺",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "涤棉混纺",
    description: "优质涤棉面料，格纹清晰",
    image: "images/products/product-746.jpg",
    tag: ""
  },
  {
    id: "657",
    name: "657# 涤棉混纺格子布",
    category: "涤棉混纺",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "涤棉混纺",
    description: "时尚涤棉格纹，适合多种服装",
    image: "images/products/product-657.jpg",
    tag: ""
  },
  {
    id: "553",
    name: "553# 涤棉混纺格子布",
    category: "涤棉混纺",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "涤棉混纺",
    description: "经典涤棉格子布，品质稳定",
    image: "images/products/product-553.jpg",
    tag: ""
  },
  {
    id: "796",
    name: "796# 涤棉混纺格子布",
    category: "涤棉混纺",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "涤棉混纺",
    description: "高品涤棉面料，手感舒适",
    image: "images/products/product-796.jpg",
    tag: ""
  },
  {
    id: "702",
    name: "702# 涤棉混纺格子布",
    category: "涤棉混纺",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "涤棉混纺",
    description: "优质涤棉格纹，色牢度好",
    image: "images/products/product-702.jpg",
    tag: ""
  },
  {
    id: "852",
    name: "852# 涤棉混纺格子布",
    category: "涤棉混纺",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "涤棉混纺",
    description: "时尚涤棉格子布，适合多种风格",
    image: "images/products/product-852.jpg",
    tag: ""
  },
  {
    id: "818",
    name: "818# 涤棉混纺格子布",
    category: "涤棉混纺",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "涤棉混纺",
    description: "经典涤棉格纹面料",
    image: "images/products/product-818.jpg",
    tag: ""
  },
  {
    id: "526",
    name: "526# 涤棉混纺格子布",
    category: "涤棉混纺",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "涤棉混纺",
    description: "高品质涤棉格子布",
    image: "images/products/product-526.jpg",
    tag: ""
  },

  // 全涤
  {
    id: "533",
    name: "533# 全涤格子布",
    category: "全涤",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "100%涤纶",
    description: "全涤格纹面料，耐用易打理",
    image: "images/products/product-533.jpg",
    tag: "热销"
  },
  {
    id: "846",
    name: "846# 全涤格子布",
    category: "全涤",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "100%涤纶",
    description: "经典全涤格纹，色彩鲜艳",
    image: "images/products/product-846.jpg",
    tag: ""
  },
  {
    id: "788",
    name: "788# 全涤格子布",
    category: "全涤",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "100%涤纶",
    description: "优质全涤面料，格纹精致",
    image: "images/products/product-788.jpg",
    tag: ""
  },
  {
    id: "865",
    name: "865# 全涤格子布",
    category: "全涤",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "100%涤纶",
    description: "时尚全涤格纹，适合多种用途",
    image: "images/products/product-865.jpg",
    tag: ""
  },
  {
    id: "863",
    name: "863# 全涤格子布",
    category: "全涤",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "100%涤纶",
    description: "高品全涤格子布，品质稳定",
    image: "images/products/product-863.jpg",
    tag: ""
  },
  {
    id: "817",
    name: "817# 全涤格子布",
    category: "全涤",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "100%涤纶",
    description: "经典全涤格纹面料",
    image: "images/products/product-817.jpg",
    tag: ""
  },
  {
    id: "530",
    name: "530# 全涤格子布",
    category: "全涤",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "100%涤纶",
    description: "优质全涤格子布",
    image: "images/products/product-530.jpg",
    tag: ""
  },
  {
    id: "529",
    name: "529# 全涤格子布",
    category: "全涤",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "100%涤纶",
    description: "时尚全涤格纹",
    image: "images/products/product-529.jpg",
    tag: ""
  },
  {
    id: "759",
    name: "759# 全涤格子布",
    category: "全涤",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "100%涤纶",
    description: "高品质全涤格子布",
    image: "images/products/product-759.jpg",
    tag: ""
  },
  {
    id: "532",
    name: "532# 全涤格子布",
    category: "全涤",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "100%涤纶",
    description: "经典全涤格纹",
    image: "images/products/product-532.jpg",
    tag: ""
  },

  // 待分类
  {
    id: "976",
    name: "976# 格子布",
    category: "待分类",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "",
    description: "优质格子布，具体参数请咨询",
    image: "images/products/product-976.jpg",
    tag: ""
  },
  {
    id: "556",
    name: "556# 格子布",
    category: "待分类",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "",
    description: "经典格纹面料",
    image: "images/products/product-556.jpg",
    tag: ""
  },
  {
    id: "569",
    name: "569# 格子布",
    category: "待分类",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "",
    description: "时尚格子布",
    image: "images/products/product-569.jpg",
    tag: ""
  },
  {
    id: "562",
    name: "562# 格子布",
    category: "待分类",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "",
    description: "优质格纹面料",
    image: "images/products/product-562.jpg",
    tag: ""
  },
  {
    id: "545",
    name: "545# 格子布",
    category: "待分类",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "",
    description: "经典格子布",
    image: "images/products/product-545.jpg",
    tag: ""
  },
  {
    id: "593",
    name: "593# 格子布",
    category: "待分类",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "",
    description: "时尚格纹面料",
    image: "images/products/product-593.jpg",
    tag: ""
  },
  {
    id: "加厚铜氨绒",
    name: "加厚铜氨绒",
    category: "待分类",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "铜氨纤维",
    description: "加厚铜氨绒面料，手感柔软，保暖性好",
    image: "images/products/product-加厚铜氨绒.jpg",
    tag: "新品"
  },
  {
    id: "斜纹磨毛",
    name: "斜纹磨毛",
    category: "待分类",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "",
    description: "斜纹磨毛面料，表面绒感，保暖舒适",
    image: "images/products/product-斜纹磨毛.jpg",
    tag: "新品"
  },
  {
    id: "953",
    name: "953# 格子布",
    category: "待分类",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "",
    description: "优质格子布",
    image: "images/products/product-953.jpg",
    tag: ""
  },
  {
    id: "1010",
    name: "1010# 格子布",
    category: "待分类",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "",
    description: "经典格纹面料",
    image: "images/products/product-1010.jpg",
    tag: ""
  },
  {
    id: "977",
    name: "977# 阳光斜",
    category: "待分类",
    price: { small: "12", medium: "11", large: "6.5" },
    weight: "145",
    width: "150cm",
    composition: "85%涤纶 15%锦纶",
    description: "阳光斜纹面料，克重145，幅宽150cm，适合多种服装",
    image: "images/products/product-977.jpg",
    tag: "推荐"
  },
  {
    id: "585",
    name: "585# 格子布",
    category: "待分类",
    price: { small: "咨询", medium: "咨询", large: "咨询" },
    weight: "",
    width: "",
    composition: "",
    description: "优质格纹面料",
    image: "images/products/product-585.jpg",
    tag: ""
  }
];

// 按分类分组
function getProductsByCategory(category) {
  return productsData.filter(p => p.category === category);
}

// 获取所有分类
function getCategories() {
  return [...new Set(productsData.map(p => p.category))];
}

// 导出数据（如果在模块环境中）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { productsData, getProductsByCategory, getCategories };
}
