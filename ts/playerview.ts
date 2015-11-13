module ImprovedInitiative {
  export class PlayerDisplayCreature {
    Name: string;
    HPPercentage: number;
    Initiative: number;

    constructor(creature: ICreature){
      this.Name = creature.Alias() + creature.IndexLabel;
      this.HPPercentage = creature.CurrentHP() / creature.MaxHP;
      this.Initiative = creature.Initiative();
    }
  }
}