import React , {Component , Fragment} from 'react'
import { Message , Button} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

class NotFound extends Component {
  render(){
    return(
        <Fragment>
          <Message negative>
            <Message.Header>
              404 page not found
              <Button
                positive
                as={NavLink} to='/'
              >
                return to home page
              </Button>
            </Message.Header>
          </Message>


        </Fragment>
    )
  }
}

export default NotFound
