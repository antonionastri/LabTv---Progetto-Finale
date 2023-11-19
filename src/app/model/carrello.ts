

export interface Carrello {
  id?: number
  userId:number 
  title: string
  img:string
  idFilm: number
  poster:string
}

export interface CarrelloDTO {
  userId:number 
  title: string
  img:string
  idFilm: number
  id:number
}