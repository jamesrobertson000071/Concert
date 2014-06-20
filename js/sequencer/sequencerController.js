'use strict';

sequencer.controller('sequencerController', function($scope,SoundcloudSet){
	$scope.title="concert.io";
	$scope.set = SoundcloudSet;
});