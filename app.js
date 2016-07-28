//var http = require("http");
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
//console.log(space);
        // Retrieve a content type by its ID (not its name)
       //space.getContentTypes().then(function(obj) {
            //console.info(obj);
        //});

        //Retrieve all content types for the space
    //   space.getContentType('user').then(function(obj) {
    //        // console.info(obj);
    //     });

        // Retrieve all published content types for the space
        // space.getPublishedContentTypes().then(function(obj) {
        //     console.info(obj);
        // });
       //console.info(space);
        space.getContentType('user').then(function(userContentType) {
           // console.info(userContentType);
            
            //Create a new entry by providing field values and and an optional I
            // space.createEntry('user', {
            //     sys: {
            //         id: 'user'
            //         //version: 2
            //     },
            //     fields: {
            //         userName: {
            //             'en-US': 'VarunSh'
            //         },
            //         firstName: {
            //             'en-US': 'Varuna'
            //         },
            //         lastName: {
            //             'en-US': 'Siangh'
            //         }
            //     }
            // }).then(function(entry){
            //     console.info(arguments);
            //     //Publish an Entry, making it visible to the [Content Delivery API][].
            //    // space.publishEntry(entry);
            // }, function(obj){
            //     console.info("=== Failed because of something ===", obj);
            // });

            // Updating the Entry
            // space.updateEntry('user',{
            //     sys: {
            //         id: 'user',
            //         version: 2
            //     },
            //     fields: {
            //         userName: {
            //             'en-US': 'VarunSingh'
            //         },
            //         firstName: {
            //             'en-US': 'Pratap'
            //         },
            //         lastName: {
            //             'en-US': 'Pilla'
            //         }
            //     }
            // }).then(function(entry){
            //     console.info(arguments);
            //     //Publish an Entry, making it visible to the [Content Delivery API][].
            //     space.publishEntry(entry);
            // }, function(obj){
            //     console.info("=== Failed because of something ===", obj);
            // });

        });


        //Fetch collection of entries
        // space.getEntries({content_type: 'user', 'fields.userName[match]': 'VarunSingh'}).then(function(collection) {
        //     console.log(collection.items[0].fields);
        //     //console.log(collection)
        //    //console.info(collection[0].fields);
        //     // Delete an entry
        //     console.log(">>>>>>>");
        //    console.log(space.deleteEntry(collection));
           
        // });

        // Delete a content type, note that the content type must be unpublished
        // (and therefore have no entries) before it can be deleted
        /*space.deleteContentType('user').then(function(obj) {
            console.info(obj);
        });*/

        /*space.createContentType({
            sys: {
                id: 'blog-post'
            },
            name: 'Blog Post',
            description: 'For like, blogging',
            fields: [{
                id: 'title',
                name: 'Title',
                type: 'Text'
            }, {
                id: 'body',
                name: 'Body',
                type: 'Text'
            }]
        });*/
    });

    /**/
}
