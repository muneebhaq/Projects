class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
    //binding if using class, necessary
    this.handleClick = this.handleClick.bind(this);
    }

    //setting the state to opposite
    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    //Displaying the button
    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
export default Toggle