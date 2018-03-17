/* feedreader.js
 *
 * This is the spec for Jasmine. Tests are placed within the $() function as tests may require DOM elements.
 * $() ensures they don't run until the DOM is ready.
 * Use  console.info instead of console.log to log data to the javascript console.
*/

$(function() {

    describe('RSS Feeds', function() {
        /*  make sure that the allFeeds variable has been defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // loop through each feed in the allFeeds object and ensure it has a URL defined
        //  * and that the URL is not empty.

        it('have non-empty URLs', function() {
          for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
          }
        });

        it('have non-empty URLs', function() {
         allFeeds.forEach( function (feed){
           expect(feed.url).toBeDefined();
           expect(feed.url.length).not.toBe(0);
         })
        });

        // loop through each feed  in the allFeeds object and ensure it has a name defined
        // and that the name is not empty.

        it('have a name', function(){
            allFeeds.forEach(function(feed){
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
          })
        });

    });


    describe('The menu', function() {

      // ensure the menu element is hidden by default.
      it('is hidden by default', function() {
          let menuTest = document.querySelector('body.menu-hidden');
          expect(menuTest).not.toBe(null);
      });



      // the menu changes visibility when the menu icon is clicked.

      it('changes visibility when menu icon is clicked',
          function() {
            theMenuIconLink = document.querySelector('.menu-icon-link');

            classCheck1 = document.querySelector('body').classList.contains('menu-hidden');
            theMenuIconLink.click();
            expect(classCheck1).toBe(true);

            classCheck2 = document.querySelector('body').classList.contains('menu-hidden');
            theMenuIconLink.click();
            expect(classCheck2).toBe(false);
          });
    });



    describe('Initial Entries', function() {

      // loadFeed function is called and completes its work,there is at least a single .entry element within the .feed container.

       beforeEach(function (done){
         loadFeed(0, function(){
           done();
         });
       })

      it('has a .entry element in the .feed container', function(done){
        let entryTest = document.querySelector('.entry');
      //  console.info('EntryTest', entryTest);
        expect(entryTest).not.toBe(null);
        done();
      });


    });

    describe('New Feed Selection', function() {

        /* when a new feed is loaded by the loadFeed function that the content actually changes.
         */
         
      let myFeed1, myFeed2, myFeed1Url, myFeed2Url;

         beforeEach(function(done) {
           myFeed1 = document.querySelector('.entry-link');
           myFeed1Url = myFeed1.href;
             loadFeed(1, done);
             done();
           });

        it('has content changed', function(done){
          myFeed2 = document.querySelectorAll('.entry-link')[1];
          myFeed2Url = myFeed2.href;

          console.info(myFeed1Url, myFeed2Url);
          expect(myFeed1Url).not.toBe(myFeed2Url);
          done();
        });
    });

}());
