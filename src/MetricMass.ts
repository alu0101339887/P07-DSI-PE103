/**
 * MetricMass es una clase que trabaja con sistema métrico que trabaja con gramos, kilogramos y toneladas
 */
export class MetricMass {
  constructor(private unit: number) {}

  public getGrams(): number {
      return this.unit
  }

  public getKilograms(): number {
      return this.unit / 1000;
  }

  public getTonnes(): number {
      return this.unit / 1000000;
  }
}