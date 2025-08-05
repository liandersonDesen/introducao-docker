import { classificacao } from "@prisma/client";

export class CreateFilmesDto{
    titulo:string;
    ano:number
    duracao:number
    genero:string
    classificacao:classificacao
}