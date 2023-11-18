/*
  Warnings:

  - You are about to drop the column `total_pricein_cents` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `total_price_in_cents` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "total_pricein_cents",
ADD COLUMN     "total_price_in_cents" INTEGER NOT NULL;
