declare type GDF = ((Config:Object)=>String)

declare interface GDArray{
    [i:string]:GDF
}
declare var GD:GDArray;