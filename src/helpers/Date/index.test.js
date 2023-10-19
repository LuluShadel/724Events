/**
 * 
 */

import { getMonth } from './index';

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            // to implement
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            // to implement
        });
    });
})



describe('getMonth', () => {
  it('devrait renvoyer "janvier" pour la date correspondant à janvier', () => {
    const januaryDate = new Date('2023-01-01');
    expect(getMonth(januaryDate)).toBe('janvier');
  });

  it('devrait renvoyer "février" pour la date correspondant à février', () => {
    const februaryDate = new Date('2023-02-01');
    expect(getMonth(februaryDate)).toBe('février');
  });

  // Ajoutez d'autres tests pour chaque mois ici
});





