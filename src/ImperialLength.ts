/**
 * ImperialLength es una clase que trabaja con sistema métrico que trabaja con pulgadas, pies, yardas y millas.
 */
export class ImperialLength {
  constructor(private unit: number) {}

  public getInches(): number {
      return this.unit * 12;
  }

  public getFeet(): number {
      return this.unit;
  }

  public getYards(): number {
      return this.unit / 3;
  }

  public getMiles(): number {
      return this.unit / 5280;
  }
}