const iNaturalistAPI = require( "../inaturalist_api" );
const AuthorizedApplication = require( "../models/authorized_application" );

const authorizedApplications = class authorizedApplications {
  static search( params ) {
    return iNaturalistAPI.get( "authorized_applications", params, { useAuth: true } )
      .then( AuthorizedApplication.typifyResultsResponse );
  }

  static delete( params, options ) {
    return iNaturalistAPI.delete( "oauth/authorized_applications/:id", params, options );
  }
};

module.exports = authorizedApplications;
