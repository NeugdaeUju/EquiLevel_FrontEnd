import Form from '../components/SubForm.tsx';

function SignUp() {
    return (
        <div className='login-container'>
            <h1 className='login-container__title'>SignUp</h1>
            <Form
                button='SignUp'
                link='/login'
                linkText='You have an account ? Go there !'/>
        </div>
    )
}

export default SignUp;