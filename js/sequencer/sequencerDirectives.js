'use strict';

sequencer.directive('audioSequencer', function(){
return {
		scope: { 
			tracklist : '=tracklist' 
		},
		template: '  <button id="play">play</button><button id="stop">stop</button><div id="sequence"></div><div id="mixer"></div>',
		controller: ['$scope', function($scope){
			console.log($scope.tracklist);
		}],
		link:function(scope, elem, attrs){
			var tracks = scope.tracklist;
			console.log(tracks);


			var x = d3.scale.linear().domain([0, 60]).range([0, 500]);

			var sequence = prong.sequence()
			.x(x)
			.tracks(tracks)
			.trackHeight(30)
			.audioOut(prong.audioContext().destination);

			d3.select('#sequence').call(sequence);

			d3.select('#play').on('click', function(){sequence.play()});
			d3.select('#stop').on('click', function(){
				if (sequence.playing()){
					sequence.stop()
				}else{
			      // if already stopped, then clicking this button resets to zero
			      sequence.currentTime(0);
			    }
			  });
			var mixer = prong.mixer().sequence(sequence);
			d3.select('#mixer').text('').call(mixer);
		}
	}
});