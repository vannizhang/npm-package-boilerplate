import { greeting } from '.';

describe('test greeting', () => {
    it('should return correct greeting message', () => {
        expect(greeting('vannizhang')).toBe('hello vannizhang');
    });
});
