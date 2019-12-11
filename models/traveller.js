const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function() {
  return this.journeys.map(journey => {
    return journey.endLocations;
  });
};

Traveller.prototype.getJourneysByTransport = function(transport) {
  return this.journeys.map(journey => {
    return journey.transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function(minDistance) {};

Traveller.prototype.calculateTotalDistanceTravelled = function() {};

Traveller.prototype.getUniqueModesOfTransport = function() {};

module.exports = Traveller;
