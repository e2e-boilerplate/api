const glob = require( 'glob' );

glob( 'api/**/*.json', ( err, files ) => {
    console.log( files );
});
