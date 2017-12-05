  import React, { Component } from 'react';
  import $ from 'jquery';
  import './App.css';


  class App extends Component {
    constructor(){  
      super();
      this.state = {
        data: '', loading: true
      };
    }

    componentDidMount() {

      this.serverRequest = $.get('https://nouw.com/api/blogpost/feed', function(result){

        this.setState({
          data: result, loading: false
        });

      }.bind(this));

    }

    render(){
      const {data, loading} = this.state;
      if (loading === false) {
        var resultatet = [];
        
        for (var key in data){
          var a = data[key]
          for (var key in a){
            if (a[key] !== null ){
            var b = a[key]
            for (var key in b){
              if (b[key] !== null){
                var c = b[key]
                resultatet.push(<p> {c.toString()} </p> )
              }

            }
            
            }
          }
        }
      }

    return (

      <div>
      {resultatet}
      </div>
      )

    }
  }
  export default App;