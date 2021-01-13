const iNaturalistAPI = require( "../inaturalist_api" );

const observationSounds = class observationSounds {
  static create( params, options ) {
    return iNaturalistAPI.upload( "observation_sounds", params, options );
  }

  static update( params, opts ) {
    const options = Object.assign( { }, opts );
    options.method = "PUT";
    return iNaturalistAPI.upload( "observation_sounds/:id", params, options );
  }

  static delete( params, options ) {
    return iNaturalistAPI.delete( "observation_sounds/:id", params, options );
  }
};

module.exports = observationSounds;
