import React from 'react'
import PropTypes from 'prop-types'
import { Button, TextField } from '@material-ui/core'
import { StylesProvider } from '@material-ui/core/styles';
import  SaveIcon  from '@material-ui/icons/Save'
import '../App.css'




class Add extends React.Component {
    
    state ={
      name:'',
      avatar:'',
      text:'',
      counter: 0
    }
    // событие кнопки "Добавить"
    onBtnClickHandler = (e) => 
    {
      e.preventDefault()
      const {name, avatar, text} = this.state
      this.props.onAddPosts({
        id: +new Date(),
      author: name,
      avatar_url: avatar,
      text: text,
    })
    this.setState({text:''})
    this.setState({counter: this.state.counter+1})
    }

    // создание и сохранение контента
    handleChange =(e)=>
    {
      const {id, value} = e.currentTarget
      this.setState({ [id]: value })
    }
//вывод количества постов
    countPosts = () =>{
      
      if (this.state.counter)
      {
        return(
        <strong>Обьявлений: {this.state.counter} </strong>
      )
      }
    }
// проверка на пустые поля 
    validate =()=>
    {
      const {name, avatar, text} = this.state
      if (name.trim() && text.trim() && avatar.trim()) {
        return true
      }
      return false
      }
// вывод формы добавления поста 
    render () {
      const {name, avatar, text} = this.state
      return ( 
        <form className="form_styler">
    <StylesProvider injectFirst>
      <TextField
          required id='name'
          label="Ваше имя"
          type='text'
          className="add__author"
          onChange={this.handleChange} 
          placeholder='Введите здесь' 
          value={name}
      />

      <TextField
          id='avatar' 
          type='text'
          className="add__avatar" 
          onChange={this.handleChange}
          placeholder='Введите ссылку на аватарку' 
          value={avatar}
      />
      <TextField
          id='text'
          className='add__text'
          onChange={this.handleChange}
          placeholder="Текст поста"
          multiline
          rows={7}
          variant="outlined"
          value={text}
          defaultValue=""
      />
      
      <div className='post__count'>
      {this.countPosts()}
      </div>

      <Button 
          variant="contained"
          className='add__btn'  
          onClick={this.onBtnClickHandler}
          disabled={!this.validate()}
          startIcon={<SaveIcon />}>
          Добавить
      </Button>
      
    </StylesProvider>
      </form>
      )
    }
  }

  Add.propTypes = {
    onAddPosts: PropTypes.func.isRequired,
  }

  export {Add}
  


  