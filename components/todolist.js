import proptypes from 'prop-types';


class todolist extends React.Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            color: this.props.todo.completed ? 'red' : 'black'
        }
    }
  render() {
      const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} ></input> {  }
            {title}
            <buuton onClick={this.props.delTodo.bind(this, id)} style={buttonStyle}>delete</buuton>
        </p>
      </div>
      
    );
  }
}

todolist.proptypes= {
    todo: proptypes.object.isRequired
  }

const buttonStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '2px 10px',
    borderRadius: '50px',
    float: 'right',
    cursor: 'pointer',
}

export default todolist;
