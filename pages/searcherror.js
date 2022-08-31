import styles from '../styles/Searcherror.module.css'
import Link from 'next/link'
const searcherror = () => {
    return ( 
        <>
         <div className={styles.searchContainer}>
            <div className={styles.subContainer}>
                <h3 className={styles.searchText}>Search Result For 'Money'</h3>
                <img className='img-fluid' src="searchError.png" width='95px' />
                <h2 className={styles.errorHeader}>Oops! Search Not Found</h2>
                <p className={styles.errorText}>Nothing matched your search criteria.
                    Please try again with different keywords.
                </p>
                <input className={styles.seacrhBox} type="search" name="search" id="" placeholder='Type keyword' />
                <Link href='/'><button className={styles.backButon}>Or Back To Home Page</button></Link>
            </div>
            
         </div>
        </>
     );
}
 
searcherror.layout = 'Default'
export default searcherror;