'use strict';

describe('the sequencer',function(){
	beforeEach(function(){
		module('sequencer')
	});
	describe('the sequencer controller',function(){
		var scope;
		beforeEach(inject(function($controller,$rootScope){
			scope = $rootScope.$new();
			$controller('sequencerController',{$scope:scope});
		}));
		it("scope is defined",function(){
			expect(scope).not.toEqual(null);
		});
		it("has title set correctly",function() {
			expect(scope.title).toEqual("concert.io");
		});
	});

	describe('the sequencer services',function(){
		var soundcloudSet;
		beforeEach(inject(function(SoundcloudSet){
			soundcloudSet = SoundcloudSet;
		}));
		it('has a service',function(){
			expect(soundcloudSet).not.toBe(null);
		});
		it("returns a soundcloud set",function(){
			expect(soundcloudSet).toBe("a soundcloud set");
		})
	});
});