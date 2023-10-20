/**
 * 
 */

import { getMonth } from './index';


describe('getMonth', () => {
  it('devrait renvoyer "janvier" pour la date correspondant à janvier', () => {
    const januaryDate = new Date('2023-01-01');
    expect(getMonth(januaryDate)).toBe('janvier');
  });

  it('devrait renvoyer "juillet" pour la date correspondant à juillet', () => {
    const julyDate = new Date('2023-07-01');
    expect(getMonth(julyDate)).toBe('juillet');
  });

});





