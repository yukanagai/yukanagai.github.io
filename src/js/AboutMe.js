import React from 'react';

const AboutMe = React.createClass({

	getInitialState() {
		return {
			expandBio: false
		}
	},

	_expandBio: function() {
		this.setState({expandBio: !this.state.expandBio});
	},

	_renderReadMoreText: function() {
		if (!this.state.expandBio) {
			return (
				<a className="expandLink" onClick={this._expandBio}>Read more.</a>
			);
		}
	},

	_renderReadLessText: function() {
		if (this.state.expandBio) {
			return (
				<a className="expandLink" onClick={this._expandBio}>Read less.</a>
			);
		}
	},

	_renderExpandedBio: function() {
		if (this.state.expandBio) {
			return (
				<div className="expandedBio">
					<p>I am currently an associate developer at Gartner working on building <a target="_blank" href="http://www.gartner.com/reviews/home">Peer Insights</a> - a peer reviews site for enterprise software tools. Our tech stack includes React, Flux, ES6 JavaScript, Sass, & Webpack.</p>

					<p>Previously I was in business development working with startups until I realized I would rather be a creator.</p>

					<p>I love working on projects that I care about, and projects that care about people. I especially value design, purpose, and simplicity.</p>

					<p>Feel free to get in touch if we can make something together.</p>
				</div>
			);
		}
	},

	render: function() {
		return (
			<div className="bio row">
				<h1>Hey what's up hello</h1>
				<p> I'm Yuka 🍒 : a front-end developer based in New York City.</p>
				{ this._renderReadMoreText() }
				{ this._renderExpandedBio() }
				{ this._renderReadLessText() }
			</div>
		);
	}
});

module.exports = AboutMe;