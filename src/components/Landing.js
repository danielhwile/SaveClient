import AccountForm from './AccountForm'; 
import Header from './Header';
import '../static/AccountForm.css'


const Landing = () => {
    // component for the Log In and Registration Page
    return (
        <>
            <Header />
            <div className="landingPage">
                <div className="landingPageForm"><AccountForm isRegister={false} title={"Login"}/></div>
                <div className="landingPageForm"><AccountForm isRegister={true} title={"Register"}/></div>
            </div>
        </>
    )
}

export default Landing
