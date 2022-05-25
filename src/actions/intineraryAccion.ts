export const endPoint = (param:string)=> {
    return {
        type: "ENDPOINT",
        payload: param,
    }
}

export const languages = (param:string[])=> {
    return {
        type: "LANGUAGES",
        payload: param,
    }
}
export const meetPoint = (param:string)=> {
    return {
        type: "MEEETPOINT",
        payload: param,
    }
}
export const restrictions = (param:string)=> {
    return {
        type: "RESTRICTIONS",
        payload: param,
    }
}

export const stops = (param:string, value:string) => {
    return {
        type: "STOPS",
        payload: {
            param,
            value
        }
    }
}