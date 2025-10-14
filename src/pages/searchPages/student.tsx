import { useEffect } from "react";

//import propTypes from 'prop-types'
interface IStudent {

	name: string;
	age: number;
}

function Student(props: IStudent) {

	useEffect(() => {
		console.log("Render");
	},[]);

	useEffect(() => {
		return () => { 
			console.log("Not Render");
		}
	}, []);

	return (
		<>
			<div>
				<p>Name: { props.name }</p>
				<p>Age: { props.age }</p>
			</div>
		</>
	)
}

Student.defaultProps = { name: "Guest", age: 10 }

export default Student;