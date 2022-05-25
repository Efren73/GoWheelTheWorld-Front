export const tourName = (param:string)=> {
    return {
        type: "TOURNAME",
        payload: param,
    }
}

export const duration = (param:string)=> {
    return {
        type: "DURANTION",
        payload: param,
    }
}

export const typeOfActivity = (param:string[])=> {
    return {
        type: "TYPEOFACTIVITY",
        payload: param,
    }
}

export const privateTour = (param:boolean)=> {
    return {
        type: "PRIVATETOUR",
        payload: param,
    }
}

export const price = (param:number)=> {
    return {
        type: "PRICE",
        payload: param,
    }
}

export const document = (param:string)=> {
    return {
        type: "DOCUMENT",
        payload: param,
    }
}

export const description = (param:string)=> {
    return {
        type: "PRIVATETOUR",
        payload: param,
    }
}

export const groupTour  = (param:boolean)=> {
    return {
        type: "GROUPTOUR",
        payload: param,
    }
}

export const numberMaxTravelers = (param:number)=> {
    return {
        type: "NUMBERMAXTRAVELERES",
        payload: param,
    }
}

export const numberMinTravelers = (param:number)=> {
    return {
        type: "NUMBERMINTRAVELERS",
        payload: param,
    }
}

export const photos = (param:string)=> {
    return {
        type: "PHOTOS",
        payload: param,
    }
}

export const tourLink = (param:string)=> {
    return {
        type: "TOURLINK",
        payload: param,
    }
}

