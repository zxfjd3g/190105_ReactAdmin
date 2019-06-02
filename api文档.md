# 接口文档

## 目录：
	1). 登陆
	2). 添加用户
	3). 更新用户
	4). 获取所有用户列表
	5). 删除用户
	6). 获取一级或某个二级分类列表
	7). 添加分类
	8). 更新品类名称
	9). 根据分类ID获取分类
	10). 获取商品分页列表
	11). 根据ID/Name搜索产品分页列表
	12). 添加商品
	13). 更新商品
	14). 对商品进行上架/下架处理
	15). 上传图片
	16). 删除图片
	17). 添加角色
	18). 获取角色列表
	19). 更新角色(给角色设置权限)
	20). 获取天气信息(支持jsonp)

## 1. 登陆

### 请求URL：
	http://localhost:5000/login

### 请求方式：
	POST

### 参数类型
	|参数		|是否必选 |类型     |说明
	|username    |Y       |string   |用户名
	|password    |Y       |string   |密码

### 返回示例：
	成功:
      {
        "status": 0,
        "data": {
          "_id": "5c3b297dea95883f340178b0",
          "password": "21232f297a57a5a743894a0e4a801fc3",
          "username": "admin",
          "create_time": 1547381117891,
          "__v": 0,
          "role": {
            "menus": []
          }
        }
      }
	失败
	  {
        "status": 1,
        "msg": "用户名或密码不正确!"
      }

## 2. 添加用户

### 请求URL：
	http://localhost:5000/manage/user/add

### 请求方式：
	POST

### 参数类型
	|参数		|是否必选 |类型     |说明
	|username    |Y       |string   |用户名
	|password    |Y       |string   |密码
	|phone       |N       |string   |手机号
	|email       |N       |string   |邮箱
	|role_id     |N       |string   |角色ID

### 返回示例：
	成功:
	  {
        "status": 0,
        "data": {
          "_id": "5c3b382c82a14446f4ffb647",
          "username": "admin6",
          "password": "d7b79bb6d6f77e6cbb5df2d0d2478361",
          "phone": "13712341234",
          "email": "test@qq.com",
          "create_time": 1547384876804,
          "__v": 0
        }
      }
	失败
	  {
        "status": 1,
        "msg": "此用户已存在"
      }

## 3. 更新用户
### 请求URL：
	http://localhost:5000/manage/user/update

### 请求方式：
	POST

### 参数类型

	|参数		|是否必选 |类型     |说明
	|_id         |Y       |string   |ID
    |username    |N       |string   |用户名
    |phone       |N       |string   |手机号
    |email       |N       |string   |邮箱
    |role_id     |N       |string   |角色ID

### 返回示例：
	成功:
	  {
        "status": 0,
        "data": {
          "_id": "5c3b382c82a14446f4ffb647",
          "username": "admin6",
          "password": "d7b79bb6d6f77e6cbb5df2d0d2478361",
          "phone": "13712341234",
          "email": "test@qq.com",
          "create_time": 1547384876804,
          "__v": 0
        }
      }
	失败
	  {
        "status": 1,
        "msg": "此用户已存在"
      }
    
## 4. 获取所有用户列表
### 请求URL：
	http://localhost:5000/manage/user/list

### 请求方式：
	GET

### 参数类型: 
	无

### 返回示例：
    {
	  "status": 0,
	  "data": {
	    "users": [
	      {
	        "_id": "5cb05b4db6ed8c44f42c9af2",
	        "username": "test",
	        "password": "202cb962ac59075b964b07152d234b70",
	        "phone": "123412342134",
	        "email": "sd",
	        "role_id": "5ca9eab0b49ef916541160d4",
	        "create_time": 1555061581734,
	        "__v": 0
	      },
	      {
	        "_id": "5cb05b69b6ed8c44f42c9af3",
	        "username": "ss22",
	        "password": "123",
	        "phone": "23343",
	        "email": "df",
	        "role_id": "5caf5444c61376319cef80a8",
	        "create_time": 1555061609666,
	        "__v": 0
	      }
	    ],
	    "roles": [
	      {
	        "menus": [
	          "/home",
	          "/role",
	          "/category",
	          "/products",
	          "/product",
	          "/charts/bar"
	        ],
	        "_id": "5ca9eaa1b49ef916541160d3",
	        "name": "测试",
	        "create_time": 1554639521749,
	        "__v": 0,
	        "auth_time": 1555145863489,
	        "auth_name": "admin"
	      }
	    ]
	  }
	}

## 5. 删除用户
### 请求URL：
	http://localhost:5000/manage/user/delete

### 请求方式：
	POST

### 参数类型:

	|参数		|是否必选 |类型     |说明
	|userId     |Y       |string   |用户ID

### 返回示例：
	{
	  "status": 0
	}

## 6. 获取一级或某个二级分类列表
### 请求URL：
	http://localhost:5000/manage/category/list

### 请求方式：
	GET

### 参数类型: query

	|参数		|是否必选 |类型     |说明
	|parentId    |Y       |string   |父级分类的ID

### 返回示例：
    一级分类:
      {
        "status": 0,
        "data": [
          {
            "parentId": "0",
            "_id": "5c2ed631f352726338607046",
            "name": "分类001",
            "__v": 0
          },
          {
            "parentId": "0",
            "_id": "5c2ed647f352726338607047",
            "name": "分类2",
            "__v": 0
          },
          {
            "parentId": "0",
            "_id": "5c2ed64cf352726338607048",
            "name": "1分类3",
            "__v": 0
          }
        ]
      }
    二级分类
      {
        "status": 0,
        "data": [
          {
            "parentId": "5c2ed64cf352726338607048",
            "_id": "5c2ed65df352726338607049",
            "name": "分类3333",
            "__v": 0
          },
          {
            "parentId": "5c2ed64cf352726338607048",
            "_id": "5c2ed66ff35272633860704a",
            "name": "分类34",
            "__v": 0
          }
        ]
      }
  
      
## 7. 添加分类
### 请求URL：
    http://localhost:5000/manage/category/add

### 请求方式：
    POST

### 参数类型:

    |参数		|是否必选 |类型     |说明
    |parentId      |Y       |string   |父级分类的ID
    |categoryName  |Y       |string   |名称

### 返回示例：
    添加一级分类:
        {
          "status": 0,
          "data": {
            "parentId": "0",
            "_id": "5c3ec1534594a00e5877b841",
            "name": "分类9",
            "__v": 0
          }
        }
    添加二级分类
        {
          "status": 0,
          "data": {
            "parentId": "5c2ed64cf352726338607048",
            "_id": "5c3ec1814594a00e5877b842",
            "name": "分类39",
            "__v": 0
          }
        }
          

## 8. 更新品类名称
### 请求URL：
    http://localhost:5000/manage/category/update

### 请求方式：
    POST

### 参数类型:

    |参数		|是否必选 |类型     |说明
    |categoryId    |Y       |string   |父级分类的ID
    |categoryName  |Y       |string   |名称

### 返回示例：
    {
      "status": 0
    }


## 9. 根据分类ID获取分类
### 请求URL：
    http://localhost:5000/manage/category/info

### 请求方式：
    GET

### 参数类型:

    |参数		|是否必选 |类型     |说明
    |categoryId    |Y       |string   |父级分类的ID

### 返回示例：
    {
      "status": 0,
      "data": {
        "parentId": "0",
        "_id": "5c2ed631f352726338607046",
        "name": "分类001",
        "__v": 0
      }
    }
    

## 10. 获取商品分页列表
### 请求URL：
    http://localhost:5000/manage/product/list

### 请求方式：
    GET

### 参数类型:

    |参数		|是否必选 |类型     |说明
    |pageNum    |Y       |Number   |页码
    |pageSize   |Y       |Number   |每页条目数

### 返回示例：
    {
        "status": 0,
        "data": {
            "pageNum": 1,
            "total": 12,
            "pages": 3,
            "pageSize": 5,
            "list": [
                {
                    "status": 1,
                    "imgs": [
                        "image-1559402396338.jpg"
                    ],
                    "_id": "5ca9e05db49ef916541160cd",
                    "name": "联想ThinkPad 翼4809",
                    "desc": "年度重量级新品，X390、T490全新登场 更加轻薄机身设计9",
                    "price": 65999,
                    "pCategoryId": "5ca9d6c0b49ef916541160bb",
                    "categoryId": "5ca9db9fb49ef916541160cc",
                    "detail": "<p><span style=\"color: rgb(228,57,60);background-color: rgb(255,255,255);font-size: 12px;\">想你所需，超你所想！精致外观，轻薄便携带光驱，内置正版office杜绝盗版死机，全国联保两年！</span> 222</p>\n<p><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\">联想（Lenovo）扬天V110 15.6英寸家用轻薄便携商务办公手提笔记本电脑 定制【E2-9010/4G/128G固态】 2G独显 内置</span></p>\n<p><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\">99999</span></p>\n",
                    "__v": 0
                },
                {
                    "status": 1,
                    "imgs": [
                        "image-1559402448049.jpg",
                        "image-1559402450480.jpg"
                    ],
                    "_id": "5ca9e414b49ef916541160ce",
                    "name": "华硕(ASUS) 飞行堡垒",
                    "desc": "15.6英寸窄边框游戏笔记本电脑(i7-8750H 8G 256GSSD+1T GTX1050Ti 4G IPS)",
                    "price": 6799,
                    "pCategoryId": "5ca9d6c0b49ef916541160bb",
                    "categoryId": "5ca9db8ab49ef916541160cb",
                    "detail": "<p><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\">华硕(ASUS) 飞行堡垒6 15.6英寸窄边框游戏笔记本电脑(i7-8750H 8G 256GSSD+1T GTX1050Ti 4G IPS)火陨红黑</span>&nbsp;</p>\n<p><span style=\"color: rgb(228,57,60);background-color: rgb(255,255,255);font-size: 12px;\">【4.6-4.7号华硕集体放价，大牌够品质！】1T+256G高速存储组合！超窄边框视野无阻，强劲散热一键启动！</span>&nbsp;</p>\n",
                    "__v": 0
                },
                {
                    "status": 2,
                    "imgs": [
                        "image-1559402436395.jpg"
                    ],
                    "_id": "5ca9e4b7b49ef916541160cf",
                    "name": "你不知道的JS（上卷）",
                    "desc": "图灵程序设计丛书： [You Don't Know JS:Scope & Closures] JavaScript开发经典入门图书 打通JavaScript的任督二脉",
                    "price": 35,
                    "pCategoryId": "0",
                    "categoryId": "5ca9d6c9b49ef916541160bc",
                    "detail": "<p style=\"text-align:start;\"><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\">图灵程序设计丛书：你不知道的JavaScript（上卷）</span> <span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\"><strong>[You Don't Know JS:Scope &amp; Closures]</strong></span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(227,57,60);background-color: rgb(255,255,255);font-size: 12px;\">JavaScript开发经典入门图书 打通JavaScript的任督二脉 领略语言内部的绝美风光</span>&nbsp;</p>\n",
                    "__v": 0
                },
                {
                    "status": 2,
                    "imgs": [
                        "image-1554638240202.jpg"
                    ],
                    "_id": "5ca9e5bbb49ef916541160d0",
                    "name": "美的(Midea) 213升-BCD-213TM",
                    "desc": "爆款直降!大容量三口之家优选! *节能养鲜,自动低温补偿,36分贝静音呵护",
                    "price": 1388,
                    "pCategoryId": "5ca9d695b49ef916541160ba",
                    "categoryId": "5ca9d9cfb49ef916541160c4",
                    "detail": "<p style=\"text-align:start;\"><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;font-family: Arial, \"microsoft yahei;\">美的(Midea) 213升 节能静音家用三门小冰箱 阳光米 BCD-213TM(E)</span></p>\n<p><span style=\"color: rgb(228,57,60);background-color: rgb(255,255,255);font-size: 12px;font-family: tahoma, arial, \"Microsoft YaHei\", \"Hiragino Sans GB\", u5b8bu4f53, sans-serif;\">【4.8美的大牌秒杀日】爆款直降!大容量三口之家优选! *节能养鲜,自动低温补偿,36分贝静音呵护! *每天不到一度电,省钱又省心!</span>&nbsp;</p>\n",
                    "__v": 0
                },
                {
                    "status": 1,
                    "imgs": [
                        "image-1554638403550.jpg"
                    ],
                    "_id": "5ca9e653b49ef916541160d1",
                    "name": "美的（Midea）KFR-35GW/WDAA3",
                    "desc": "正1.5匹 变频 智弧 冷暖 智能壁挂式卧室空调挂机",
                    "price": 2499,
                    "pCategoryId": "5ca9d695b49ef916541160ba",
                    "categoryId": "5ca9da1ab49ef916541160c6",
                    "detail": "<p style=\"text-align:start;\"><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\">美的（Midea）正1.5匹 变频 智弧 冷暖 智能壁挂式卧室空调挂机 KFR-35GW/WDAA3@</span></p>\n<p style=\"text-align:start;\"></p>\n<p><span style=\"color: rgb(228,57,60);background-color: rgb(255,255,255);font-size: 12px;\">【4.8美的大牌秒杀日】提前加入购物车！2299元成交价！前50名下单送赠品加湿型电风扇，赠完即止！8日0点开抢！</span><a href=\"https://sale.jd.com/mall/LKHdqZUIYk.html\" target=\"_blank\"><span style=\"color: rgb(94,105,173);background-color: rgb(255,255,255);font-size: 12px;\">更有无风感柜挂组合套购立减500元！猛戳！！</span></a>&nbsp;</p>\n",
                    "__v": 0
                }
            ]
        }
    }

## 11. 根据ID/Name搜索产品分页列表
### 请求URL：
    http://localhost:5000/manage/product/search?pageNum=1&pageSize=5&productName=T

### 请求方式：
    GET

### 参数类型:
    |参数		|是否必选 |类型     |说明
    |pageNum       |Y       |Number   |页码
    |pageSize      |Y       |Number   |每页条目数
    |productName   |N       |String   |根据商品名称搜索
    |productDesc   |N       |String   |根据商品描述搜索

### 返回示例：
    {
        "status": 0,
        "data": {
            "pageNum": 1,
            "total": 3,
            "pages": 1,
            "pageSize": 5,
            "list": [
                {
                    "status": 1,
                    "imgs": [
                        "image-1559402396338.jpg"
                    ],
                    "_id": "5ca9e05db49ef916541160cd",
                    "name": "联想ThinkPad 翼4809",
                    "desc": "年度重量级新品，X390、T490全新登场 更加轻薄机身设计9",
                    "price": 65999,
                    "pCategoryId": "5ca9d6c0b49ef916541160bb",
                    "categoryId": "5ca9db9fb49ef916541160cc",
                    "detail": "<p><span style=\"color: rgb(228,57,60);background-color: rgb(255,255,255);font-size: 12px;\">想你所需，超你所想！精致外观，轻薄便携带光驱，内置正版office杜绝盗版死机，全国联保两年！</span> 222</p>\n<p><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\">联想（Lenovo）扬天V110 15.6英寸家用轻薄便携商务办公手提笔记本电脑 定制【E2-9010/4G/128G固态】 2G独显 内置</span></p>\n<p><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;\">99999</span></p>\n",
                    "__v": 0
                },
                {
                    "status": 2,
                    "imgs": [
                        "image-1554638240202.jpg"
                    ],
                    "_id": "5ca9e5bbb49ef916541160d0",
                    "name": "美的(Midea) 213升-BCD-213TM",
                    "desc": "爆款直降!大容量三口之家优选! *节能养鲜,自动低温补偿,36分贝静音呵护",
                    "price": 1388,
                    "pCategoryId": "5ca9d695b49ef916541160ba",
                    "categoryId": "5ca9d9cfb49ef916541160c4",
                    "detail": "<p style=\"text-align:start;\"><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;font-family: Arial, \"microsoft yahei;\">美的(Midea) 213升 节能静音家用三门小冰箱 阳光米 BCD-213TM(E)</span></p>\n<p><span style=\"color: rgb(228,57,60);background-color: rgb(255,255,255);font-size: 12px;font-family: tahoma, arial, \"Microsoft YaHei\", \"Hiragino Sans GB\", u5b8bu4f53, sans-serif;\">【4.8美的大牌秒杀日】爆款直降!大容量三口之家优选! *节能养鲜,自动低温补偿,36分贝静音呵护! *每天不到一度电,省钱又省心!</span>&nbsp;</p>\n",
                    "__v": 0
                },
                {
                    "status": 1,
                    "imgs": [
                        "image-1554638676149.jpg",
                        "image-1554638683746.jpg"
                    ],
                    "_id": "5ca9e773b49ef916541160d2",
                    "name": "联想ThinkPad X1 Carbon",
                    "desc": "英特尔酷睿i5 14英寸轻薄笔记本电脑（i5-8250U 8G 256GSSD FHD）黑色",
                    "price": 9999,
                    "pCategoryId": "5ca9d6c0b49ef916541160bb",
                    "categoryId": "5ca9db78b49ef916541160ca",
                    "detail": "<p style=\"text-align:start;\"><span style=\"color: rgb(102,102,102);background-color: rgb(255,255,255);font-size: 16px;font-family: Arial, \"microsoft yahei;\">联想ThinkPad X1 Carbon 2018（09CD）英特尔酷睿i5 14英寸轻薄笔记本电脑（i5-8250U 8G 256GSSD FHD）黑色</span></p>\n<p><span style=\"color: rgb(228,57,60);background-color: rgb(255,255,255);font-size: 12px;font-family: tahoma, arial, \"Microsoft YaHei\", \"Hiragino Sans GB\", u5b8bu4f53, sans-serif;\">年度重量级新品，X390、T490全新登场 更加轻薄机身设计，全面的配置升级，让工作更便捷，让生活更轻松</span><a href=\"https://pro.jd.com/mall/active/2M4o7NTzHH6jEJXS7VbpbTAANQB9/index.html\" target=\"_blank\"><span style=\"color: rgb(94,105,173);background-color: rgb(255,255,255);font-size: 12px;font-family: tahoma, arial, \"Microsoft YaHei\", \"Hiragino Sans GB\", u5b8bu4f53, sans-serif;\">4月9日京东震撼首发，火爆预约</span></a>&nbsp;</p>\n",
                    "__v": 0
                }
            ]
        }
    }

## 12. 添加商品
### 请求URL：
    http://localhost:5000/manage/product/add

### 请求方式：
    POST

### 参数类型:
    |参数		       |是否必选 |类型     |说明
    |categoryId    |Y       |string   |分类ID
    |pCategoryId   |Y       |string   |父分类ID
    |name          |Y       |string   |商品名称
    |desc          |N       |string   |商品描述
    |price         |N       |string   |商品价格
    |detail        |N       |string   |商品详情
    |imgs          |N       |array   |商品图片名数组

### 返回示例：
    {
        "status": 0,
        "data": {
            "status": 1,
            "imgs": [
                "image-1559467198366.jpg"
            ],
            "_id": "5cf394d29929a304dcc0c6eb",
            "name": "商品A",
            "desc": "一个笔记本",
            "price": 11111,
            "detail": "<p><strong>abc</strong></p>\n",
            "pCategoryId": "5ca9d6c0b49ef916541160bb",
            "categoryId": "5ca9db78b49ef916541160ca",
            "__v": 0
        }
    }

## 13. 更新商品
### 请求URL：
    http://localhost:5000/manage/product/update

### 请求方式：
    POST

### 参数类型:
    |参数		       |是否必选 |类型     |说明
    |_id           |Y       |string   |商品ID
    |categoryId    |Y       |string   |分类ID
    |pCategoryId   |Y       |string   |父分类ID
    |name          |Y       |string   |商品名称
    |desc          |N       |string   |商品描述
    |price         |N       |string   |商品价格
    |detail        |N       |string   |商品详情
    |imgs          |N       |array   |商品图片名数组

### 返回示例：
    {
      "status": 0
    }

## 14. 对商品进行上架/下架处理
### 请求URL：
    http://localhost:5000/manage/product/updateStatus

### 请求方式：
    POST

### 参数类型:

    |参数		      |是否必选 |类型     |说明
    |productId    |Y       |string   |商品名称
    |status       |Y       |number   |商品状态值

### 返回示例：
    {
      "status": 0
    }

## 15. 上传图片
### 请求URL：
    http://localhost:5000/manage/img/upload

### 请求方式：
    POST

### 参数类型:

    |参数		|是否必选 |类型     |说明
    |image  |Y       |文件   |图片文件

### 返回示例：
    {
        "status": 0,
        "data": {
            "name": "image-1559466841118.jpg",
            "url": "http://localhost:5000/upload/image-1559466841118.jpg"
        }
    }

## 16. 删除图片
### 请求URL：
    http://localhost:5000/manage/img/delete

### 请求方式：
    POST

### 参数类型:

    |参数		|是否必选 |类型     |说明
    |name    |Y       |string   |图片文件名

### 返回示例：
    {
      "status": 0
    }

## 17. 添加角色

### 请求URL：
    http://localhost:5000/manage/role/add

### 请求方式：
    POST

### 参数类型:
    |参数		     |是否必选 |类型     |说明
    |roleName    |Y       |string   |角色名称

### 返回示例：
    {
        "status": 0,
        "data": {
            "menus": [],
            "_id": "5cf39a319929a304dcc0c6ec",
            "name": "角色x",
            "create_time": 1559468593702,
            "__v": 0
        }
    }

## 18. 获取角色列表
### 请求URL：
    http://localhost:5000/manage/role/list

### 请求方式：
    GET

### 参数类型: 
    无

### 返回示例：
    {
        "status": 0,
        "data": [
            {
                "menus": [
                    "/role",
                    "/charts/bar",
                    "/home",
                    "/category"
                ],
                "_id": "5ca9eaa1b49ef916541160d3",
                "name": "测试",
                "create_time": 1554639521749,
                "__v": 0,
                "auth_time": 1558679920395,
                "auth_name": "test007"
            },
            {
                "menus": [
                    "/role",
                    "/charts/bar",
                    "/home",
                    "/charts/line",
                    "/category",
                    "/product",
                    "/products"
                ],
                "_id": "5ca9eab0b49ef916541160d4",
                "name": "经理",
                "create_time": 1554639536419,
                "__v": 0,
                "auth_time": 1558506990798,
                "auth_name": "test008"
            },
            {
                "menus": [
                    "/home",
                    "/products",
                    "/category",
                    "/product",
                    "/role"
                ],
                "_id": "5ca9eac0b49ef916541160d5",
                "name": "角色1",
                "create_time": 1554639552758,
                "__v": 0,
                "auth_time": 1557630307021,
                "auth_name": "admin"
            }
        ]
    }

## 19. 更新角色(给角色设置权限)
### 请求URL：
    http://localhost:5000/manage/role/update

### 请求方式：
    POST

### 参数类型:
  
    |参数		     |是否必选  |类型     |说明
    |_id          |Y       |string   |角色ID
    |menus        |Y       |array    |权限key数组
    |auth_time    |Y       |number   |权限时间
    |auth_name    |Y       |string   |权限人姓名

### 返回示例：
    {
        "status": 0,
        "data": {
            "menus": [
                "/role",
                "/charts/bar",
                "/home",
                "/category",
                "/user"
            ],
            "_id": "5ca9eaa1b49ef916541160d3",
            "name": "测试",
            "create_time": 1554639521749,
            "__v": 0,
            "auth_time": 1559469116470,
            "auth_name": "admin"
        }
    }

## 20. 获取天气信息(支持jsonp)
### 请求URL：
    http://api.map.baidu.com/telematics/v3/weather

### 请求方式：
    GET

### 参数类型:
    |参数		     |是否必选 |类型     |说明
    |location    |Y       |string   |城市名称
    |output      |Y       |string   |返回数据格式: json
    |ak          |Y       |string   |唯一的应用key(3p49MVra6urFRGOT9s8UBWr2)

### 返回示例：
    {
      "error": 0,
      "status": "success",
      "date": "2019-06-02",
      "results": [
        {
          "currentCity": "北京",
          "pm25": "119",
          "index": [
            {
              "des": "建议着长袖T恤、衬衫加单裤等服装。年老体弱者宜着针织长袖衬衫、马甲和长裤。",
              "tipt": "穿衣指数",
              "title": "穿衣",
              "zs": "舒适"
            },
            {
              "des": "不宜洗车，未来24小时内有雨，如果在此期间洗车，雨水和路上的泥水可能会再次弄脏您的爱车。",
              "tipt": "洗车指数",
              "title": "洗车",
              "zs": "不宜"
            },
            {
              "des": "各项气象条件适宜，无明显降温过程，发生感冒机率较低。",
              "tipt": "感冒指数",
              "title": "感冒",
              "zs": "少发"
            },
            {
              "des": "天气较好，赶快投身大自然参与户外运动，尽情感受运动的快乐吧。",
              "tipt": "运动指数",
              "title": "运动",
              "zs": "适宜"
            },
            {
              "des": "紫外线强度较弱，建议出门前涂擦SPF在12-15之间、PA+的防晒护肤品。",
              "tipt": "紫外线强度指数",
              "title": "紫外线强度",
              "zs": "弱"
            }
          ],
          "weather_data": [
            {
              "date": "周日 06月02日 (实时：30℃)",
              "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/duoyun.png",
              "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/leizhenyu.png",
              "weather": "多云转雷阵雨",
              "wind": "西南风3-4级",
              "temperature": "31 ~ 20℃"
            },
            {
              "date": "周一",
              "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/duoyun.png",
              "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/duoyun.png",
              "weather": "多云",
              "wind": "南风微风",
              "temperature": "34 ~ 20℃"
            },
            {
              "date": "周二",
              "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/leizhenyu.png",
              "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/leizhenyu.png",
              "weather": "雷阵雨",
              "wind": "东风微风",
              "temperature": "28 ~ 21℃"
            },
            {
              "date": "周三",
              "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/duoyun.png",
              "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/duoyun.png",
              "weather": "多云",
              "wind": "北风3-4级",
              "temperature": "33 ~ 19℃"
            }
          ]
        }
      ]
    }
