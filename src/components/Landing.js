import AccountForm from './AccountForm'; 
import Header from './Header';
import '../static/AccountForm.css'


const Landing = () => {
    // component for the Log In and Registration Page
    return (
        <>
            <Header />
            <div className="landingPage">
                <div className="saveDescription">
                    <h2>What is Save Tree?</h2>
                    <p>SaveTree is a message-board site created by Daniel Wile.  The board is available to anyone, and anyone can create posts on the site after they sign up.</p>
                    <p>Each post has a current site wide aggregate score of votes from other users. Posts are sorted based on highest score.</p>
                </div>
                <div className="landingPageForm"><AccountForm/></div>
            </div>
        </>
    )
}

export default Landing
