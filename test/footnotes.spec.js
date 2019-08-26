/* eslint-disable no-unused-vars */
var should = require('chai').should();
/* eslint-enable no-unused-vars */
var footnotes = require('./../src/footnotes');

describe('footnotes', function() {
  it('render (basic)', function() {
    var content = footnotes('hey buddy[^1], it\'s a test [^1]: basic footnote content');
    content.should.equal(
      'hey buddy<sup id="fnref:1"><a href="#fn:1" rel="footnote">1</a></sup>, it\'s a test ' +
      '<div id="footnotes">' +
      '<hr>' +
      '<ol>' +
      '<li id="fn:1">' +
      '1. basic footnote content' +
      ' <a href="#fnref:1" rev="footnote">↩</a></li></ol></div>'
    );
  });

  it('render (random number)', function() {
    var content = footnotes('hey buddy[^13], it\'s a test [^13]: basic footnote content');
    content.should.equal(
      'hey buddy<sup id="fnref:13"><a href="#fn:13" rel="footnote">13</a></sup>, it\'s a test ' +
      '<div id="footnotes">' +
      '<hr>' +
      '<ol>' +
      '<li id="fn:13">' +
      '13. basic footnote content' +
      ' <a href="#fnref:13" rev="footnote">↩</a></li></ol></div>'
    );
  });

  it('render (inline footnote)', function() {
    var content = footnotes('hey buddy[^2](friend), it\'s a test');
    content.should.equal(
      'hey buddy<sup id="fnref:2"><a href="#fn:2" rel="footnote">2</a></sup>, it\'s a test' +
      '<div id="footnotes">' +
      '<hr>' +
      '<ol>' +
      '<li id="fn:2">' +
      '2. friend' +
      ' <a href="#fnref:2" rev="footnote">↩</a></li></ol></div>'
    );
  });

  it('render (with markdown content)', function() {
    var content = footnotes('hey buddy[^13], it\'s a test [^13]: basic footnote [content](http://example.com)');
    content.should.equal(
      'hey buddy<sup id="fnref:13"><a href="#fn:13" rel="footnote">13</a></sup>, it\'s a test ' +
      '<div id="footnotes">' +
      '<hr>' +
      '<ol>' +
      '<li id="fn:13">' +
      '13. basic footnote <a href="http://example.com">content</a>' +
      ' <a href="#fnref:13" rev="footnote">↩</a></li></ol></div>'
    );
  });
});
