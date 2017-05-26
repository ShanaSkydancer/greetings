var greetedNames = ['Charne', 'Sandro', 'Andre', 'Charne'];

describe('The nameSearch function', function(){

    it('should return false correctly', function(){
        assert.equal(nameSearch(0), false);
    });
    it('should return false correctly', function(){
        assert.deepEqual(nameSearch(greetedNames), false);
    });
    it('should return true correctly', function(){
        assert.deepEqual(nameSearch(greetedNames), true);
    });
});
