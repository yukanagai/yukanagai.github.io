import React from 'react';

const Thanks = React.createClass({

	render: function() {
		return (
			<div className="thanks yellow">
				<p>Thanks for stopping by 👋!<br/>
				If you would like to collaborate and create together <br/>
				feel free to <a href="mailto:yukanagai@gmail.com">get in touch.</a></p>
			</div>
		);
	}

});

module.exports = Thanks;