var MovieTitle = prompt("What movie?");

$.ajax({
  url: 'https://www.omdbapi.com/',
  method: 'GET',
  data: {s: MovieTitle},
  success: function(data, status) {
  	console.log(data.Search); 
  React.render(<MovieBox data={data.Search}/>, document.body);
  }
});

    
var MovieBox = React.createClass({
  render: function() {
    return (
      <div className="container">
      	<div class="list-group">
      	<h1>Movie List</h1>
      	<MovieList data={this.props.data}/>
				</div>
      </div>
      );
  	}
});
     
    
var MovieList = React.createClass({
  render: function() {
    var movieNodes= this.props.data.map(function(movie) {
    return (
      	<Movie>
      		<h4>{movie.Title}</h4>
      		<h6>{movie.Year}</h6>
      	</Movie>
		);
  });
  
  return (
  	<div>
  		{movieNodes}
  	</div>
   );
  }
});

    
var Movie = React.createClass({
  render: function() {
    return (
      <div>
      	{this.props.children}
      </div>
      );
  	}
});