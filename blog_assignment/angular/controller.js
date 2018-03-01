// first we have to declare the module. note that [] is where we will declare the dependecies later. Right now we are leaving it blank

// first we have to declare the module. note that [] is where we will declare the dependecies later. Right now we are leaving it blank



// this is without $scope
myApp.controller('mainController',['$http','blogService',function($http,blogService) {

  //create a context
  var main = this;


  this.pageHeading = 'edWisor Blog';
  this.pageSubHeading = 'A collection of experience by students, alumni and edWisor.com team'
  
  // i knew the result is going to be array, so i declared an empty array to initialize
  this.blogs = [];
  console.log(this.blogs);

  this.baseUrl = 'https://projectsapi.edwisor.com/api/blogs';



  this.loadAllBlogs = function(){
   blogService.getAllBlogs()
   .then(function successCallback(response){
    console.log(response.data.data);
    main.blogs = response.data.data;
   },
   function errorCallback(response) {
          alert("some error occurred. Check the console.");
          console.log(response);
        }

   );

  }// end load all blogs

 //this.loadAllBlogs();
this.deleteBlog = function(blogId,index){
  var myData = {};
  console.log(index);
  console.log(main.blogs.length);
  blogService.deleteBlog(blogId).then(function successCallback(response) {
    alert("blog deleted successfully");
      main.blogs.splice(index,1);  
      console.log(main.blogs.length);
      //window.location.reload();
      location.reload();
       

    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      alert("some error occurred. Check the console.");
      console.log(response);
    });


    }// end delete post*/
   


}]); // end controller



myApp.controller('singleBlogController',['$http','$routeParams',function($http,$routeParams) {

  //create a context
  var main = this;


  this.pageHeading = '';
  this.pageSubHeading = ''
  this.blogId = $routeParams.blogId;
  console.log(this.blogId);
  this.baseUrl = 'https://projectsapi.edwisor.com/api/blogs';
  this.loadSingeBlog = function(){
   
      $http({
        method: 'GET',
        url: main.baseUrl+'/'+main.blogId
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          main.blog = response.data.data;
          console.log(main.blog); //the old data

          main.pageHeading = main.blog.heading;
          main.pageSubHeading = main.blog.subHeading;
          }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs


}]); // end controller



myApp.controller('blogCreateController',['$http',function($http) {

  //create a context
  var main = this;


  this.pageHeading = 'Create a blog post';
  this.pageSubHeading = 'please fill all the data'
 

  this.baseUrl = 'https://projectsapi.edwisor.com/api/blogs';

  this.createPost = function(){

      var myData = {

          heading     : main.heading,
          subHeading  : main.subHeading,
          bodyHtml    : main.bodyHtml,
          author      : main.author


      }

      console.log(myData);
   
      $http({

        method: 'POST',
        data  : myData,
        url: main.baseUrl+'/create'
                

        
      }).then(function successCallback(response) {
          alert("blog created successfully");
          //index.html#/blog/SJBBX0ISz
          window.location = 'index.html#/blog/'+response.data.data.blogId;
         
          //window.location = 'index.html?blogId='+response.data.data.blogId;
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs
   


}]); // end controller



myApp.controller('blogEditController',['$http','$routeParams','$location',function($http,$routeParams,$location) {
  var main = this;
  this.pageHeading = 'Edit a blog post';
  console.log(this.pageHeading);
  this.pageSubHeading = 'Edit a blog post';
  this.baseUrl = 'https://projectsapi.edwisor.com/api/blogs';
  this.blogId = $routeParams.blogId;


    //create a context
    var main = this;

    console.log(this.blogId);
  this.blog = [];

    //this.baseUrl = 'http://ec2-52-77-247-196.ap-southeast-1.compute.amazonaws.com:3000/api/blogs';

    this.loadEditFunc = function(){
   
        $http({
          method: 'GET',
          url: main.baseUrl+'/'+main.blogId
        }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);

          main.blog = response.data.data;
          console.log(main.blog);

          main.pageHeading = main.blog.heading;
          main.pageSubHeading = main.blog.subHeading;
        
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load single blogs
   
  //Edit blog


  this.editPost = function(blogId){

      var myData = {

          heading     : main.blog.heading,
          subHeading  : main.blog.subHeading,
          bodyHtml    : main.blog.bodyHtml,
          author      : main.blog.author


      }

      console.log(myData);
   
      $http({
        method: 'PUT',
        data  : myData,
        url: main.baseUrl+'/'+main.blogId+'/edit'
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
    
          
    console.log(response);
          alert("blog edited successfully");
          //window.location = 'post.html?blogId='+main.blogId;
          //window.location = 'index.html#/blog/'+response.data.data.blogId;
          //$location.path('index.html#/blog/'+blogId);
          $location.path('/blog/'+blogId);
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end edit post


   
}]); // end controller



















































/*var myApp = angular.module('blogApp', ['ngRoute']); 


// this is without $scope
myApp.controller('mainController',['$http','blogService',function($http) {

  //create a context
  var main = this;


  this.pageHeading = 'edWisor Blog';
  this.pageSubHeading = 'A collection of experience by students, alumni and edWisor.com team'
  
  // i knew the result is going to be array, so i declared an empty array to initialize
  this.blogs = [];
  console.log(this.blogs);

  this.baseUrl = 'https://projectsapi.edwisor.com/api/blogs';



  this.loadAllBlogs = function(){
   
      $http({
        method: 'GET',
        url: main.baseUrl+'/all'
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
          main.blogs = response.data.data;
          console.log(main.blogs);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


  }// end load all blogs

  this.loadAllBlogs();




this.deleteBlog = function(blogId,index){
  var myData = {};
console.log(index);
console.log(main.blogs.length);

        $http({
    method: 'POST',
    data  : myData,
    url: main.baseUrl+'/'+blogId+'/remove'
        }).then(function successCallback(response) {
      main.blogs.splice(index,1);
      alert("blog deleted successfully");
      //window.location.reload();
      //location.reload();
      window.location = 'index.html';

      

      console.log(main.blogs.length); 

    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      alert("some error occurred. Check the console.");
      console.log(response);
    });


    }// end delete post
   


}]); // end controller



myApp.controller('singleBlogController',['$http','$routeParams',function($http,$routeParams) {

  //create a context
  var main = this;


  this.pageHeading = '';
  this.pageSubHeading = ''
  this.blogId = $routeParams.blogId;
  console.log(this.blogId);
  this.baseUrl = 'https://projectsapi.edwisor.com/api/blogs';
  this.loadSingeBlog = function(){
   
      $http({
        method: 'GET',
        url: main.baseUrl+'/'+main.blogId
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          main.blog = response.data.data;
          console.log(main.blog); //the old data

          main.pageHeading = main.blog.heading;
          main.pageSubHeading = main.blog.subHeading;
          }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs


}]); // end controller



myApp.controller('blogCreateController',['$http',function($http) {

  //create a context
  var main = this;


  this.pageHeading = 'Create a blog post';
  this.pageSubHeading = 'please fill all the data'
 

  this.baseUrl = 'https://projectsapi.edwisor.com/api/blogs';

  this.createPost = function(){

      var myData = {

          heading     : main.heading,
          subHeading  : main.subHeading,
          bodyHtml    : main.bodyHtml,
          author      : main.author


      }

      console.log(myData);
   
      $http({

        method: 'POST',
        data  : myData,
        url: main.baseUrl+'/create'
                

        
      }).then(function successCallback(response) {
          alert("blog created successfully");
          //index.html#/blog/SJBBX0ISz
          window.location = 'index.html#/blog/'+response.data.data.blogId;
         
          //window.location = 'index.html?blogId='+response.data.data.blogId;
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs
   


}]); // end controller



myApp.controller('blogEditController',['$http','$routeParams','$location',function($http,$routeParams,$location) {
  var main = this;
  this.pageHeading = 'Edit a blog post';
  console.log(this.pageHeading);
  this.pageSubHeading = 'Edit a blog post';
  this.baseUrl = 'https://projectsapi.edwisor.com/api/blogs';
  this.blogId = $routeParams.blogId;


    //create a context
    var main = this;

    console.log(this.blogId);
  this.blog = [];

    //this.baseUrl = 'http://ec2-52-77-247-196.ap-southeast-1.compute.amazonaws.com:3000/api/blogs';

    this.loadEditFunc = function(){
   
        $http({
          method: 'GET',
          url: main.baseUrl+'/'+main.blogId
        }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);

          main.blog = response.data.data;
          console.log(main.blog);

          main.pageHeading = main.blog.heading;
          main.pageSubHeading = main.blog.subHeading;
        
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load single blogs
   
  //Edit blog


  this.editPost = function(blogId){

      var myData = {

          heading     : main.blog.heading,
          subHeading  : main.blog.subHeading,
          bodyHtml    : main.blog.bodyHtml,
          author      : main.blog.author


      }

      console.log(myData);
   
      $http({
        method: 'PUT',
        data  : myData,
        url: main.baseUrl+'/'+main.blogId+'/edit'
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
    
          
    console.log(response);
          alert("blog edited successfully");
          //window.location = 'post.html?blogId='+main.blogId;
          //window.location = 'index.html#/blog/'+response.data.data.blogId;
          //$location.path('index.html#/blog/'+blogId);
          $location.path('/blog/'+blogId);
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end edit post


   
}]); // end controller*/
