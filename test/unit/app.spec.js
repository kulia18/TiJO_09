describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {
        it('should return false, if the third parametr is not a number', function () {
            expect(answer.calculateArea(1, 15, 'x', 'Zle', 'Dobrze')).toBe(false);
        });
        it('should return false, if the fifth parametr is not a string', function () {
            expect(answer.calculateArea(5, 5, 5, 'Dobrze', 999)).toBe(false);
        });
        it('should return false, if there is not enough parametrs', function () {
            expect(answer.calculateArea(1, 1)).toBe(false);
        });
        it('should return false, if the first parametr is not a number', function () {
            expect(answer.calculateArea('x', 5, 5, 'Dobrze', 'Zle')).toBe(false);
        });
        it('should return Dobrze message, if all parametrss are proper', function () {
            expect(answer.calculateArea(30, 10, 1, 'Dobrze', 'Zle')).toEqual({ area : 20, message : 'Dobrze' });
        });
        it('should return Zle message, if all paramsetrs are proper', function () {
            expect(answer.calculateArea(10, 10, 2, 'Dobrze', 'Zle')).toEqual({ area : -10, message : 'Zle' });
        });
        it('should return Big null message, if all parametrss are proper', function () {
            expect(answer.calculateArea(0, 0, 0, 'Dobrze', 'Zle')).toEqual({area: 0, message: 'Big null'});
        });
        it('insert 0 as second and third value', function () {
            expect(answer.calculateArea(50, 0, 0, 'Dobrze', 'Zle')).toEqual({ area : 50, message : 'Dobrze' });
        });
        it('insert 0 as first and third value', function () {
            expect(answer.calculateArea(0, 50, 0, 'Dobrze', 'Zle')).toEqual({ area : 50, message : 'Dobrze' });
        });
        it('insert 0 as first and second value', function () {
            expect(answer.calculateArea(0, 0, 50, 'Dobrze', 'Zle')).toEqual({ area : 0, message : 'Big null' });
        });
    });
});
