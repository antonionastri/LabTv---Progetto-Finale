export class RegisterDTO {
    constructor(
      public nome: string = "",
      public email: string = "",
      public password: string = "",
    ) { }
  }
  
  export class LoginDTO {
    constructor(
      public email: string = "",
      public password: string = "",
    ) { }
  }

export interface User {
    email: string;
    id: number;
    nome: string;
}

export interface LoggedUser {
    user: User;
    accessToken: string;
}

export class Contatti {
  constructor(
    public nome: string = "",
    public email: string = "",
    public telefono: string = "",
    public messaggio: string = "",
    public check: boolean = false
  ) { }
}
