import React from 'react';
import SearchHeader from '../components/SearchHeader'
import ReactDOM from 'react-dom'


class Container extends React.Component {
    // console.log(props)
    render(){
        return (
            <html>
                <head>
                    <link href="../../style/main.css" rel="stylesheet"/>
                    <script src="https://use.fontawesome.com/db9f01e164.js"></script>
                </head>
                <header>
                  <SearchHeader/>
                </header>
                <body>
                    <div className="container_main_body">
                        {this.props.children}
                    </div>
                </body>
            </html>
          );
    }
}
 
export default Container;