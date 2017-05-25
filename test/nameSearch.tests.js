var greetedNames = ['Charne', 'Sandro', 'Andre', 'Charne'];

describe('The nameSearch function', function(){

    it('should nameSearch correctly', function(){
        assert.equal(nameSearch(0), false);
    });
    it('should nameSearch correctly', function(){
        assert.deepEqual(nameSearch(greetedNames), false);
    });
    it('should nameSearch correctly', function(){
        assert.deepEqual(nameSearch(greetedNames), true);
    });
});
