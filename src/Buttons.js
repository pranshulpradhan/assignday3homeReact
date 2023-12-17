const Buttons = (props) => {
    return (
        <button style={{border:'2px solid white', backgroundColor:'#800000', color:'white', padding:'5px', margin:'10px'}}>{props.btnName}</button>
    );
}

export default Buttons;