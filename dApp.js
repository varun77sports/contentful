var contentful = require("contentful-management");

// Connecting to Contentful
configureContentful();

function configureContentful() {
    var userContentType;
    var client = contentful.createClient({
        //space: '0j42kku7il05',
        accessToken: 'ef5328aaa09e1835fc3d7d084f5328c585b68a1ea56e937761515c1be72c1168'
    });
 client.getSpace('0j42kku7il05').then(function(space){
     console.log(space);
 space.createEntry(userContentType, {
                sys: {
                    id: '111'
                    //version: 2
                },
                fields: {
                    userName: {
                        'en-US': 'VarunSh'
                    },
                    firstName: {
                        'en-US': 'Varuna'
                    },
                    lastName: {
                        'en-US': 'Siangh'
                    }
                }
            }).then(function(entry){
                console.info(arguments);
                //Publish an Entry, making it visible to the [Content Delivery API][].
               // space.publishEntry(entry);
            }, function(obj){
                console.log("=== Failed because of something ===", obj);
            });
})
}