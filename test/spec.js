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
    });
});