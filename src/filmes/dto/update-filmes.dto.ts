import { PartialType } from '@nestjs/mapped-types';
import { CreateFilmesDto } from './create-filmes.dto';


export class UpdateFilmesDto extends PartialType(CreateFilmesDto) {}