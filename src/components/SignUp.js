import React, { Component } from 'react';
import '../styles/signupseperate.css'

class SignUp extends Component {

    state = {
        fname:'',
        lname:'',
        email:'',
        password:'',
        gender:'',
        dob:'',
        branch:'',
        semester:'',
        msg:null,
    }

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        // console.log(this.state.email)
    }

    onSubmit=(e)=>{
        e.preventDefault();

        const { fname, lname, email, password, gender, dob, branch, semester } = this.state
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


        if(!fname || !lname || !email || !password || !gender || !dob || !branch || !semester){
            this.setState({msg:'Please enter all fields.'})
        }else if(fname.trim()==='' || lname.trim()==='' || email.trim()==='' || password.trim()===''){
            this.setState({ msg:'Invalid fields.' })
        }
        else if( fname.length < 3 || fname.length >10 || lname.length<3 || lname.length>10 ){
        this.setState({ msg:'Name must contain 3-10 characters.' })
        }else if(reg.test(email) === false){
        this.setState({ msg:'Invaild email.' })
        }else if( password.length < 5 || password.length > 25 ){
        this.setState({ msg:'Password must contain 5-25 characters.' })
        }else{
            this.setState({msg: null})
            console.log("Sab thik hai vro")
        }
    }

  render() {
    return (
        <div class="html">
        <div class="body">
        <div class="row myrow">
            <div class="col-md-6">
                <img src="images/connect.png" alt="" class="logo"/>
                
                <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui rerum ex eius tenetur aliquam, facere itaque minima cum voluptate vero accusamus quia, nobis, vitae quasi at ad. Officiis, molestias odio.</p>
                {/* <canvas id="cnv"></canvas> */}
            </div>

            <div class="col-md-6">
                <form method="post" class="right" onSubmit={this.onSubmit}>
                    <h1 class="heading">Sign Up</h1>
                    <p>Connect with the awesome world inside Jamia</p>
                    {/* <br/> */}
                    <p id="err">{this.state.msg}</p>
                    <input name="fname" type="text" class="fname" placeholder="First Name" onChange={this.onChange}/>
                    <input name="lname" type="text" class="lname" placeholder="Last Name" onChange={this.onChange}/>
                    <br/>
                    <input name="email" type="text" class="frm" placeholder="Email Address" onChange={this.onChange}/>
                    <br/>
                    <input name="password" type="password" class="frm" placeholder="Password" onChange={this.onChange}/>
                    <br/>
                    <label class="one">Gender</label>
                    <div class="two">
                    <input type="radio" id="male" name="gender" value="male" onChange={this.onChange}/>
                    <label for="male">Male</label>
                    </div>
                    <div class="three">
                    <input type="radio" id="female" name="gender" value="female" onChange={this.onChange}/>
                    <label for="female">Female</label>
                    </div>
                            
                    <br/>
                    <input type="date" id="dob" name="dob" onChange={this.onChange}/>
                    <label for="dob">Date of Birth</label>
                    <br/>
                    <select name="branch" id="branch" class="branch" onChange={this.onChange}>
                    <option>Computer Sciences Engineering</option>
                    <option>Electronics Engineering</option>
                    <option>Electrical Engineering</option>
                    <option>Mechanical Engineering</option>
                    <option>Civil Engineering</option>
                    </select>
                    <br/>
                    <label for="Semester"></label>
                    <select name="semester" id="semester" class="branch" onChange={this.onChange}>
                    <option>Semester I</option>
                    <option>Semester II</option>
                    <option>Semester III</option>
                    <option>Semester IV</option>
                    <option>Semester V</option>
                    <option>Semester VI</option>
                    <option>Semester VII</option>
                    <option>Semester VIII</option>
                    <option>Passout / Alumni</option>

                    </select>
                    <br/>

                    

                    <button type="submit" class="signupbtn">Sign Up</button>
                    <br/>
                    <a class="loginuser" href="/login">Already a User? Log In Instead</a>

                </form>
            </div>
        </div>
        {/* <br/><br/><br/><br/><br/><br/> */}
        </div>
        </div>
    )
    
}
}


export default SignUp;
