import COVER_IMAGE from './assets/mobile-login-concept-illustration_114360-83.avif'; 
import GOOGLE_ICON from './assets/Google__G__logo.svg.webp';

const App = () => {
  return (
    <>
      <div className='w-full h-screen flex flex-col md:flex-row items-start'>
        {/* Left side image */}
        <div className='relative w-full md:w-1/2 h-1/3 md:h-full flex flex-col'>
          <div className='absolute top-[20%] left-[10%] flex flex-col'></div>
          <img src={COVER_IMAGE} className='object-cover w-full h-full' alt="Login Illustration" />
        </div>

        {/* Right side login form */}
        <div className='w-full md:w-1/2 h-full bg-[#f5f5f5] flex flex-col p-6 md:p-20 justify-between items-center'>
          <div className='w-full flex flex-col max-w-[500px] mx-auto'>
            <h1 className='text-xl md:text-2xl text-[#060606] font-semibold mb-6'>
              Venture Bridge
            </h1>
            <h3 className='text-2xl md:text-3xl font-semibold mb-2'>Login</h3>
            <p className='text-sm md:text-base mb-4'>Welcome back, please enter your details</p>

            {/* Input fields */}
            <div className='flex flex-col mb-4'>
              <input
                type='email'
                placeholder='Enter Email'
                className='w-full text-black py-2 mb-4 bg-transparent border-b border-black outline-none focus:outline-none'
              />
              <input
                type='password'
                placeholder='Enter Password'
                className='w-full text-black py-2 bg-transparent border-b border-black outline-none focus:outline-none'
              />
            </div>

            {/* Remember me and Forgot password */}
            <div className='flex items-center justify-between mb-6'>
              <div className='flex items-center'>
                <input type='checkbox' className='w-4 h-4 mr-2' />
                <p className='text-sm'>Remember me for 30 days</p>
              </div>
              <p className='text-sm font-medium cursor-pointer underline text-[#1E85FF]'>
                Forgot Password?
              </p>
            </div>

            {/* Login and Register buttons */}
            <div className='flex flex-col space-y-4 mb-4'>
              <button className='w-full text-white bg-[#1E85FF] hover:bg-blue-600 rounded-md p-4 font-semibold flex items-center justify-center'>
                Log in
              </button>
              <button className='w-full text-black bg-white border-2 border-black rounded-md p-4 font-semibold flex items-center justify-center hover:bg-blue-300'>
                Register
              </button>
            </div>

            {/* Divider */}
            <div className='flex items-center justify-center relative py-2 mb-4'>
              <div className='w-full h-[1px] bg-black/40'></div>
              <p className='text-lg absolute bg-[#f5f5f5] px-2 text-black/80'>or</p>
            </div>

            {/* Google sign-in */}
            <button className='w-full flex items-center justify-center bg-white border border-black/40 rounded-md p-4 font-semibold hover:bg-gray-100'>
              <img src={GOOGLE_ICON} className='h-6 mr-2' alt="Google Icon" />
              Sign in With Google
            </button>
          </div>

          {/* Footer Sign up link */}
          <div className='mt-4'>
            <p className='text-sm font-normal text-[#060606]'>
              Don't have an account? 
              <span className='font-semibold underline cursor-pointer text-[#1E85FF]'>
                Sign up for free
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
