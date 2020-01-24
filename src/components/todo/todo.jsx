import React from 'react';
import Header from '../template/pageHeader'
import Form from './todoForm'
import List from './todoList';


export default props => {
        return(
            <div>
                <Header name="Tarefas" small="Cadastro"/>
                <Form />
                <List />
            </div>
        )
}