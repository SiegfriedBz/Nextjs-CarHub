/*
  Warnings:

  - You are about to drop the column `car_price_per_day_in_cents` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `total_pricein_cents` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "car_price_per_day_in_cents",
ADD COLUMN     "total_pricein_cents" INTEGER NOT NULL;
