const imageLink1 = "https://assets.ccbp.in/frontend/react-js/rcb-img.png";
const imageLink2 = "https://assets.ccbp.in/frontend/react-js/csk-img.png"

const imageOne = <img src={imageLink1}></img>;


const element = (<div className="root_container">
    <h1 className = 'heading'>Super Over league</h1>
    <div className = 'image-container'>
        <img src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"/>
        <img src="https://assets.ccbp.in/frontend/react-js/csk-img.png"/>>
    </div>
</div>
);

ReactDOM.render(element, document.getElementById("root"));
