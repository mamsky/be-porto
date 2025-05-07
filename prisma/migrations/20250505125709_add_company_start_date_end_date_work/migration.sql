/*
  Warnings:

  - You are about to drop the column `date` on the `Work` table. All the data in the column will be lost.
  - Added the required column `company` to the `Work` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `Work` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Work` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Work" DROP COLUMN "date",
ADD COLUMN     "company" TEXT NOT NULL,
ADD COLUMN     "endDate" TEXT NOT NULL,
ADD COLUMN     "startDate" TEXT NOT NULL;
