/*
  Warnings:

  - Changed the type of `car_year` on the `Booking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "car_year",
ADD COLUMN     "car_year" INTEGER NOT NULL;
