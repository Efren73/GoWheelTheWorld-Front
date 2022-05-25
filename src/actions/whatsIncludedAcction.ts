export const accesibility = (param:string, value:boolean)=> {
    return {
        type: "ACCESSIBILITY",
        payload: {
            param, 
            value
        }
    }
}

export const food = (param:string, value:boolean)=> {
    return {
        type: "FOOD",
        payload: {
            param, 
            value
        }
    }
}

export const general = (param:string, value:boolean)=> {
    return {
        type: "GENERAL",
        payload: {
            param, 
            value
        }
    }
}


export const transport = (param:string, value:boolean)=> {
    return {
        type: "TRANSPORT",
        payload: {
            param, 
            value
        }
    }
}

