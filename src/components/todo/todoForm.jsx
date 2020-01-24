import React, {Component} from 'react'
import Grid from '../template/grid'
import IconBtt from '../template/iconButton'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {add,changeDescription, search, clear} from '../../actions/todoActions'

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(e){

        const {add, clear, search, description} = this.props

        if(e.key === 'Enter'){
            e.shiftKey ?  add(description) : search(description)
        } else if(e.key === 'Escape') {
            clear()
        }
    }

    render(){

        const {add, search, description, clear} = this.props

        return(
            <div role="form" className="todoForm"> 
                <Grid cols="12 9 10">
                    <input id="description" 
                        className="form-control" 
                        placeholder="Adicione uma tarefa" 
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}
                    />
                </Grid>
                <Grid cols="12 3 2">
                    <IconBtt  onClick={() => add(description)} style='primary' icon='plus'/>
                    <IconBtt  onClick={() => search(description)} style='info' icon='search'/>
                    <IconBtt  onClick={() => clear()} style='default' icon='close'/>
                </Grid> 
            </div>
        )
    }
}


const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({add,changeDescription,search,clear}, dispatch)
)

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)