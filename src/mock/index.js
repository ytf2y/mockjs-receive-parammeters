/**
 * Created by apple on 2019/9/9.
 */
import Mock from 'mockjs'

Mock.mock('/list','get',{
   "status":200,
    "list|5":[
        { "id|+1":1,"name":'@cname',"age|18-30":0,"address":'@county(true)',"phone|13500000000-19299999999":1 }
    ]
});

//get方式接收的参数 放在url中,需要用字符串提取的方式拿到参数;
/*Mock.mock(/\/login.*!/,'get',function(options){
    console.log(options);
});*/

//post方式接收的参数 放在body中,是个字符串
Mock.mock('/login','post',function(options){

    //获取参数
    var {username,password} = JSON.parse(options.body);

    //判断参数是否正确
    if( username == 'admin'&&password=='1234')
    {
        return { "status":200,msg:'登陆成功!' };
    }
    else
    {
        return { "status":422,msg:'用户名/密码错误!' };
    }

});


//需求: 用mockjs模拟一个分页接口( '/goodList' )
// 例如: 访问 '/goodList' ,传入参数: page=1,pageSize=5 返回数据格式为:
//{
//    "status":200,
//    "page":1,
//    "pageSize":5,
//    "total":3000,
//    "list":[
//        { "id":1,"name":'xxx',"price":100,"pic":'http://www.jpg' },
//        { "id":2,"name":'xxx',"price":200,"pic":'http://www.jpg' },
//        { "id":3,"name":'xxx',"price":500,"pic":'http://www.jpg' },
//        { "id":4,"name":'xxx',"price":200,"pic":'http://www.jpg' },
//        { "id":5,"name":'xxx',"price":600,"pic":'http://www.jpg' },
//    ]
//}

var data = [
    { "id":1,"name":'xxx',"price":100,"pic":'http://www.jpg' },
    { "id":2,"name":'xxx',"price":100,"pic":'http://www.jpg' },
    { "id":3,"name":'xxx',"price":100,"pic":'http://www.jpg' },
    { "id":4,"name":'xxx',"price":100,"pic":'http://www.jpg' },
    { "id":5,"name":'xxx',"price":100,"pic":'http://www.jpg' },
    { "id":6,"name":'xxx',"price":100,"pic":'http://www.jpg' },
    { "id":7,"name":'xxx',"price":100,"pic":'http://www.jpg' },
    { "id":8,"name":'xxx',"price":100,"pic":'http://www.jpg' },
    { "id":9,"name":'xxx',"price":100,"pic":'http://www.jpg' },
    { "id":10,"name":'xxx',"price":100,"pic":'http://www.jpg' },
    { "id":11,"name":'xxx',"price":100,"pic":'http://www.jpg' },
    { "id":12,"name":'xxx',"price":100,"pic":'http://www.jpg' },
    { "id":13,"name":'xxx',"price":100,"pic":'http://www.jpg' },
    { "id":14,"name":'xxx',"price":100,"pic":'http://www.jpg' },
    { "id":15,"name":'xxx',"price":100,"pic":'http://www.jpg' },
    { "id":16,"name":'xxx',"price":100,"pic":'http://www.jpg' },
    { "id":17,"name":'xxx',"price":100,"pic":'http://www.jpg' },
    { "id":18,"name":'xxx',"price":100,"pic":'http://www.jpg' },
    { "id":19,"name":'xxx',"price":100,"pic":'http://www.jpg' },
    { "id":20,"name":'xxx',"price":100,"pic":'http://www.jpg' }

];

//分页接口实现
Mock.mock('/goodList','post',function(options){
    //获取参数
    var {page,pageSize} = JSON.parse(options.body);

    var arr = data.slice( (page-1)*pageSize , page*pageSize );
    return {
        "status":200,
        "page": page,
        "pageSize":pageSize,
        "total":data.length,
        list:arr
    };
});

//需求2: 用mockjs模拟一个轮播图接口( '/carousel' )
// 例如: 访问 '/carousel' ,传入参数: count=3 返回数据格式为:
//{
//    "status":200,
//    "count":3,
//    "list":[
//        { "id":1,"name":'xxx',"link":'http://xxx.com',"pic":'http://www.jpg' },
//        { "id":2,"name":'xxx',"link":'http://xxx.com',"pic":'http://www.jpg' },
//        { "id":3,"name":'xxx',"link":'http://xxx.com',"pic":'http://www.jpg' }
//    ]
//}

