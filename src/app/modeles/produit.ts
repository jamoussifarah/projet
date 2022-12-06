import { Commentaire } from "./commentaire";

export class Produit {
    constructor(
        public id:number,
        public libelle:string,
       public img :string,
       public prix :number,
       public disponible :boolean,
       public datePublication :Date,
       public auteur :string, 
       public comments:Commentaire[]){}
}
