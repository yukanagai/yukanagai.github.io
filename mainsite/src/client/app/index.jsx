import React from 'react';
import {render} from 'react-dom';

var Page = React.createClass ({

	getInitialState: function() {
    return {
    	paneView: null
    };
	},

	_togglePane: function(view) {
		if (view == 'more' && this.state.paneView !== 'more') {
			this.setState({paneView: 'more'})
		} else if (view == 'about' && this.state.paneView !== 'about') {
			this.setState({paneView: 'about'})
		} else {
			this.setState({paneView: null})
		}
	},

	_renderMorePane: function() {
		if (this.state.paneView == 'more') {
			return (
				<div className="pane" id="moreContainer">
					<h1>HI</h1>
				</div>
			);
		}
	},

	_renderAboutPane: function() {
		if (this.state.paneView == 'about') {
			return (
				<div className="pane" id="aboutContainer">
					<h5>Yuka is a front-end web developer based in NYC. She is creative, curious, and into design. She is currently available for small and interesting projects.</h5>

					<h5>Contact: <a href="mailto:yukanagai@gmail.com">yukanagai@gmail.com</a></h5>
				</div>
			);
		}
	},

  render () {
    return (
	    <div className="pageWrapper">
	    	<div className="navContainer row">
	    		<div className="headerRow">
	    			<a id="more"
	    					className="paneLink"
	    					onClick={this._togglePane.bind(null, 'more')}>
	    						More
	    			</a>
	    			<h1>Yuka Nagai</h1>
	    			<a id="about"
	    					className="paneLink"
	    					onClick={this._togglePane.bind(null,'about')}>
	    						About
	    			</a>
	    		</div>
	    	</div>

	    	{this._renderMorePane()}
	    	{this._renderAboutPane()}

	    </div>
    )
  }
});

render(<Page/>, document.getElementById('app'));