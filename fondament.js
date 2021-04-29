class App extends React.Component {

    state = {
       comments: [{}],
       name: "",
       message="",

    }

    changeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    changeComments = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    keepHistory = (event) =>{
        event.preventDefault();
        let NewHistory = [...this.state.comments, this.state.name, this.state.message ]

        this.setState({
           comments: newHistory
        })

    }

    render() {

        return (
            <section>
                <h1> Say Something </h1>
                
               
                <form className="form">
                    <label htmlFor="searchInput">Votre recherche: </label>

                    <input type="text" id="NameInput" 
                        onChange={this.changeName}
                        value={this.state.name}> Your Name
                    </input>

                    <textarea id="CommentsInput"
                    onChange={this.changeComments}
                    value={this.state.message}>
                        Your comments
                    </textarea>
                    
                    <input onClick={this.keepHistory}
                    type="submit" value="Comment"/>
                </form>
                
            </section>

        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));
