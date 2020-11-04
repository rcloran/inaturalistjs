const Model = require( "./model" );

const Relationship = class Relationship extends Model {
  static typifyInstanceResponse( response ) {
    return super.typifyInstanceResponse( response, Relationship );
  }

  static typifyResultsResponse( response ) {
    return super.typifyResultsResponse( response, Relationship );
  }
};

module.exports = Relationship;
