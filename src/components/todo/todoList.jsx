import React from 'react'
import IconButton from '../template/iconButton'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {markAsDone,markAsPeding,markAsRemove} from '../../actions/todoActions'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ?  'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done} onClick={() => props.markAsDone(todo)}/>
                    <IconButton style='warning' icon='undo' hide={!todo.done} onClick={() => props.markAsPeding(todo)}/>
                    <IconButton  style='danger' icon="trash-o" hide={!todo.done} onClick={() => props.markAsRemove(todo)}/>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({
    list: state.todo.list
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({markAsDone,markAsPeding,markAsRemove}, dispatch)
)

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)