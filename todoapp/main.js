var items = [
  {todo: "Groceries"},
  {todo: "Laundry"},
  {todo: "Mountain climbing"}
 ]

var App = React.createClass({
	getInitialState: function() {
		return { items: [] }
	},
	onChange: function(e) {
		this.setState({items: e.target.value});
	},
	handleSubmit: function(todo) {
		items.push({todo: todo});
		this.setState({items: todo})
	},
	render: function() {
		var itemList = items.map(function(item) {
			return <Item item={item.todo} />
		});
		return (
			<div>
				<h1 id="title">To-do List</h1>
				<SubmitForm onAddItem={this.handleSubmit} />
				{itemList}
			</div>
		)
	}
});

var Item = React.createClass({
	render: function() {
		return (
			<div id="todoItem">
				{this.props.item}
			</div>
		);
	}
});

var SubmitForm = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
		var newItem = this.refs.newItem.value;
		this.props.onAddItem(newItem);
		this.refs.newItem.value = "";
	},
	render: function() {
		return (
			<form onSubmit={this.handleSubmit} id="form">
				<input type="text" ref="newItem" id="submitBox"/>
				<input type="submit" ref="submit" id="submitButton"/>
			</form>
		)
	}
});


ReactDOM.render(<App />, document.getElementById('content') );