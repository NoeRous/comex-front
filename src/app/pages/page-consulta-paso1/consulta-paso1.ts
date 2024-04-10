export interface Flujo{
    cod_flujo:number,
    des:string
}

export interface Cuantitativa{
    cod_cuantitativa:number,
    des:string,
    cod_flujo:number
}

export interface Periodicidad{
    cod_periodicidad:number,
    des:string
}

export interface Gestion{
    gestion:string
}