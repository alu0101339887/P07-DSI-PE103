/**
 * ImperialMass es una clase que trabaja con sistema métrico que trabaja con onzas, libras, piedras, centenas y toneladas.
 */
export class ImperialMass {
  constructor(private unit: number) {}

  public getOunces(): number {
    return this.unit * 16;
  }

  public getPounds(): number {
    return this.unit;
  }

  public getStones(): number {
    return this.unit / 14;
  }

  public getHundredweights(): number {
    return this.unit / 2000;
  }

  public getTons(): number {
    return this.unit / 2240;
  }
}

