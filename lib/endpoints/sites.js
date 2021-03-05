const iNaturalistAPI = require( "../inaturalist_api" );
const Site = require( "../models/site" );

const sites = class sites {
  static search( params ) {
    return iNaturalistAPI.get( "sites", params )
      .then( Site.typifyResultsResponse );
  }

  static fetch( ids, params ) {
    if ( !ids || ids.length === 0 ) {
      return iNaturalistAPI.get( "sites", params )
        .then( Site.typifyResultsResponse );
    }
    return iNaturalistAPI.fetch( "sites", ids, params )
      .then( Site.typifyResultsResponse );
  }
};

module.exports = sites;
