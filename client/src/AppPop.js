constructor(props){
  super(props);
  this.state = {
      isOpenPopup: false,
  }
  this.openPopup = this.openPopup.bind(this);
  this.closePopup = this.closePopup.bind(this);
}
openPopup(){
  this.setState({
      isOpenPopup: true,
  })
}
closePopup(){
  this.setState({
      isOpenPopup: false,
  })
}