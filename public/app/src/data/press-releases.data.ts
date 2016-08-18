import { PressRelease } from '../models/press-release';

export class PressReleasesData {
  releases: PressRelease[] = [];

  constructor() {
    this.releases.push(new PressRelease(
      1,
      'app/img/press-releases/coca-cola.jpeg',
      'Coca-Cola sponsors Solar Decathlon at Georgia Tech',
      'Atlanta is home to 6,000,000 people. 2,000,000 more are expected by 2040.',
      `
Atlanta, Georgia has always been a an enduring city that has survived through hardships that what would have severely hindered others. By luck or destiny, Atlanta is still here today and continues to thrive. Atlanta is known as a city in the forest with a tree canopy more dense than most US cities. Rem Koolhaus says, “Atlanta is a landscape and not a city.”

This statement alludes to Atlanta’s nearly unregulated sprawl into the current 10 county metropolitan region that lacks high-density, urban form that a typical city of its size would.

Metro Atlanta is home to over 6 million people and had a growth rate of 1.27% in 2015 according to Forbes Inc. By 2040, the Atlanta Regional Commission (ARC) expects the Atlanta metro area to reach 8 million.`
    ));
  }

  public getPressRelease(id: number) {
    return Promise.resolve(this.releases[id - 1]).then(
      response => response as PressRelease
    );
  }
}
