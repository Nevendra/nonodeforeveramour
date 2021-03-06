(function() {
  'use strict';

angular.module('CollectionImageGallery', ['DesignerService', 'DesignerValue'])

.controller("CollectionImageGalleryController", function(DesignerListFactory, $location, $anchorScroll, PaginateDesigner, CollectionArray, JudeObject) {

	var self = this;

	/// setting collections ///
	self.designersArray = new DesignerListFactory(CollectionArray);
	self.featureDesignerList = self.designersArray.onlyFeature();
	self.exclusiveDesignerList = self.designersArray.onlyExclusive();

	/// set single designers ///
	self.justinAlexander = self.designersArray.getDesigner("Justin Alexander");
	self.nicoleSpose = self.designersArray.getDesigner("Nicole Spose");
	self.eddieK = self.designersArray.getDesigner("Eddy K");
	self.sincerity = self.designersArray.getDesigner("Sincerity");
	self.venus = self.designersArray.getDesigner("Venus");
	self.additionalDesigner = self.designersArray.getDesigner("Additional Designers");
	self.LillianWest = self.designersArray.getDesigner("Lillian West");
	self.Pollardi = self.designersArray.getDesigner("Pollardi");

	/// set jude info and gallery ///
	self.justJudeObject = JudeObject;
   	self.justJudeGallery = self.justJudeObject.gallery;
   	
   	/// initial paginate image for designers ///
   	self.current_page = 1;

   	self.additionalDesignerPaginate = PaginateDesigner.PaginateDesignerFunction(self.additionalDesigner[1], self.current_page, self.pageClicked);
	self.justinAlexanderPaginate = PaginateDesigner.PaginateDesignerFunction(self.justinAlexander[1], self.current_page, self.pageClicked);
	self.nicoleSposePaginate = PaginateDesigner.PaginateDesignerFunction(self.nicoleSpose[1], self.current_page, self.pageClicked);
	self.eddieKPaginate = PaginateDesigner.PaginateDesignerFunction(self.eddieK[1], self.current_page, self.pageClicked);
	self.sincerityPaginate = PaginateDesigner.PaginateDesignerFunction(self.sincerity[1], self.current_page, self.pageClicked);
	self.venusPaginate = PaginateDesigner.PaginateDesignerFunction(self.venus[1], self.current_page, self.pageClicked);
	self.LillianWestPaginate = PaginateDesigner.PaginateDesignerFunction(self.LillianWest[1], self.current_page, self.pageClicked);
	self.pollardiPaginate = PaginateDesigner.PaginateDesignerFunction(self.Pollardi[1], self.current_page, self.pageClicked);

	self.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   	}


	self.scrollToDesigner = function() {
     var newHash = "des" + self.designerId;
      if ($location.hash() !== newHash) {
        $location.hash("des" + self.designerId);
      } else {
        $anchorScroll();
      }
   	}

	self.pageClicked = false;
	self.clickedFeature = false;
	self.clickedExclusive = false;
	self.viewFeature = false;
	self.viewExclusive = false;
	self.mainHtml = true;
	self.designerHtml = true;
	self.selectedImage;
	self.selectedArray;
	self.selectedIndex;
	self.clickedThumbNail = false;
	self.records_per_page = 6;

	self.viewLargeImage = function(image, array, index) {
		self.selectedImage = image;
		self.selectedArray = array;
		self.selectedIndex = index;
		self.clickedThumbNail = true;
		self.mainHtml = false;
	}

	self.closeDesignerImageGallerySelectedImage = function() {
		self.clickedThumbNail = false;
		self.mainHtml = true;
	}

	self.prevImage = function(array) {
		self.currentArray = array;
		self.selectedImage;
		self.selectedImage = PaginateDesigner.ChangeImage(self.currentArray, self.selectedImage, true);

	}

	self.nextImage = function(array) {
		self.currentArray = array;
		self.selectedImage;
		self.selectedImage = PaginateDesigner.ChangeImage(self.currentArray, self.selectedImage, false);
	}

	self.prevPage = function(array, page) {
			self.pageClicked = true;
			self.current_page = page;
			if(self.current_page <= 1){
				self.current_page = Math.ceil(array.length/self.records_per_page);
			} else if (self.current_page > 1) {
				self.current_page = page - 1;
			}
	        	self.additionalDesignerPaginate = PaginateDesigner.PaginateDesignerFunction(array,  self.current_page, self.pageClicked);
	        	self.justinAlexanderPaginate = PaginateDesigner.PaginateDesignerFunction(array, self.current_page, self.pageClicked);
				self.nicoleSposePaginate = PaginateDesigner.PaginateDesignerFunction(array, self.current_page, self.pageClicked);
				self.eddieKPaginate = PaginateDesigner.PaginateDesignerFunction(array, self.current_page, self.pageClicked);
				self.sincerityPaginate = PaginateDesigner.PaginateDesignerFunction(array, self.current_page, self.pageClicked);
				self.venusPaginate = PaginateDesigner.PaginateDesignerFunction(array, self.current_page, self.pageClicked);
				self.LillianWestPaginate = PaginateDesigner.PaginateDesignerFunction(array, self.current_page, self.pageClicked);
				self.pollardiPaginate = PaginateDesigner.PaginateDesignerFunction(array, self.current_page, self.pageClicked);

	}

	self.nextPage = function(array, page) {
			self.pageClicked = true;
			self.current_page = page;
			if(page === Math.ceil(array.length/self.records_per_page)){
				self.current_page = 1;
			} else {
				self.current_page = page + 1;
			}
	        	self.additionalDesignerPaginate = PaginateDesigner.PaginateDesignerFunction(array,  self.current_page, self.pageClicked);
	        	self.additionalDesignerPaginate = PaginateDesigner.PaginateDesignerFunction(array,  self.current_page, self.pageClicked);
	        	self.justinAlexanderPaginate = PaginateDesigner.PaginateDesignerFunction(array, self.current_page, self.pageClicked);
				self.nicoleSposePaginate = PaginateDesigner.PaginateDesignerFunction(array, self.current_page, self.pageClicked);
				self.eddieKPaginate = PaginateDesigner.PaginateDesignerFunction(array, self.current_page, self.pageClicked);
				self.sincerityPaginate = PaginateDesigner.PaginateDesignerFunction(array, self.current_page, self.pageClicked);
				self.venusPaginate = PaginateDesigner.PaginateDesignerFunction(array, self.current_page, self.pageClicked);
				self.LillianWestPaginate = PaginateDesigner.PaginateDesignerFunction(array, self.current_page, self.pageClicked);
				self.pollardiPaginate = PaginateDesigner.PaginateDesignerFunction(array, self.current_page, self.pageClicked);
	
	}

})



})();