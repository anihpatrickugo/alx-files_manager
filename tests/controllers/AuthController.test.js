      request.get('/disconnect')
        .set('X-Token', 'raboof')
        .expect(401)
        .end((requestErr, res) => {
          if (requestErr) {
            return done(requestErr);
          }
          expect(res.body).to.deep.eql({ error: 'Unauthorized' });
          done();
        });
    });

    it('+ Succeeds with a valid "X-Token" field', function (done) {
      request.get('/disconnect')
        .set('X-Token', token)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          expect(res.body).to.deep.eql({});
          expect(res.text).to.eql('');
          expect(res.headers['content-type']).to.not.exist;
          expect(res.headers['content-length']).to.not.exist;
          done();
        });
    });
  });
})t('+ Setting and getting an expired value', async function () {
	    await redisClient.set('test_key', 356, 1);
	    setTimeout(async () => {
		          expect(await redisClient.get('test_key')).to.not.equal('356');
		        }, 2000);
	  });

  it('+ Setting and getting a deleted value', async function () {
	      await redisClient.set('test_key', 345, 10);
	      await redisClient.del('test_key');
	      setTimeout(async () => {
		            console.log('del: test_key ->', await redisClient.get('test_key'));
		            expect(await redisClient.get('test_key')).to.be.null;
		          }, 2000);
	    });
});;
