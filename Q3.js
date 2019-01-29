
//API call using React state (front-end)
API.getUsers(this.props.match.params.id)
.then(res => this.setState({
   user: res.data,
}))
.catch(err => console.log(err));

