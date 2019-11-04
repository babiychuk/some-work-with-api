import React from 'react';
import Table from './components/table';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoaded: false,
        };
    }

    componentWillMount() {
        fetch("https://www.googleapis.com/pagespeedonline/v5/runPagespeed/?url=https://habr.com/")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    data: json.lighthouseResult.audits,
                })
            })
    }

    render(){
        var {isLoaded} = this.state;

        if (!isLoaded){
         return <div> Loading... </div>;
        } else { console.log(this.state.data);
            return(
                <div className="main">
                    <Table data={this.state.data}/>
                </div>
            );
        }
    }
}

export default App;
