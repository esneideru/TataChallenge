export class UsuarioToken {


    constructor(
        public nombre?: string,
        public email?: string,
        public token?: string,
        public expiracion?: Date,
    ) { }


}