// Jasmine test spec

// describe( title_of_the_group_of_testspecs, function(){} )
// test homeCriteria function
describe('homeCriteria', () => {
  // it( description_of_the_unit_test, function(){} )
  it('is a function', () => {
    // actual test
    expect(typeof homeCriteria).toBe('function');
  });

  it('returns a string', () => {
    expect(typeof homeCriteria()).toBe('string');
  });
});
