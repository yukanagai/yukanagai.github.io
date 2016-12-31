import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Thanks from './Thanks';
import Footer from './Footer';

const PageContainer = React.createClass({

	render: function() {
		return (
			<div className="pageContainer container-fluid">
				<Header />
				<AboutMe />
				<Projects />
				<Thanks />
				<Footer />
			</div>
		);
	}
});

module.exports = PageContainer;