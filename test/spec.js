
describe('jquery-translate 3d test', function() {

    it('translates 3d', function() {
        loadFixtures('testdiv.html');
        position = $('#testdiv').offset();
        $('#testdiv').translate3d({x: 5, y: 5});
        newPosition = $('#testdiv').offset();
        expect(newPosition.left - position.left).toEqual(5);
        expect(newPosition.top - position.top).toEqual(5);
        $('#testdiv').translate3d({x: 10});
        newPosition2 = $('#testdiv').offset();
        expect(newPosition2.left - position.left).toEqual(15);
    });

    it('rotates', function() {
        loadFixtures('testdiv.html');
        $('#testdiv').translate3d({rotate: 20});
        expect($('#testdiv').attr('style').indexOf('rotate(20deg)')).not.toEqual(-1);
        // test keep other values untouched
        $('#testdiv').translate3d({x: 20});
        expect($('#testdiv').attr('style').indexOf('rotate(20deg)')).not.toEqual(-1);
        // stays the same value and won't get calculated with previous
        $('#testdiv').translate3d({rotate: 20});
        expect($('#testdiv').attr('style').indexOf('rotate(20deg)')).not.toEqual(-1);
    });

    it('throws if scale isnt an object', function() {
        loadFixtures('testdiv.html');
        expect(function() { $('#testdiv').translate3d({scale: "test"}); }).toThrow(new Error('scale needs to be an object'));
    });

    it('scales', function() {
        loadFixtures('testdiv.html');
        $('#testdiv').translate3d({rotate: 20});
        // initially deactivated
        expect($('#testdiv').attr('style').indexOf('scale')).toEqual(-1);

        // then activated
        $('#testdiv').translate3d({scale: {x: 1.3}});
        expect($('#testdiv').attr('style').indexOf('scale3d(1.3, 1, 1)')).not.toEqual(-1);

        // and keeps the values despite of other params
        $('#testdiv').translate3d({rotate: 20});
        expect($('#testdiv').attr('style').indexOf('scale3d(1.3, 1, 1)')).not.toEqual(-1);

        // y,z tests
        $('#testdiv').translate3d({scale: {x: 1.4, y: 0.8, z: 0.7}});
        expect($('#testdiv').attr('style').indexOf('scale3d(1.4, 0.8, 0.7)')).not.toEqual(-1);
    });
});