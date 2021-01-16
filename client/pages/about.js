import Link from 'next/link'
import Head from 'next/head'
import { Divider, Typography } from 'antd';
const { Title, Paragraph} = Typography;
export default function About(){
	return(
		<div>
			<Title>Instructions</Title>
				<h2>Employee tab</h2>
				<Paragraph>
					Here you can access a table with the information of all employes.
					In every row there are 2 buttons, EDIT and DELETE.<br/>
					If you press this EDIT button, you will be navigated to a Form which will be already filled with the information,
					of the Employee you want to edit.<br/>
					<b>You will not be able to leave anything blank.</b><br/>
					If you press the DELETE button, you will delete the corresponding employee. 
				</Paragraph>
				<Divider/>
				<h2>Hire tab</h2>
				<Paragraph>
					Here you can access a Form in which you will be asked to fill it with the employee's information.<br/>
					<b>You will not be able to leave anything blank.</b>
				</Paragraph>
				<Divider/>
			<Link href="/">
            	<a> ← Back to home</a>
          	</Link>
		</div>
	)
}