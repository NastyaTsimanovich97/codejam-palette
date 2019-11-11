const mocha = require('mocha');
const assert = require('assert');     // require mocha
const chai = require('chai');       // require chai 
const expect = chai.expect;

const testColor = require('../palette/js/toRgb');
const coords = require('../palette/js/coords');


describe("toRGB",function(){
    it("return color rgb(255,193,7)",function(){
        assert.equal(testColor(255,193,7),'rgb(255,193,7)');
    });
    it("return color rgb(210,193,7)",function(){
        assert.equal(testColor(210,193,7),'rgb(210,193,7)');
    });
});

describe("coordinates of pencil",function(){
    it("return coords",function(){
        assert.equal(coords(553,180), '58,40');
    });
    it("return coords",function(){
        assert.equal(coords(748, 384), '253,244');
    });
})
