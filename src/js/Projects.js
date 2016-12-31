import React from 'react';

const Projects = React.createClass({

	_renderAudiem: function() {
		return (
			<div className="project yellow row">
				<div className="col-md-6">
					<p className="title">Audiem is a listening platform for streaming and visualing artists and their music.</p>
					<div className="about">
						<p><b>Name:</b> Audiem</p>
						<p><b>Tech stack:</b> React, Node.js/Express, Instagram API, & Spotify API</p>
						<p><b>Description:</b> Audiem is a social music platform that allows listeners to stream music against a visual background of related images pulled from Instagram in real-time.</p>
						<p>This project won runner up as part of a 24 hour hackathon hosted by General Assembly in Winter 2015.</p>
					</div>
				</div>
				<div className="col-md-6">
					<img id="audiem" src="src/img/audiem.png" />
				</div>
			</div>
		);
	},

	_renderCitySounds: function() {
		return (
			<div className="project row">
				<div className="col-md-6">
					<p className="title">City/Sounds is a digital experience of any city in the world through music and weather.</p>
					<div className="about">
						<p><b>Name:</b> City/Sounds</p>
						<p><b>Tech stack:</b> React, jQuery, Node.js/Express, Spotify Web API, Echo est API, & OpenWeather API</p>
						<p><b>Description:</b> City/Sounds dynamically generates a playlist of local artists from a user inputted city using Spotify and Echo Nest's API. It also pulls the city's real-time weather forecast using OpenWeather API, which is animated across the screen based on the weather conditions.</p>
					</div>
				</div>
				<div className="col-md-6">
					<img id="citysounds" src="src/img/citysounds.png" />
				</div>
			</div>
		);
	},

	_renderCodeDesign: function() {
		return (
			<div className="project yellow row">
				<div className="col-md-6">
					<p className="title">Code + Design is a community blog platform for sharing and curating content related to code and design.</p>
					<div className="about">
						<p><b>Name:</b> Code + Design</p>
						<p><b>Tech stack:</b> JavaScript, Ruby on Rails, & PostgreSQL</p>
						<p><b>Description:</b> Code + Design is a blogging platform that allows you to register a user account and create, edit, and delete posts. This project was primarily to practice using Ruby on Rails and databases.</p>
					</div>
				</div>
				<div className="col-md-6">
					<img id="codeDesign" src="src/img/wiki.png" />
				</div>
			</div>
		);
	},

	_renderOtherProjects: function() {
		return (
			<div className="project other">
				<p className="title">My other passions include photography, travel, health, and sneakers.</p>
			</div>
		);
	},

	render: function() {
		return (
			<div className="projects row">
				{ this._renderAudiem() }
				{ this._renderCitySounds() }
				{ this._renderCodeDesign() }
				{ this._renderOtherProjects() }
			</div>
		);
	}
});

module.exports = Projects;