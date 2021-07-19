import { Palabras } from "./palabras.model";

export class Texto {

    constructor(
        public textoplano?: string,
        public palabras?: Palabras[]
    ) { }

}
