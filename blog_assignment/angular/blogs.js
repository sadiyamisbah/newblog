myApp.factory('blogService',function blogFactory($http){

var blogAPIS = {};
var baseUrl = 'https://projectsapi.edwisor.com/api/blogs';

blogAPIS.getAllBlogs = function(){

	return $http({

		method : 'GET',
		url : baseUrl+'/all'
	})
}

blogAPIS.createABlog = function(blogData){

	return $http.post(baseUrl+'/create',blogData);

}

blogAPIS.editABlog = function(blogId,blogData){

	return $http.put(baseUrl+'/',blogId+'/edit',blogData);

}

blogAPIS.deleteBlog = function(blogId){

	return $http.post(baseUrl+'/',blogId+'/remove',null);

}

return blogAPIS;


});




/*myApp.service('blogService',function($http){

this.baseUrl = 'https://projectsapi.edwisor.com/api/blogs';

this.getAllBlogs = function(){

	return $http.get(baseUrl+'/all');
}


this.createABlog = function(blogData){

	return $http.post(baseUrl+'/create',blogData);

}

this.editABlog = function(blogId,blogData){

	return $http.put(baseUrl+'/',blogId+'/edit',blogData);

}

this.deleteBlog = function(blogId){

	return $http.post(baseUrl+'/',blogId+'/remove',null);

}


});*/
