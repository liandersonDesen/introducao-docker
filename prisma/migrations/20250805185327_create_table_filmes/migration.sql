-- CreateEnum
CREATE TYPE "public"."classificacao" AS ENUM ('Livre', '+10', '+12', '+14', '+16', '+18');

-- CreateTable
CREATE TABLE "public"."Filmes" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "duracao" INTEGER NOT NULL,
    "genero" TEXT NOT NULL,
    "classificacao" "public"."classificacao" NOT NULL DEFAULT 'Livre',

    CONSTRAINT "Filmes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Filmes_titulo_key" ON "public"."Filmes"("titulo");
