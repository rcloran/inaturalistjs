const iNaturalistAPI = require( "../inaturalist_api" );
const Place = require( "../models/place" );
const Project = require( "../models/project" );
const Taxon = require( "../models/taxon" );
const User = require( "../models/user" );

const search = class search {
  static index( params ) {
    return iNaturalistAPI.get( "search", params ).then( response => {
      if ( response.results ) {
        response.results = response.results.map( result => {
          switch ( result.type ) {
            case "Place":
              return new Place( result );
            case "Project":
              return new Project( result );
            case "Taxon":
              return new Taxon( result );
            case "User":
              return new User( result );
            default:
              return result;
          }
        } );
      }
      return response;
    } );
  }
};

module.exports = search.index;
