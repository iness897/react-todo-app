import React, { Component } from 'react'

export default class TodoList extends Component {
    constructor(){
        super(); 
        this.state = {
            userInput : '', 
            items : []
        };
    }

    onChange(event){
       // console.log(event.target.value);
       this.setState({
        userInput: event.target.value
       });
    }

    addTodo(event){
        event.preventDefault();
        this.setState({
            userInput: '',
            items : [...this.state.items, this.state.userInput]

        }) 
    }

    deleteTodo(event){
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index, 1);
        this.setState({
            items : array
        })
    }

    renderTodos(){
        return this.state.items.map((item) =>{
            return(
                <div className='list-group-item d-flex justify-content-between align-items-center' key={item }>
                    {item}  <button className="badge bg-primary rounded-pill"onClick={this.deleteTodo.bind(this)}>X</button>
                </div>
            )
        })
    }

  render() {
    return (
      <div>
          <h1 align="center">Ma Todo List</h1>
          <form className='row mb-3'>
              <input 
                value={this.state.userInput}
                type="text"
                placeholder='Renseigner un item'
                onChange={this.onChange.bind(this)}
              />
              <button className='btn btn-primary' style={{margin:"10px 0px"}} onClick={this.addTodo.bind(this)}>Ajouter</button>
          </form>

          <div className='list-group'>
              {this.renderTodos()}
          </div>
      </div>
    );
  }
}
