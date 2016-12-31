import React from 'react';

const Footer = React.createClass({

	render: function() {
		return (
			<footer className="row">
				<p className="col-xs-8">Yuka Nagai</p>
				<div className="col-xs-4">
					<div className="row">
						<ul className="col-xs-6">
							<li><a target="_blank" href="https://www.twitter.com/yukanagai">Twitter</a></li>
							<li><a target="_blank" href="https://www.linkedin.com/in/yukanagai">LinkedIn</a></li>
							<li><a target="_blank" href="https://www.instagram.com/_yukanagai">Instagram</a></li>
						</ul>
						<ul className="col-xs-6">
							<li><a target="_blank" href="mailto:yukanagai@gmail.com">Email</a></li>
							<li><a target="_blank" href="https://www.github.com/yukanagai">GitHub</a></li>
							<li><a target="_blank" href="src/img/yuka_nagai_resume.pdf">Resume</a></li>
						</ul>
					</div>
				</div>
			</footer>
		);
	}

});

module.exports = Footer;