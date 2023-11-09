import { IsString, IsNumber, Min, Max, IsLongitude, IsLatitude } from "class-validator";

export class CreateReportDto {
  @IsNumber()
  price: number;

  @IsString()
  model: string;

  @IsString()
  make: string;

  @IsNumber()
  @Min(1930)
  @Max(2024)
  year: number;

  @IsNumber()
  @IsLongitude()
  long: number;

  @IsNumber()
  @IsLatitude()
  lat: number;

  @IsNumber()
  mileage: number;
}