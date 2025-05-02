-- CreateTable
CREATE TABLE "ArrTechWork" (
    "id" TEXT NOT NULL,
    "techstack" TEXT NOT NULL,
    "techId" TEXT NOT NULL,

    CONSTRAINT "ArrTechWork_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ArrTechWork" ADD CONSTRAINT "ArrTechWork_techId_fkey" FOREIGN KEY ("techId") REFERENCES "Work"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
