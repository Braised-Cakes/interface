import utilInterface from './app.js'




let def = {
    status : 1,
    msg : '调用成功',
    data : {
        data : [{
            name : '默认用户'
        }]
    }
}
let result = {
    status : 0,
	count : 10,
    data : {
        data : [{
            name : 'Braised-Cakes'
        },{
            name : ''
        }]
    }
}

console.log(utilInterface(def, result));