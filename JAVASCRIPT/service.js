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
			this.designer = this.designerArray[i];
			if(this.designer.featureOrExclusive === "exclusive") {
				this.isExclusive = this.designer;
				this.exclusive.push(this.isExclusive);
			}
		}
		this.exclusiveArray = this.exclusive;
		return this.exclusiveArray;
	};

	DesignerListFactory.prototype.onlyFeature = function(){
		this.feature = [];
		for(var i = 0; i < this.designerArray.length; i ++){
			this.designer = this.designerArray[i];
			if(this.designer.featureOrExclusive === "feature") {
				this.isFeature = this.designer;
				this.feature.push(this.isFeature);
			}
		}
		this.featureArray = this.feature;
		return this.featureArray;
	};

	DesignerListFactory.prototype.getDesigner = function(name){
		this.additionalDesignerArray = [];
		this.additionalDesignerGalleryArray;
		this.additionalDesignerArrayAndGallery;
		for(var i = 0; i < this.designerArray.length; i ++){
			this.designerObject = this.designerArray[i];
			if(this.designerObject.name === name) {
				this.additionalDesignerArray.push(this.designerObject);
			}
		}

		for(var i = 0; i < this.additionalDesignerArray.length; i ++){
			this.additionalDesignerGalleryArray = this.additionalDesignerArray[i].gallery;
		}

		this.additionalDesignerArrayAndGallery = [this.additionalDesignerArray, this.additionalDesignerGalleryArray];
		return this.additionalDesignerArrayAndGallery;
	};

	return DesignerListFactory;
})

.service('PaginateDesigner', function(DesignerListFactory, CollectionArray){
	var self = this;
	self.PaginateDesignerFunction = function(array, page,  clickedPage){
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
					console.log(self.currentImage);
					console.log(i);
					var thisNum = i;
					if(trueOrFalse === true){
						if(thisNum === 0){
							thisNum = self.galleryArray.length - 1;
						} else {
							thisNum = thisNum - 1;
						}
					
						console.log(thisNum);
						self.galleryNewImage = self.galleryArray[thisNum].img;
					} else if (trueOrFalse === false){
						if(thisNum === self.galleryArray.length - 1){
							thisNum = 0;
						} else {
							thisNum = thisNum + 1;
						}
						console.log(thisNum);
						self.galleryNewImage = self.galleryArray[thisNum].img;
					}
				}
		}
		console.log(self.galleryNewImage);
		return self.galleryNewImage;
	}

})


})();

