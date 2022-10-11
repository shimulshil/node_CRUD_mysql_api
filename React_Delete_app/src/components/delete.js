import React from 'react';  
    
import axios from 'axios';  
    
export default class PostList extends React.Component {  
  state = {  
    posts: []  
  }  
    
  componentDidMount() {  
    axios.get(`http://localhost:5000/api/v1/employee`)  

      .then(res => {  
        const posts = res.data;  
        this.setState({ posts });  
      })  
  }  
    
  deleteRow(id, e){  
    axios.delete(`http://localhost:5000/api/v1/employee/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        const posts = this.state.posts.filter(item => item.id !== id);  
        this.setState({ posts });  
      })  
    
  }  
    
  render() {  
    return (  
      <div>  
        <h1> Example of React Delete Request throw API </h1>  
    
        <table className="table table-bordered">  
            <thead>  
              <tr>  
                  <th>ID</th>  
                  <th>First_Name</th>  
                  <th>Last_Name</th>  
                  <th>Email</th>  
                  <th>Phone</th>
                  <th>Organization</th>
              </tr>  
            </thead>  
    
            <tbody>  
              {this.state.posts.map((post) => (  
                <tr>  
                  <td>{post.id}</td>  
                  <td>{post.first_name}</td>  
                  <td>{post.last_name}</td>  
                  <td>{post.email}</td>
                  <td>{post.phone}</td>
                  <td>{post.organization}</td>
                  <td>  
                    <button className="btn btn-danger" onClick={(e) => this.deleteRow(post.id, e)}>Delete</button>  
                  </td>  
                </tr>  
              ))}  
            </tbody>  
    
        </table>  
      </div>  
    )  
  }  
}  