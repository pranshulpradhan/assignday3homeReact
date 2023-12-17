import './App.css';

const Header = () => {
    return (
        <div id="header-div">
            <div id="firstHead"  style={{textAlign:'left', marginLeft:'30px'}}>
                <h1 style={{color:'#800000', textAlign:'left'}}>Family Wellness</h1>
                <h3>MASSAGE THERAPY</h3>
            </div>
            <div className="buttonContainer">
                <button className="button" id="home">HOME</button>
                <button className="button" id="about">ABOUT</button>
                <button className="button" id="services">SERVICES</button>
                <button className="button" id="faq">FAQ</button>
                <button className="button" id="contact">CONTACT</button>
            </div>
        </div>
        
        
    );
}

export default Header;