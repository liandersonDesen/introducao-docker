import { PartialType } from '@nestjs/swagger'
import { CreateFilmesDto } from './create-filmes.dto';


export class UpdateFilmesDto extends PartialType(CreateFilmesDto) {}