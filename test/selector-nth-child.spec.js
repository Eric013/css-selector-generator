import {assert} from 'chai';
import {getNthChildSelector} from '../src/selectors';

describe('selector - nth-child', function () {

  let root;

  beforeEach(function () {
    root = document.body.appendChild(document.createElement('div'));
  });

  afterEach(function () {
    root.parentNode.removeChild(root);
  });

  it('should generate nth-child selector', function () {
    root.innerHTML = '<div></div><div></div>';
    assert.equal(getNthChildSelector(root.lastChild), ':nth-child(2)')
  });

});