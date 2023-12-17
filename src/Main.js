import Buttons from "./Buttons";

const Main = () => {
    return (
        <div>
            <div style={{backgroundColor:'#CCCCCC', padding:'10px'}}>
            <img src="https://b2804691.smushcdn.com/2804691/wp-content/uploads/2016/04/family-wellness-program-500x333.jpg?lossy=0&strip=1&webp=1" alt="image1" style={{width:'96%', height:'400px'}}/>
            </div>
            <div id="mainText" style={{ backgroundColor: '#800000' }}>
                <h2 style={{color: 'white'}}>Think Health. Think Massage.</h2>
                <p style={{color: 'white'}}>We are open 9am to 6pm. Monday through Sunday. If you like to schedule an appointment with us. please call us at 1800-0988-1245.</p>
                <div id='buttons'>
                    <Buttons btnName='LEARN MORE ABOUT US' />
                    <Buttons btnName='CONTACT US TODAY' />
                </div>
            </div>
            <div style={{marginLeft:'30px'}}>
            <p style={{color:'#800000', textAlign:'left'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam voluptates quaerat accusantium porro nesciunt velit ipsa impedit quam tempore labore fuga cum aperiam, aspernatur atque iure a enim ex? Debitis.</p>
            <p style={{textAlign:'left'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam voluptates quaerat accusantium porro nesciunt velit ipsa impedit quam tempore labore fuga cum aperiam, aspernatur atque iure a enim ex? Debitis.</p>
            <p style={{textAlign:'left'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam voluptates quaerat accusantium porro nesciunt velit ipsa impedit quam tempore labore fuga cum aperiam, aspernatur atque iure a enim ex? Debitis.</p>
            </div>
            <hr  style={{margin:'50px'}}></hr>
            <div id="mainBottom">
                <h1 style={{color:'#800000'}}>Family Wellness Massage Therapy</h1>
                <h3>9876 Main Street, Suite 123, Mainland, ML12345</h3>
                <h3>Phone: 9876543201</h3>
            </div>
        </div>
    );
}

export default Main;