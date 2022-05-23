export const assistance = (param:number,value:string)=> {
    return {
        type: "FAQS",
        payload: {
            param,
            value
        },
    }
}