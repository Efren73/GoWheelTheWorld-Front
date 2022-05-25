export const assistance = (param:number,value:boolean)=> {
    return {
        type: "ASSISTANCE",
        payload: {
            param,
            value
        },
    }
}

export const equipment = (param:number,value:boolean)=> {
    return {
        type: "EQUIPMENT",
        payload: {
            param,
            value
        },
    }
}

export const places = (param:number,value:boolean)=> {
    return {
        type: "PLACES",
        payload: {
            param,
            value
        },
    }
}

export const restrooms = (param:number,value:boolean)=> {
    return {
        type: "RESTROOMS",
        payload: {
            param,
            value
        },
    }
}

export const transportation = (param:number,value:boolean)=> {
    return {
        type: "TRANSPORTATION",
        payload: {
            param,
            value
        },
    }
}
