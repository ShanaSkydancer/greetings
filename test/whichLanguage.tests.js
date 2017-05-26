describe('The whichLanguage function', function(){

    it('should greet in english correctly', function(){
        assert.equal(whichLanguage('english'), 'Hello, ');
    });
    it('should greet in afrikaans correctly', function(){
        assert.equal(whichLanguage('afrikaans'), 'Goeie dag, ');
    });
    it('should greet in xhosa correctly', function(){
        assert.equal(whichLanguage('xhosa'), 'Mholweni, ');
    });
});
