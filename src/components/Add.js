import React from 'react'
import PropTypes from 'prop-types'
import { Button, TextField } from '@material-ui/core'
import  SaveIcon  from '@material-ui/icons/Save'
import '../App.css'




class Add extends React.Component {
    
    state ={
      name:'',
      avatar:'',
      text:''
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
    }

    handleChange =(e)=>
    {
      const {id, value} = e.currentTarget
      this.setState({ [id]: value })
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
          rows={6}
          variant="outlined"
          value={text}
      />
      <Button 
          variant="contained"
          className='add__btn'  
          onClick={this.onBtnClickHandler}
          disabled={!this.validate()}
          startIcon={<SaveIcon />}>
          Добавить
      </Button>
      </form>
      )
    }
  }

  Add.propTypes = {
    onAddPosts: PropTypes.func.isRequired,
  }

  export {Add}
  


  