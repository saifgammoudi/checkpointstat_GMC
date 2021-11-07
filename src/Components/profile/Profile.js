import { Component } from "react";
import "./profile.css"

class Profile extends Component {

render(){

return(<div>

    <div className="box">
        <div id="overlay">
          <div className="image">
            <div className="trick">
            </div>
          </div>
          <ul className="text">Saif Gammoudi</ul>
          <div className="text1">web developer</div>
          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <div className="panel panel-default">
              <div className="panel-heading " role="tab" id="headingOne">
                <h4 className="panel-title ">
                  <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded aria-controls="collapseOne">
                    <div className="title  btn btn-danger btn-outline btn-lg">ABOUT saif</div>
                  </a>
                </h4>
              </div>
              <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                <div className="panel-body">
                  Saif has been building websites for years. He enjoys making unique websites and web projects. His hobbies include photography, woodworking, leatherworking, fishing, and mid century modern furniture.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingTwo">
                <h4 className="panel-title">
                  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <div className="title btn btn-danger btn-outline btn-lg">SOCIAL</div>
                  </a>
                </h4>
              </div>
              <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div className="panel-body">
                  Walter has been building websites for years. He enjoys making unique websites and web projects. His hobbies include photography, woodworking, leatherworking, fishing, and mid century modern furniture.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingThree">
                <h4 className="panel-title">
                  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <div className="title btn btn-danger btn-outline btn-lg">CONTACT</div>
                  </a>
                </h4>
              </div>
              <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                <div className="panel-body">
                  <form id="form" className="topBefore">
                    <input id="name" type="text" placeholder="NAME" />
                    <input id="email" type="text" placeholder="E-MAIL" />
                    <textarea id="message" type="text" placeholder="MESSAGE" defaultValue={""} />
                    <input id="submit" type="submit" defaultValue="Submit Now!" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
</div>)
 


    }
}
    export default Profile



