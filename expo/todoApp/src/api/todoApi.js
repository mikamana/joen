import axios from "axios"

export const todoGetList = () =>{

  return async (dispatch) =>{

      const result = await axios.get(`http://192.168.50.82:8000/todo/`);

      dispatch(
        fnTodo({
          result:result.data
        })
      );

      /* axios({

        method: 'get',
        url: "http://192.168.50.82:8000/todo/"
  
      }).then((result) => {
  
        console.log(result.data);
        setTodoList(result.data);
  
      }) */



  }


}