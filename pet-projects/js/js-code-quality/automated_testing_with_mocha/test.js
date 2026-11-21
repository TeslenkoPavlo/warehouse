'use strict';

describe("pow", function() {


    it('для недійсних n результатом є NaN', function() {
        assert.isNaN( pow(2, -1) );
    });

    it('для не цілих n результатом є NaN', function() {
        assert.isNaN( pow(2, 1.5) );
    });



    /*describe('підносить х до степеня 3', function () {
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} піднесення до степеня 3 дорівнює
            ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for(let x = 1; x <= 5; x++) {
            makeTest(x);
        }
    })*/

   /* it("підносить до степеня 3 дорівнює 8", function() {
        assert.equal(pow(2, 3), 8);
    });

    it('підносить до степеня 4 дорівнює 81', function() {
        assert.equal( pow(3, 4), 81);
    });*/

});

/*describe("test", function() {

    before(() => alert("Тестування розпочато – перед усіма тестами"));
    after(() => alert("Тестування завершено – після всіх тестів"));

    beforeEach(() => alert("Перед тестом – початок тесту"));
    afterEach(() => alert("Після тесту – вихід з тесту"));

    it('test 1', () => alert(1));
    it('test 2', () => alert(2));

});*/
