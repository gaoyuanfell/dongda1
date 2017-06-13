/*查询接口*/
export interface Query{

}
/*分页接口*/
export interface Page<T> extends Query{
    pageIndex?: number
    pageSize?: number
    pageStart?: number
    totalPage?: number
    totalCount?: number
    list?: T[]
}
/*请求结果接口*/
export interface Result<T> {
    code?: number
    doc?: T
    msg?: string
}

export interface User{
    user?:string
    password?:string
}

export class Register{
    password:string = '';
    _password:string = '';
    type:number = 1;
    company:string = '';
    address:string = '';
    email:string = '';
    phone:string = '';
    nickName:string = '';
}
