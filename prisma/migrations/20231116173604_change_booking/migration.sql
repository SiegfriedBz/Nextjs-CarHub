/*
  Warnings:

  - You are about to drop the column `carId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the `Car` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `car_fuel_type` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `car_make` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `car_model` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `car_transmission` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `car_year` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_carId_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "carId",
ADD COLUMN     "car_fuel_type" TEXT NOT NULL,
ADD COLUMN     "car_make" TEXT NOT NULL,
ADD COLUMN     "car_model" TEXT NOT NULL,
ADD COLUMN     "car_price_per_day_in_cents" INTEGER NOT NULL DEFAULT 5200,
ADD COLUMN     "car_transmission" TEXT NOT NULL,
ADD COLUMN     "car_year" TEXT NOT NULL;

-- DropTable
DROP TABLE "Car";
