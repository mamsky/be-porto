/*
  Warnings:

  - You are about to drop the column `tech` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Work` table. All the data in the column will be lost.
  - Added the required column `techId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionId` to the `Work` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "tech",
ADD COLUMN     "techId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Work" DROP COLUMN "description",
ADD COLUMN     "descriptionId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ArrTech" (
    "id" TEXT NOT NULL,
    "tech" TEXT NOT NULL,

    CONSTRAINT "ArrTech_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArrDesc" (
    "id" TEXT NOT NULL,
    "desc" TEXT,

    CONSTRAINT "ArrDesc_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_techId_fkey" FOREIGN KEY ("techId") REFERENCES "ArrTech"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_descriptionId_fkey" FOREIGN KEY ("descriptionId") REFERENCES "ArrDesc"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
