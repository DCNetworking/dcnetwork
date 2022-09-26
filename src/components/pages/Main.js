import styles from './Main.module.scss'
import { useState, useEffect } from 'react';


function Main(props) {

    const quoteTable = ['Explore', 'Learn', 'Create', 'Code'];
    const [quote, setQuote] = useState(quoteTable[0])
    useEffect(() => {
        const currentIndex = quoteTable.indexOf(quote) + 1;
        const changeQuote = setInterval(() => {
            setQuote(quote =>
                quoteTable[currentIndex] !== undefined ?
                    quote = quoteTable[currentIndex] :
                    quote = quoteTable[0]
            )
        }, 800);
        return () => clearInterval(changeQuote)
    }, [quote])

    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.Bubble}></div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.titlePage}>Welcome to <span className={styles.accent}>DC</span>Network</div>
                <div className={styles.contentPage}>{quote}</div>
            </div>
        </div>
    )


}



export default Main;