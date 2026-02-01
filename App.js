import react  from 'react';
class student extends react.Component {
constructor(){
super();
this.state={
name:"Maxwell",
age:9,
grade:4,
favorite_color:"blue",
favorite_sports:"soccer"
};
}

render(){
return(
<div>
  <h1>Student Information</h1>
  <p>My name is {this.state.name}.</p>
  <p>My grade is {this.state.grade}.</p>
  <p>My favorite color is {this.state.favorite_color}.</p>
  <p>My favorite sport is {this.state.favorite_sports}.</p>
</div>
);
}
}


export default student; 