

//保存
export const saveUsername = (username)=>{
    window.localStorage.setItem('username',username)
}

//获取
export const getUsername = ()=>{
    return window.localStorage.getItem('username')
}

//删除
export const removeUsername = ()=>{
    window.localStorage.removeItem('username')
}