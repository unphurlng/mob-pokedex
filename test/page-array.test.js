import pageArray from '../src/pageArray-function.js';

const test = QUnit.test;

const pokemon = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i'
];

test(' page one of 4 per page', assert => {
    //arrange
    const expected = [
        'a',
        'b',
        'c',
        'd',
    ];

    const pageOptions = {
        currentPageNumber: 1,
        perPage: 4
    };

    //act
    const result = pageArray(pokemon, pageOptions);
    //assert
    assert.deepEqual(result, expected);
});
test('page 2 with 3 per page', assert => {
    //arrange
    const expected = [
        'd',
        'e',
        'f'
    ];
    const pageOptions = {
        currentPageNumber: 2,
        perPage: 3
    };
    //act
    const result = pageArray(pokemon, pageOptions);

    //assert
    assert.deepEqual(result, expected);

});