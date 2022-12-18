import React from 'react'


export default function Editprofile() {
    
    return (
        <div>
             <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <form className="box">
                 <i class="fas fa-user" style={{position:'relative',left:'-106px',top:'34px',backgroundColor:'rgb(118, 146, 146)'}}></i>
                <input type="text" name="" placeholder="username"  />

                {/* remember to apply condition for contact number of size 10 in database */}
                <input type="text" name="" placeholder="mobile number" />

                {/* <a className="forgot text-muted" href="#">Forgot password?</a> */}
                <input type="submit" name="" value="save changes"  />
                
               
              </form>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
