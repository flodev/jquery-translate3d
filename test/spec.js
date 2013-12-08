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
});