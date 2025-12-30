import { Context, useContext, useEffect } from "react";
import ContextCustom from "./ContextCustom";

//import propTypes from 'prop-types'
interface IStudent {
	name: string;
	age: number;
	func: any;
}

function Student(props: IStudent) {

	const value = useContext(ContextCustom);
	console.log( "000 nder = ", value);


	useEffect(() => {
		console.log(value," Render = ", props.func);
		if (props.func !== undefined) {
			props.func();
		}
	},[]);

	useEffect(() => {
		return () => { 
			console.log(value," Not Render");
		}
	}, []);

	return (
		<>
			<div>
				<p>Name: { props.name }</p>
				<p>Age: {props.age}</p>
				<p>{value.name}</p>
			</div>
		</>
	)
}

Student.defaultProps = {
	name: "Guest", age: 10, func: () => { } }

export default Student;


