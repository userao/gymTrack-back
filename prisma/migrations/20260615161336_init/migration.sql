-- CreateTable
CREATE TABLE "UserTraining" (
    "userId" INTEGER NOT NULL,
    "trainingId" INTEGER NOT NULL,

    CONSTRAINT "UserTraining_pkey" PRIMARY KEY ("userId","trainingId")
);

-- AddForeignKey
ALTER TABLE "UserTraining" ADD CONSTRAINT "UserTraining_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTraining" ADD CONSTRAINT "UserTraining_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Training"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
