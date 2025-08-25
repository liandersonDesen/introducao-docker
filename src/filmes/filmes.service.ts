import { Injectable, NotFoundException } from '@nestjs/common';
import { Filmes } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
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
        const foundID = await this.prisma.filmes.findUnique({ where: { id } })

        if (!foundID) {
            throw new NotFoundException(`Filme com ID ${id} não encontrado!`)
        }
        return foundID
    }
    async update(id: string, data): Promise<Filmes | null> {
        const foundID = await this.prisma.filmes.findUnique({ where: { id } })

        if (!foundID) {
            throw new NotFoundException(`Filme com ID ${id} não encontrado!`)
        }
        return await this.prisma.filmes.update({ where: { id }, data })
    }

    async remove(id: string): Promise<Filmes | null> {
        const foundID = await this.prisma.filmes.findUnique({ where: { id } })

        if (!foundID) {
            throw new NotFoundException(`Filme com ID ${id} não encontrado!`)
        }
        return await this.prisma.filmes.delete({ where: { id } })

    }

}
