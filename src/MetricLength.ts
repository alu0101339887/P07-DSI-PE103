/**
 * MetricLength es una clase que trabaja con sistema métrico que trabaja con gramos, kilogramos y toneladas
 */
export class MetricLength {
  constructor(private unit: number) {}

  public getCentimeters(): number {
      return this.unit * 100;
  }

  public getMeters(): number {
      return this.unit;
  }

  public getKilometers(): number {
      return this.unit / 1000;
  }
}