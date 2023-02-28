import { type } from "os"


type Url=string
type Json=
    |   string
    |   number
    |   boolean
    |   null
    |   { [property:string]: Json }
    |  Json[]

    type TprojectId = String

type TProject= {
    id:TprojectId
    project_name:string
    description: string
    technology: string 
    video: Url
    picture: Url
}
type TAPIProjectDetailResponse=TProject 

type TAPIProjectResponse={
    length: number
    data: TProject[]
    error?:string 
}