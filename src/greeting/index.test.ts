import { greeting } from '.';

describe('test greeting', () => {
    it('should return greeting message', () => {
        expect(greeting('vannizhang')).toBe('hello vannizhang');
    });
});
