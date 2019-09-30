/* eslint-disable padded-blocks */

import { should } from 'chai';
import { should as _should, videos } from './';

before(() => {
  should();
});

describe('xvideos', () => {

  it('should have xvideos api functions', async () => {
    _should.be.an('object');
    videos.should.be.an('object');
    videos.dashboard.should.be.a('function');
    videos.fresh.should.be.a('function');
    videos.search.should.be.a('function');
    videos.best.should.be.a('function');
    videos.verified.should.be.a('function');
    videos.details.should.be.a('function');
  }).timeout(10000);

});
