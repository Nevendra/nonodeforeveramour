(function() {
  'use strict';

angular.module('DesignerService', ['DesignerValue'])

.factory('DesignerListFactory', function(){
	function DesignerListFactory(array){
		this.designerArray = array
	};

	DesignerListFactory.prototype.onlyExclusive = function(){
		this.exclusive = [];
		for(var i = 0; i < this.designerArray.length; i ++){
			this.singleDesigner = this.designerArray[i];
			if(this.singleDesigner.featureOrExclusive === "exclusive") {
				this.isExclusive = this.singleDesigner;
				this.exclusive.push(this.isExclusive);
			}
		}
		this.exclusiveArray = this.exclusive;
		return this.exclusiveArray;
	};

	DesignerListFactory.prototype.onlyFeature = function(){
		this.feature = [];
		for(var i = 0; i < this.designerArray.length; i ++){
			this.singleDesigner = this.designerArray[i];
			if(this.singleDesigner.featureOrExclusive === "feature") {
				this.isFeature = this.singleDesigner;
				this.feature.push(this.isFeature);
			}
		}
		this.featureArray = this.feature;
		return this.featureArray;
	};

	DesignerListFactory.prototype.getDesigner = function(name){
		this.getDesignerArray = [];
		this.getDesignerGalleryArray;
		this.getDesignerArrayAndGallery;
		for(var i = 0; i < this.designerArray.length; i ++){
			this.singleDesigner = this.designerArray[i];
			if(this.singleDesigner.name === name) {
				this.isNamedDesigner = this.singleDesigner;
				this.getDesignerArray.push(this.isNamedDesigner);
			}
		}

		for(var i = 0; i < this.getDesignerArray.length; i ++){
			this.getDesignerGalleryArray = this.getDesignerArray[i].gallery;
		}

		this.getDesignerArrayAndGallery = [this.getDesignerArray, this.getDesignerGalleryArray];
		return this.getDesignerArrayAndGallery;
	};

	return DesignerListFactory;
})

.service('PaginateDesigner', function(DesignerListFactory, CollectionArray){
	var self = this;
	self.PaginateDesignerFunction = function(array, page, clickedPage){
		self.currentPage = page;
		self.pageClicked = clickedPage;
		self.designerPaginateArray = [];
		self.records_per_page = 6;
		self.numPages = Math.ceil(array.length / self.records_per_page);
		for (var i = (self.currentPage-1) * self.records_per_page; i < (self.currentPage * self.records_per_page) && i < array.length; i++) {
			self.designerPaginateArray.push(array[i]);
    	}
  		return self.designerPaginateArray;
	};


	self.ChangeImage = function(array, image, trueOrFalse){
		self.galleryArray = array;
		self.currentImage = image;
		self.galleryNewImage;
		for(var i = 0; i < self.galleryArray.length; i++){
			self.galleryImages = self.galleryArray[i];
				if(self.galleryImages.img === self.currentImage){
					var thisNum = i;
					if(trueOrFalse === true){
						if(thisNum === 0){
							thisNum = self.galleryArray.length - 1;
						} else {
							thisNum = thisNum - 1;
						}
					
						self.galleryNewImage = self.galleryArray[thisNum].img;
					} else if (trueOrFalse === false){
						if(thisNum === self.galleryArray.length - 1){
							thisNum = 0;
						} else {
							thisNum = thisNum + 1;
						}
						self.galleryNewImage = self.galleryArray[thisNum].img;
					}
				}
		}
		return self.galleryNewImage;
	}

})


})();

