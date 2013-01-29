var should = require('should');
var mostcommon = require('../index');
describe('Most Common', function() {
  it('should find most common element', function(done) {
    var inputs = [
      'a1',
      'a2',
      'a3',
      'a4'
    ];

    var text = 'Lorem a1 ipsum a1 dolor a1 sit a2 amet, a2 consectetur a3 adipiscing elit. Mauris nunc nunc, ultricies nec porttitor at, faucibus eu tortor. Phasellus porttitor dolor imperdiet massa tristique semper. Aenean molestie, sapien eget porta'

    var max = mostcommon(inputs, text);
    should.exist(max, 'most common element not found');
    max.should.eql('a1', 'wrong most common element found');
    done();
  });
});