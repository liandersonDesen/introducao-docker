import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateFilmesDto } from './dto/create-filmes.dto';
import { FilmesService } from './filmes.service';
import { UpdateFilmesDto } from './dto/update-filmes.dto';

@Controller('filmes')
export class FilmesController {
    constructor(private filmService:FilmesService){}
    @Post()
    async CreateFilm(@Body() data:CreateFilmesDto){
        return this.filmService.create(data)
    } 
    @Get()
    async findAllFilm(){
        return this.filmService.findAll()
    }
    @Get(':id')
    async findOneFilm(@Param('id') id: string) {
        return this.filmService.findById(id)
    }

    @Put(':id')
    async updateFilm(@Param('id') id: string, @Body() dto: UpdateFilmesDto) {
        return this.filmService.update(id, dto);
    }

    @Delete(':id')
    async deleteFilm(@Param('id') id: string) {
        return this.filmService.remove(id);
    }
}
