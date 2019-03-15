class AddTodo extends React.Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState ({ title: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''});
    }

    render() {
      return (
        <form  onSubmit={this.onSubmit} style={{display: 'flex'}}>
            <input 
                type="text" 
                name="title"
                placeholder="Add Todo"
                style={{ marginTop: '10px', width: '190px', padding: '5px',marginLeft: '17px', marginBottom: '10px',}} 
                value={this.state.title}
                onChange={this.onChange}
                />
            <input
                type="submit"
                value="ADD"
                style={{ cursor: 'pointer', margin: '10px', width: '70px', borderRadius: '50px', backgroundColor: '#333', color: 'white'}} 
                />
        </form>
        
      );
    }
  }
  
  export default AddTodo;
  