import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateFilmesDto } from './dto/create-filmes.dto';
import { FilmesService } from './filmes.service';
import { UpdateFilmesDto } from './dto/update-filmes.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger'; 
import { Filmes } from '@prisma/client';
@Controller('filmes')
export class FilmesController {
    constructor(private filmService:FilmesService){}
    @Post()
    @ApiOperation({ summary: 'Criar um novo filme' })
    @ApiResponse({ status: 201, description: 'Filme criado com sucesso'})
    async CreateFilm(@Body() data:CreateFilmesDto){
        return this.filmService.create(data)
    } 
    @Get()
    @ApiOperation({ summary: 'Listar todos os filmes' })
    @ApiResponse({ status: 200, description: 'Lista de filmes' })
    async findAllFilm(){
        return this.filmService.findAll()
    }
    @Get(':id')
    @ApiOperation({ summary: 'Buscar um filme por ID' })
    @ApiResponse({ status: 200, description: 'Filme encontrado'})
    @ApiResponse({ status: 404, description: 'Filme não encontrado' })
    async findOneFilm(@Param('id') id: string) {
        return this.filmService.findById(id)
    }

    @Put(':id')
    @ApiOperation({ summary: 'Atualizar um filme por ID' })
    @ApiResponse({ status: 200, description: 'Filme atualizado'})
    @ApiResponse({ status: 404, description: 'Filme não encontrado' })
    async updateFilm(@Param('id') id: string, @Body() dto: UpdateFilmesDto) {
        return this.filmService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remover um filme por ID' })
    @ApiResponse({ status: 200, description: 'Filme removido com sucesso' })
    @ApiResponse({ status: 404, description: 'Filme não encontrado' })
    async deleteFilm(@Param('id') id: string) {
        return this.filmService.remove(id);
    }
}
