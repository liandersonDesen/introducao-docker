import { Injectable, NotFoundException } from '@nestjs/common';
import { Filmes } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmesDto } from './dto/create-filmes.dto';

@Injectable()
export class FilmesService {
    constructor(private prisma:PrismaService){}
    
    async create(data:CreateFilmesDto):Promise<Filmes> {
        return this.prisma.filmes.create({ data });
    }
    async findAll(): Promise<Filmes[]> {
        return this.prisma.filmes.findMany()
    }
    async findById(id: string): Promise<Filmes | null> {
        const foundPlace = await this.prisma.filmes.findUnique({ where: { id } })

        if (!foundPlace) {
            throw new NotFoundException(`Local com ID ${id} não encontrado!`)
        }
        return foundPlace
    }
    async update(id: string, data): Promise<Filmes | null> {
        const foundId = await this.prisma.filmes.findUnique({ where: { id } })

        return await this.prisma.filmes.update({ where: { id }, data })
    }

    async remove(id: string): Promise<Filmes | null> {
        
        return await this.prisma.filmes.delete({ where: { id } })

    }

}
