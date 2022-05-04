import quote from './Assests/ic_quote.svg';
import './Quote.css';

const Quote = () => {
    return (
        <div className="h-right">
            <div className="bg-cover"></div>
            <div className="q-wrapper">
                <img src={quote} alt="quote_icon" />
                <div className="l-top"></div>
                <h1 className="quote">
                    Don't let <span className="sub-quote">retirement</span> <br />
                    put <span className="sub-quote">an end</span> <br />
                    to <span className="sub-quote">your</span> <br />
                    <span className="sub-quote">finances.</span>
                </h1>
            </div>
            <div className="l-bottom"></div>
        </div>
    );
}

export default Quote;