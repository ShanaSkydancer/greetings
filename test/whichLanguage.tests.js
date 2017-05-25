describe('The whichLanguage function', function(){

    it('should whichLanguage correctly', function(){
        assert.equal(whichLanguage('english'), 'Hello, ');
    });
    it('should whichLanguage correctly', function(){
        assert.equal(whichLanguage('afrikaans'), 'Goeie dag, ');
    });
    it('should whichLanguage correctly', function(){
        assert.equal(whichLanguage('xhosa'), 'Mholweni, ');
    });
});
