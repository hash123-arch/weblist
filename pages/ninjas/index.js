import Head from 'next/head'
import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link';

export const getStaticProps = async () =>{
//this function is run when our components are rendered | async is start something new finish it later

    const res = await fetch('https://jsonplaceholder.typicode.com/users'); // we are waiting for fetch before we call the Json :: This is what await means

    const data = await res.json(); // going to be an array of objects

    return {
        props:{
            ninjas:data
        }
    }

}

const Ninjas = ({ninjas}) => {

    
    return ( 

        <>

    <Head>
      <title>Web List | Ninjas</title>
    </Head>

        <div>
            <h1>All Ninjas</h1>

            {ninjas.map(ninja => (

                <Link href={'/ninjas/'+ ninja.id} key={ninja.id}>

                    <a className={styles.single}><h3>{ninja.name}</h3></a>

                </Link>

            ))}
        </div>

    </>
     );
}
 
export default Ninjas;