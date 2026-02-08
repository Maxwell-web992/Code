mysubmit = () => {
const age =this.ageRef.current.value;
if(age < 18){ 
alert("Login Successful");}
else alert("Login Failed");
}

constructor (props);  {
super(props);
this.ageRef = React.createRef();
}
<div className="form-group">
  <label> Age </label>
  <input type="number" id="age"
    ref={this.ageRef}
    placeholder="Enter your Age" />
</div>