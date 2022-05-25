export const childrenAge = (param:number)=> {
    return {
        type: "CHILDRENAGE",
        payload: param,
    }
}

export const childrenAgePay = (param:number)=> {
    return {
        type: "CHILDRENAGEPAY",
        payload: param,
    }
}

export const childrenAllowed = (param:boolean)=> {
    return {
        type: "CHILDRENALLOWED",
        payload: param,
    }
}

export const childrenHeight = (param:number)=> {
    return {
        type: "CHILDRENHEIGHT",
        payload: param,
    }
}