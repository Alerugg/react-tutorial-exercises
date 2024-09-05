import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = props => {
	// 1) Replace the hard-coded image, description, link, etc. With their property variable
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};

BootstrapCard.propTypes = {
	title: PropType.string,
	description: PropType.string,
	buttonLabel: PropType.string,
	imageUrl: PropType.string,
	buttonUrl: PropType.string,
}

ReactDOM.render(<BootstrapCard
	title={"Bob Dylan"}
	description={"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."}
	buttonLabel={"Go to wikipedia"}
	buttonUrl={"https://en.wikipedia.org/wiki/Bob_Dylan"}
	imageUrl={"https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"}
	
	/>, document.querySelector("myDiv"))